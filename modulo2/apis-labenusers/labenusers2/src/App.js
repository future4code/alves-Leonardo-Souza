import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaLista from "./Components/TelaLista";

export default class App extends React.Component {
  state = {
    telaPrincipal: "principal",
  }
  
  trocarTela = () => {
    switch(this.state.telaPrincipal){
      case "principal":
        return <TelaCadastro acessarTelaLista={this.acessarTelaLista}/>
      case "lista":
        return <TelaLista acessarTelaCadastro={this.acessarTelaCadastro}/>
      default:
        return <div>Erro!</div>
    } 
  }

  acessarTelaCadastro = () => {
    this.setState ({telaPrincipal: "principal"})
  }
  acessarTelaLista = () => {
    this.setState ({telaPrincipal: "lista"})
  }


  render() {
      return <div>
       <div>
        {this.trocarTela()}
        </div>
      </div>
  }
}