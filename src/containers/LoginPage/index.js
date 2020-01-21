import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginForm = styled.form`
width: 100%;
height: 100vh;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`
const Title = styled.h1 `
width: 100%;
height: 5vh;
justify-content: center;
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    const { email, password } = this.state;

    this.props.login(email, password)
  }

  render() {
    const { email, password } = this.state

    return (
      <LoginForm>
        <Title>4eddit - Home</Title>
        <TextField
        onChange={this.handleFieldChange}
        name="email"
        type="email"
        label="Nome de Usuário"
        value={email} 
        />

        <TextField
        onChange={this.handleFieldChange}
        name="password"
        type="password"
        label="Senha"
        value={password}
        />
        <Button onClick={this.handleLoginButton}>Login</Button>
      </LoginForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(LoginPage);