import logo from './logo.svg';
import './App.css';
import React from 'react';
import telaInicial from './Components/telaInicial';
import axios from 'axios';

export default class App extends React.Component{
  
  state = {
    inputUsuario: "",
    inputEmail: "",
  }


  onChangeUser = (event)=> {
    this.setState({inputUsuario: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail:event.target.value})
  }

 
  render() {
   return (
    <div>
      <button>Trocar de Tela</button>
      <input placeholder='Nome' onChange={this.onChangeUser} value={this.state.inputUsuario}/>
      <input placeholder='E-Mail' onChange={this.onChangeEmail} value={this.state.inputEmail}/>
      <button onClick={this.onChangeUser}>Adiciona Usuário</button>
    </div>
  )};
}


