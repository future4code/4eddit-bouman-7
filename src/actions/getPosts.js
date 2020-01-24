import axios from "axios";
import { push } from "connected-react-router";
import { setPostId } from "./votePosts"

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: {
        posts
    }  
})

export const setPostDetails = (details) => ({
    type: 'SET_POST_DETAILS',
    payload: {
        details
    }
})

 const getPosts = () => async (dispatch) => {
    try {
        const token = window.localStorage.getItem("token")
        const config = {
            headers: {
                auth: token
            }
        }
        const response = await axios.get(`${baseURL}/posts`, config)
    
        // console.log(response.data.posts)
        dispatch(setPosts(response.data.posts))
        
    } catch(error) {
        console.log(error)
        window.alert("Não foi possível carregar o feed")
    }
}

export const getPostDetail = (postId) => async (dispatch) => {
    const token = window.localStorage.getItem("token")
    const config = {
        headers: {
            auth: token
        }
    }
    
    try {
        const response = await axios.get(`${baseURL}/posts/${postId}`, config)
        dispatch(setPostDetails(response.data.post))

    } catch (error) {
        console.log(error)
        window.alert("Ocorreu um erro.")
    }
}

export const setCommentIdAction = (commentId) => ({
    type: "SET_COMMENT_ACTION",
    payload: {
        commentId
    }
})

export const createComment = (text, postId) => async (dispatch) => {

    const newComment = {
        text, 
    }

    const token = window.localStorage.getItem("token")

    const config = {
        headers: {
          auth: token
        }
      }

    try {
        await axios.post (`${baseURL}/posts/${postId}/comment`, newComment, config)
        window.alert("Comentário Enviado")
        dispatch(getPostDetail(postId)) 
    } catch (error) {
        window.alert("Falha ao enviar comentário")
    }
}

export const voteComment = (postId, commentId, direction, userVoteDirection) => async (dispatch) => {
    const token = window.localStorage.getItem("token")

    const config = {
        headers: {
          auth: token
        }
      }

      if (userVoteDirection === direction) {
        
        const upVote = {
            direction: 0
        }
        
        try {
            await axios.put(`${baseURL}/posts/${postId}/comment/${commentId}/vote`, upVote, config)
            dispatch(getPostDetail())
          } 
          
          catch (error){
            console.log(error)
            window.alert("Ocorreu um erro.")
          }


      } else {
        const downVote = {
            direction: direction
        }
        
        try {
            await axios.put(`${baseURL}/posts/${postId}/comment/${commentId}/vote`, downVote, config)
            dispatch(getPostDetail())
          } 
          
          catch (error){
            console.log(error)
            window.alert("Ocorreu um erro.")
          }
      }

}

export default getPosts;