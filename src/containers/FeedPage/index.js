import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { connect } from "react-redux";
import styled from "styled-components";
import  getPosts  from "../../actions/getPosts";
import { push } from "connected-react-router";
import NewPostCard from "../FeedPage/NewPostCard"
import Button from "@material-ui/core/Button"


const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
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

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.GoToLogin()
  }

  render() {
    return (
      <PostsContainer>
          <NewPostCard></NewPostCard>
          {this.props.allPosts.map(post => (<PostCard post={post} key={post.id}/>))}
          <Button onClick={this.handleLogout}>Logout</Button>
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

