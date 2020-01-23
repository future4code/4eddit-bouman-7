import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
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
                {this.props.post.title}
            </Typography>
            <Typography variant="h6" color="secondary">
                {this.props.post.username}
            </Typography>
            <hr />
          <Typography component="p">
            {this.props.post.text}
          </Typography>
        </CardContent>

        <CardActions>
          {/* <IconButton aria-label="Upvote" color={this.props.post.userVoteDirection > 0 ? "primary" : "secondary"}> */}
          <IconButton aria-label="Upvote" color={this.props.post.userVoteDirection === 1 ? "primary" : "secondary"}>
            <ArrowUpward />
          </IconButton>
          <IconButton disabled>
            {this.props.post.votesCount}
          </IconButton>
          <IconButton aria-label="Downvote">
            <ArrowDownward />
          </IconButton>
          <Typography component="p" color="primary">
          {this.props.post.commentsNumber} comentário(s)
          </Typography>
          
          {/* Botão que leva o usuário à página com detalhes do post */}
          <Button>Ver detalhes</Button>
        
        </CardActions>  
      </Card>
        </PostCardContainer>
    );
  }
}


export default connect()(PostCard);