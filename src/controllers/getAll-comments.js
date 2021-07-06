export default function makeGetAllComments ({ listAllComments }) {
  return async function getAllComments () {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const postComments = await listAllComments()
      return {
        headers,
        statusCode: 200,
        body: postComments
      }
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}