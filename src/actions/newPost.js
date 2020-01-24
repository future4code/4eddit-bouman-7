import axios from "axios";
import  fetchPosts  from "./getPosts"


const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const newPost = (title, text) => async (dispatch) => {
    
    const newPostInfo = {
        title: title,
        text: text
    }

    const token = window.localStorage.getItem("token")

    const config = {
        headers: {
          auth: token
        }
      }
    
    try {
        const response = await axios.post(`${baseURL}/posts`, newPostInfo, config)
        console.log(response)
        dispatch(fetchPosts())
        window.alert("Post enviado com sucesso!")


    } catch (error) {
        console.log(error)
        window.alert("Não foi possível enviar o post")
    }
}