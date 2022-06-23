import React from "react";
import axios from "axios"



export default class TelaLista extends React.Component{
   state = {
      usuarios:[]
   }
    componentDidMount(){
        this.listarUsuarios()
    }

    listarUsuarios = () => {
        let link = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(link, {
            headers:{
                Authorization: "leonardoCouto-Alves"
            }
        })
        .then((resposta) => {
            this.setState ({usuarios:resposta.data})
        })         
        .catch((erro)=>{
            console.log(erro)
        })
    }
   
    render(){
        const listaDeUsuarios = this.state.usuarios.map((usuario) => {
            return (
            <div key={usuario.id}>{usuario.name}
            <button>Deletar Usuario</button>
            </div>)
            
        })
        
        return(
            <div>
                <button onClick={this.props.acessarTelaCadastro}>Trocar de Tela</button>
                <div><h1>Lista de Usuarios</h1>
                {listaDeUsuarios}
                </div>

        </div>
    )}
}