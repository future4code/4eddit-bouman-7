import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard"
import Routes from "connected-react-router"
import { connect } from "react-redux"

class FeedPage extends Component {
  render() {
    return (
      <div>
        <PostCard/>
      </div>
    );
  }
}


export default connect()(FeedPage);