import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'

export default class LayoutPrincipal extends Component {
    state = {
        valorUsuario: " ",
        valorMensagem: " ",
      }
    

    onChangeUsuario = (event) =>{
        this.setState({valorUsuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState ({valorMensagem: event.target.value})
    }
    
        

    render() {
    return (
      <div>
        <input placeholder='Usuário' onChange={this.onChangeUsuario} value={this.state.valorUsuario}/>
        <input  placeholder='Digite sua Mensagem' onChange={this.onChangeMensagem} value ={this.state.valorMensagem}/>
        <button>Enviar</button>
      </div>
    )
  }
}
