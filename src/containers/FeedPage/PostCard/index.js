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

// const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

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