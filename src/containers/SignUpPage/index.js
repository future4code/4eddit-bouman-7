import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from "../../images/4eddit.png";

//Container para fundo da página
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Container para text field
const LoginContainer = styled.div`
  width: 250px;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

//Para acertar tamanho do logo
const Logo = styled.img`
  width: 220px;
`;

//Setando os estados
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

<<<<<<< Updated upstream
=======
  //Não entendo muito bem para o que serve isso, mas sei que é necessário. Daqui...
  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginButton = () => {
    const { username, email, password } = this.state;

    this.props.login(email, password)
  }
// ...Até aqui, preciso modificar

>>>>>>> Stashed changes
  render() {
    //Para evitar escrever this.state várias vezes
    const { username, email, password } = this.state;

    return (

      <MainContainer>

        <Logo src={logo} alt="4eddit - logo" />

        <LoginContainer>

          <TextField
            //onChange={}
            name="username"
            type="username"
            label="Nome de Usuário"
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
            label="Senha"
            value={password}
          />
          {/* Botão que retorna pra página de login por enquanto*/}
          <Button onClick= {this.props.login}>Cadastrar</Button>

        </LoginContainer>

      </MainContainer>
    );
  }
}

//Função para dar dispatch
function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(push(routes.root)),
    };
  }
  
 //Deixei o primeiro null porque não temos mapStateToProps até agora 
  export default connect(
    null,
    mapDispatchToProps
  )(SignUpPage);
