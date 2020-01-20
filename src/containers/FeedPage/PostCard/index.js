import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import { connect } from "react-redux"

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

class PostCard extends React.Component {

  render() {

    return (
      <Card>
        <CardHeader title="andressa95">
        </CardHeader>
        <CardContent>
          <Typography component="p">
            This is a test post.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Upvote">
            <ArrowUpward /> 0
          </IconButton>
          <IconButton aria-label="Downvote">
            <ArrowDownward /> 0
          </IconButton>
          <Typography component="p" color="primary">
              0 comentários
          </Typography>
        
        </CardActions>
      </Card>
    );
  }
}


export default connect()(PostCard);