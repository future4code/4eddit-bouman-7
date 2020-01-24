import React, { Component } from "react";
import PostCard from "../FeedPage/PostCard";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import styled from "styled-components";
import logoFire from "../../images/4edditfire.jpg";
import logoText from "../../images/4eddittext.jpg";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

//Container para fundo da página
const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    padding: 30px;
    margin: 0 auto;
`;

//Para acertar tamanho do logoFire
const LogoFire = styled.img`
  height: 25px;
`;

//Para acertar tamanho do logoText
const LogoText = styled.img`
  height: 25px;
`;

//Header com o logo
const Header = styled.header`
  width: 100%;
  background-color: rgb(237, 127, 97);
  padding: 7px;
  border-radius: 6px;
`;

//Cria margem entre os cards
const PostCardContainer = styled.div`
  margin: 10px;
`

class PostPage extends Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            this.props.GoToLogin()
        }
    }

    componentDidiMount(dispatch){
        this.props.searchPost()
    }

  render() {
    const {posts} = this.props;
    return (
      <Post>
          <Header>
            <LogoFire src={logoFire} alt="4eddit - logoFire" />
            <LogoText src={logoText} alt="4eddit - logoText" />
          </Header>
          <PostCardContainer>
            
              <Card>
                  <CardContent>
                  {this.props.postDetails.comments && this.props.postDetails.comments.map((comment) => 
                    <div>
                      <p>{comment.username}</p>
                      <p>{comment.text}</p>
                    </div>
                  )}
                    
                    <Typography variant="h5" >
                        {/* {this.props.post.title} */}
                    </Typography>
                    
                    <Typography variant="h6" color="secondary">
                        {/* {this.props.post.username} */}
                    </Typography>
                    
                    <hr/>
                    
                    <Typography component="p">
                        {/* {this.props.post.text} */}
                    </Typography>
                  
                  </CardContent>

                  <CardActions>
                    
                    <IconButton aria-label="Upvote">
                        <ArrowUpward />
                    </IconButton>

                    <IconButton disabled>
                        {/* {this.props.post.votesCount} */}
                    </IconButton>
          
                    <IconButton aria-label="Downvote">
                        <ArrowDownward />
                    </IconButton>
          
                    <Typography component="p" color="primary">
                        {/* {this.props.post.commentsNumber} comentário(s) */}
                    </Typography>
                  
                  </CardActions>
              </Card>
          </PostCardContainer>
          {/* {posts.map(post => (<PostCard post={post} />))} */}
      </Post>
    );
  }
}

const mapStateToProps = (state) => ({
  postDetails: state.postsReducer.selectedPost
})

function mapDispatchToProps(dispatch) {
    return {
        GoToLogin: () => dispatch(push(routes.root))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);