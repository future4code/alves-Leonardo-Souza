import React from "react";
import axios from "axios";



export default class TelaCadastro extends React.Component {
   state = {
    nome: "",
    email: ""
   }

   adicionaNome = (event) => {
    this.setState({nome:event.target.value})
   }

   adicionaEmail = (event) => {
    this.setState({email:event.target.value})
   }

   cadastrarUsuario = () => {
        let link = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        let body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(link, body,{ 
            headers: {
                Authorization: "leonardoCouto-Alves"
            }
        })
        .then((resposta) => {
            alert("Usuário cadastrado!!")
            this.setState({nome:"", email:""})
        })
        .catch((erro) => {
            alert("Erro! Usuario ou email ja cadastrados")
        })
   }
   
    render(){
        return(
        <div><div>        
        <button onClick={this.props.acessarTelaLista}>Trocar de Tela</button>
        <input placeholder='Nome' onChange={this.adicionaNome} value={this.state.nome}/>
        <input placeholder='E-Mail' onChange={this.adicionaEmail} value={this.state.email}/>
        <button onClick={this.cadastrarUsuario}>Cadastrar Usuário</button>
    </div></div>          
    )}
    
}