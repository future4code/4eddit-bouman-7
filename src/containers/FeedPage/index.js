import React, { Component } from "react";
<<<<<<< HEAD
import PostCard from "../FeedPage/PostCard"
import Routes from "connected-react-router"
import { connect } from "react-redux"
import styled from "styled-components"
import { getPosts } from "../../actions/getPosts";
=======
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";
>>>>>>> master


const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    padding: 30px;
    margin: 0 auto;

`

class FeedPage extends Component {

  componentDidMount() {
<<<<<<< HEAD
    this.props.fetchPosts()

  }
  
=======
    const token = window.localStorage.getItem('token')

    if (token === null) {
      this.props.GoToLogin()
    }
  }

>>>>>>> master
  render() {
    return (
      <PostsContainer>
          {this.props.allPosts.map(post => (<PostCard post={post} />))}
      </PostsContainer>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  allPosts: state.postsReducer.allPosts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(getPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
=======
function mapDispatchToProps(dispatch) {
  return {
    GoToLogin: () => dispatch(push(routes.root))
  }
}


export default connect(null, mapDispatchToProps)(FeedPage);
>>>>>>> master
