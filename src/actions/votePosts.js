import axios from "axios";
import getPosts from "./getPosts";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const setPostId = (postId) => ({
    type: "SET_CLICKED_POST_ID",
    payload: {
        postId
    }
})

export const votePost = (postId, direction, userVoteDirection) => async (dispatch) => {
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
            await axios.put(`${baseURL}/posts/${postId}/vote`, upVote, config)
            dispatch(getPosts())
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
            await axios.put(`${baseURL}/posts/${postId}/vote`, downVote, config)
            dispatch(getPosts())
          } 
          
          catch (error){
            console.log(error)
            window.alert("Ocorreu um erro.")
          }
      }

}