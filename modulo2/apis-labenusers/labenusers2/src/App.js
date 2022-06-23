import React from "react";
import PrimeiraTela from "./Components/PrimeiraTela";
import TelaCadastro from "./Components/TelaCadastro";

export default class App extends React.Component {
  state = {
    telaPrincipal: "",
    telaSegunda: ""
  }  
  
  componentDidMount = ()=>{
    this.setState({telaPrincipal: PrimeiraTela})
  }

  componentDidUpdate = => {
    this.setState({telaPrincipal: telaPrincipal? TelaCadastro:PrimeiraTela})
  }
  
  // trocarDeTela = () => {
  //   this.setState({primeiraTela: primeiraTela})
  // } 
  
  
  
  render() {
      return <div>
        <button>Troca de Tela</button>
        <this.componentDidMount/>
        </div>
    }
}