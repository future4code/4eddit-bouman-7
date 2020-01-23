import axios from "axios";
import { push } from "connected-react-router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: {
        posts
    }  
})

export const getPosts = () => async (dispatch) => {
    try {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: {
                auth: token
            }
        }
        const response = await axios.get(`${baseURL}/posts`, config)
    
        console.log(response.data.posts)
        dispatch(setPosts(response.data.posts))
        
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível carregar o feed")
    }
}