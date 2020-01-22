import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard"
import Routes from "connected-react-router"
import { connect } from "react-redux"
import styled from "styled-components"
import { getPosts } from "../../actions/getPosts";


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
  fetchPosts: () => dispatch(getPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);