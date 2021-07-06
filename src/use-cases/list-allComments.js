export default function makeListAllComments ({ commentsDb }) {
  return async function listAllComments () {

    const comments = await commentsDb.findAll({
      publishedOnly : false
    })
    const nestedComments = nest(comments)
    return nestedComments

    function nest (comments) {
      if (comments.length === 0) {
        return comments
      }
      return comments.reduce((nested, comment) => {
        comment.replies = comments.filter(
          reply => reply.replyToId === comment.id
        )
        nest(comment.replies)
        if (comment.replyToId == null) {
          nested.push(comment)
        }
        return nested
      }, [])
    }
  }
}