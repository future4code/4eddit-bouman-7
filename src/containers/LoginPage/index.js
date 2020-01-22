import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SignUpButton from "@material-ui/core/Button";
import styled from "styled-components";
import logo from "../../images/4eddit.png";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.form`
width: 250px;
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
const Logo = styled.img `
width: 220px;
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
    <MainContainer>

      <Logo src={logo} alt="4eddit - logo" />

      <LoginForm>
        <Title>4eddit - Login</Title>
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
        <SignUpButton onClick={this.props.GoToSignUp}>Cadastrar</SignUpButton>
      </LoginForm>
    </MainContainer>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
  login: (email, password) => dispatch(login(email, password)),
  GoToSignUp: () => dispatch(push(routes.signUpPage))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);