import React from "react";

export default class SegundaTela extends React.Component {
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
  render(){
    return<div>        
        <input placeholder='Nome' onChange={this.onChangeUser} value={this.state.inputUsuario}/>
        <input placeholder='E-Mail' onChange={this.onChangeEmail} value={this.state.inputEmail}/>
        <button onClick={this.onChangeUser}>Adiciona Usuário</button>
    </div>
  }
}