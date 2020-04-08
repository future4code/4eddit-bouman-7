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
import {getPostDetail, createComment, voteComment} from "../../actions/getPosts";
import Button from "@material-ui/core/Button";


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

const createCommentForm = [{
  name: "text",
  type: "text",
  label: "Comentário",
  required: true

}]

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }

    componentDidMount() {
        const token = window.localStorage.getItem("token")

        if (token === null) {
            this.props.GoToLogin()
        }
        else if (this.props.postDetailsId !== "") {
          this.props.getPostDetail (this.props.postDetailsId)
        }
        else {
          this.props.GoToFeed()
        }
    }

    handleInputOnChange = (event) => {
      const {name, value} = event.target;
      
      this.setState ({form:{...this.state.form, [name]:value}})

    }

    handleCreateComment = (event) => {
      event.preventDefault();

      const { text } = this.state.form
      const { postDetailsId } = this.props

      this.props.createComment(text, postDetailsId)
      this.setState({form:{}})
    }

  render() {

    const { postDetails } = this.props

    return (
      <Post>
          <Header>
            <LogoFire src={logoFire} alt="4eddit - logoFire" />
            <LogoText src={logoText} alt="4eddit - logoText" />
          </Header>
          <PostCardContainer>
            
              <Card>
                  <CardContent>

                  <form>
                    {createCommentForm.map (input => (
                        <div key={input.name}>
                            <label htmlFor = {input.name}>{input.label}</label>
                            <input
                                id = {input.id}
                                name = {input.name}
                                type = {input.type}
                                label = {input.label}
                                value = {this.state.form[input.name] || ""}
                                required = {input.required}
                                onChange = {this.handleInputOnChange}
                                pattern = {input.pattern}
                            />
                        </div>
                    ))}
                    <Button onClick = {this.handleCreateComment}> Enviar</Button>
                   </form> 

                  {postDetails.comments && postDetails.comments.map((comment) => 
                    <div>
                      <p>{comment.username}</p>
                      <p>{comment.text}</p>
                    </div>
                  )}
                    
                    
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
  postDetails: state.postsReducer.selectedPost,
  postDetailsId: state.postsReducer.clickedPostId
})

function mapDispatchToProps(dispatch) {
    return {
        GoToLogin: () => dispatch(push(routes.root)),
        GoToFeed: () => dispatch(push(routes.feedPage)),
        getPostDetail: (postId) => dispatch(getPostDetail(postId)),
        createComment: (text, postId) => dispatch(createComment(text, postId)),
        voteComment: (postId, commentId, direction) => dispatch(voteComment(postId, commentId, direction))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);