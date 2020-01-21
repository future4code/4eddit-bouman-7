import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import { connect } from "react-redux"
import styled from "styled-components"


const PostCardContainer = styled.div`
  margin: 10px;
`


class PostCard extends React.Component {

  render() {

    return (
        <PostCardContainer>
            <Card>
        <CardContent>
            <Typography variant="h5" >
                {this.props.post.username}
            </Typography>
            <hr />
          <Typography component="p">
            {this.props.post.postText}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton aria-label="Upvote">
            <ArrowUpward /> {this.props.post.upvotes}
          </IconButton>
          <IconButton aria-label="Downvote">
            <ArrowDownward /> {this.props.post.downvotes}
          </IconButton>
          <Typography component="p" color="primary">
          {this.props.post.comments} comentários
          </Typography>
        
        </CardActions>
      </Card>
        </PostCardContainer>
    );
  }
}


export default connect()(PostCard);