const initialState = {
    allPosts: []
}

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_POSTS":
            return {...state, allPosts: action.payload.posts}
        default:
            return state;
    }
}

export default postsReducer;