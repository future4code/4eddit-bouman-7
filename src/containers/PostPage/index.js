import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";

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

const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 30px;
    margin: 0 auto;

`

class PostPage extends Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            this.props.GoToLogin()
        }
    }

  render() {
    return (
      <Post>
          {posts.map(post => (<PostCard post={post} />))}
      </Post>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        GoToLogin: () => dispatch(push(routes.root))
    }
}

export default connect(null, mapDispatchToProps)(PostPage);