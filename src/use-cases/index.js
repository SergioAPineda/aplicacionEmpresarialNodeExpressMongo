import makeAddComment from './add-comment'
import makeEditComment from './edit-comment'
import makeRemoveComment from './remove-comment'
import makeListComments from './list-comments'
import makeHandleModeration from './handle-moderation'
import commentsDb from '../data-access'
import makeListAllComments from './list-allComments'

const handleModeration = makeHandleModeration({
  initiateReview: async () => {} // TODO: Make real initiate review function.
})
const addComment = makeAddComment({ commentsDb, handleModeration })
const editComment = makeEditComment({ commentsDb, handleModeration })
const listComments = makeListComments({ commentsDb })
const removeComment = makeRemoveComment({ commentsDb })
const listAllComments = makeListAllComments({ commentsDb })

const commentService = Object.freeze({
  addComment,
  editComment,
  handleModeration,
  listComments,
  removeComment,
  listAllComments
})

export default commentService
export { addComment, editComment, listComments, removeComment, listAllComments }
