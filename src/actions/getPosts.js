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
        const response = await axios.get(`${baseURL}/posts`, {headers: {'Content-Type': 'application/json', 
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlphR1dLRWRjZXlaWjlORkxPUGgxIiwiZW1haWwiOiJwZWRyby5kYXJ2YXNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJkYXJ2YXMiLCJpYXQiOjE1NzM1Nzk5MTd9.sKiIIRgiQm2qesnrNmFujNlXF02ytx-IvLKnNFHqXgA'}
    })
        console.log(response.posts)
        
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível carregar o feed")
    }
}