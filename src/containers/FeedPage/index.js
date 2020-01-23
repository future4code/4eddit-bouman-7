import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { connect } from "react-redux";
import styled from "styled-components";
import { getPosts } from "../../actions/getPosts";
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";


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
    this.props.fetchPosts()

    const token = window.localStorage.getItem('token')
    if (token === null) {
      this.props.GoToLogin()
    }
  }

  render() {
    return (
      <PostsContainer>
          {this.props.allPosts.map(post => (<PostCard post={post} />))}
      </PostsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.postsReducer.allPosts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(getPosts()),
  GoToLogin: () => dispatch(push(routes.root))
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
function mapDispatchToProps(dispatch) {
  return {
    GoToLogin: () => dispatch(push(routes.root))
  }
}


export default connect(null, mapDispatchToProps)(FeedPage);
