import React from "react";
import styled from "styled-components";
import { TelaCriaPlaylist } from "./Components/TelaCriaPlaylist";
import { TelaVisualizaPlaylist } from "./Components/TelaVisualizaPlaylist";
import { TelaAdicionaMusicas } from "./Components/TelaAdicionaMusicas";
import { TelaInicial } from "./Components/TelaInicial";


export default class App extends React.Component{
  state = {
    telaPrincipal: "criar"
  } 
  
  escolherTela = () => {
    switch (this.state.telaPrincipal){
      case "principal":
        return <TelaInicial acessarPrincipal={this.acessarPrincipal} 
        acessarAdicionar={this.acessarAdicionar}
        acessarCriar={this.acessarCriar}
        acessarVisualizar={this.acessarVisualizar}/>
      case "criar":
        return <TelaCriaPlaylist acessarPrincipal={this.acessarPrincipal} 
        acessarAdicionar={this.acessarAdicionar}
        acessarCriar={this.acessarCriar}
        acessarVisualizar={this.acessarVisualizar}/>
      case "visualizar":
        return <TelaVisualizaPlaylist acessarPrincipal={this.acessarPrincipal} 
        acessarAdicionar={this.acessarAdicionar} 
        acessarCriar={this.acessarCriar}
        acessarVisualizar={this.acessarVisualizar}/>
      case "adicionar":
        return <TelaAdicionaMusicas acessarPrincipal={this.acessarPrincipal} 
        acessarAdicionar={this.acessarAdicionar}
        acessarCriar={this.acessarCriar}
        acessarVisualizar={this.acessarVisualizar}/>
      default:
        return <TelaInicial acessarPrincipal={this.acessarPrincipal} 
        acessarAdicionar={this.acessarAdicionar}
        acessarCriar={this.acessarCriar}
        acessarVisualizar={this.acessarVisualizar}/>

    }
  }
  acessarCriar = () => {
    this.setState({telaPrincipal:"criar"})
  }
  acessarVisualizar = () => {
    this.setState({telaPrincipal:"visualizar"})
  }
  acessarAdicionar = () => {
    this.setState({telaPrincipal:"adicionar"})
  }
  acessarPrincipal = () => {
    this.setState({telaPrincipal:"principal"})
  }
  render(){
    return (
    <div className="App">
     {this.escolherTela()}
    </div>
  )}
}


