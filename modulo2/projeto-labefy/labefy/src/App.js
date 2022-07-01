import React from "react";
import styled from "styled-components";
import { TelaCriaPlaylist } from "./Components/TelaCriaPlaylist";
import { TelaVisualizaPlaylist } from "./Components/TelaVisualizaPlaylist";
import { TelaAdicionaMusicas } from "./Components/TelaAdicionaMusicas";
import { TelaInicial } from "./Components/TelaInicial";

const DivPrincipal = styled.header`
    height: 100vh;
    width: 100vw;
    background-color: orange;
    color: white;
    display: flex;
    display: block;
    position:fixed;
       
`

const Titulo1 = styled.h1`
  background-color: orange;
  display: flex;
  justify-content: center
`
const SubTitulo = styled.h2`
  background-color: orange;  
  display: flex;
  justify-content: center
`

const DivDasTelas = styled.main`
    display: flex;
    justify-content: center
`

const Rodape = styled.footer`
    background-color: orange;
    color: white;
    display: flex;
    justify-content: center;
    bottom:0;
    position: absolute;
    margin-left: 40vw
`

export default class App extends React.Component{
  state = {
    telaPrincipal: "principal"
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
      <DivPrincipal>
      <Titulo1>Labefy</Titulo1>
            <SubTitulo>Um novo conceito em música!</SubTitulo>   
        <DivDasTelas>{this.escolherTela()}</DivDasTelas>
        </DivPrincipal>
        <Rodape>Labefy 2022. Todos os Direitos Reservados.</Rodape>
         
    </div>
 )}
}


