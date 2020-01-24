import axios from "axios";

export const setPostId = (postId) => ({
    type: "SET_CLICKED_POST_ID",
    payload: {
        postId
    }
})

