import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard"
import Routes from "connected-react-router"
import { connect } from "react-redux"
import styled from "styled-components"

const posts = [
    {
        username: "bananinha",
        postText: "esse é meu post legal",
        upvotes: 2,
        downvotes: 1,
        comments: 4
    },
    {
        username: "goiabinha",
        postText: "esse é meu post mais legal ainda",
        upvotes: 5,
        downvotes: 2,
        comments: 3
    },
    {
        username: "laranjinha",
        postText: "esse post não é tão legal assim",
        upvotes: 1,
        downvotes: 6,
        comments: 1
    }
]

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 30px;
    margin: 0 auto;

`

class FeedPage extends Component {
  render() {
    return (
      <PostsContainer>
          {posts.map(post => (<PostCard post={post} />))}
      </PostsContainer>
    );
  }
}


export default connect()(FeedPage);