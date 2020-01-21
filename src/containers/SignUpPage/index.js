import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../images/4eddit.png";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 250px;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Logo = styled.img`
  width: 220px;
`;

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <MainContainer>
        <Logo src={logo} alt="4eddit - logo" />
        <LoginContainer>
          <TextField
            //onChange={}
            name="username"
            type="username"
            label="Username"
            value={username}
          />
          <TextField
            //onChange={}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            //onChange={}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button>Cadastrar</Button>
        </LoginContainer>
      </MainContainer>
    );
  }
}

export default SignUpPage;
