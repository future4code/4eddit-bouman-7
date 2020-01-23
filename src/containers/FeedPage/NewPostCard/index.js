import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class NewPostCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: ""
        }
    }

    handleFieldChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };


    render () {

        const { title, text } = this.state

        return (
            <Card>
                <CardContent>
                    <InputContainer>
                        <Typography variant="h5">
                            Crie um novo post!
                        </Typography>
                        <hr/>
                        <TextField 
                        name="title"
                        type="title"
                        label="Título" 
                        placeholder="Insira seu título aqui" 
                        fullWidth 
                        value={title}
                        />
                        <br/> <br />
                        <TextField 
                        name="text"
                        type="text"
                        label="Conteúdo" 
                        placeholder="Insira seu conteúdo aqui" 
                        fullWidth multiline rows='2'
                        value={text}
                        />
                        <br /><br />
                        <Button>Publicar post</Button>
                    </InputContainer>
                </CardContent>
            </Card>
        )
    }
}

export default NewPostCard;