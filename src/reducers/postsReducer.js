const initialState = {
    allPosts: [],
    clickedPostId: "",
    selectedPost: {}
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_POSTS":
            return {...state, allPosts: action.payload.posts}
        case "SET_CLICKED_POST_ID":
                return {...state, clickedPostId: action.payload.postId}
        case "SET_POST_DETAILS":
                return {...state, selectedPost: action.payload.details}
        case "SET_COMMENT_ACTION":
                return {...state, comments: action.payload.comments}
        default:
            return state;
    }
}

export default postsReducer;