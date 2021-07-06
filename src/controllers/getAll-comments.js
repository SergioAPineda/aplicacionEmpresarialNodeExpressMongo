import { Observable } from "rxjs"

export default function makeGetAllComments ({ listAllComments }) {
  return async function getAllComments () {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const postComments = await listAllComments()

      const getCommentsEvent$ = new Observable( subs => {

        subs.next(postComments)

      })

      getCommentsEvent$.subscribe(res => console.log("Se ha lanzando una solicitud para listar todos los comentarios registrados en la base de datos"));

      
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