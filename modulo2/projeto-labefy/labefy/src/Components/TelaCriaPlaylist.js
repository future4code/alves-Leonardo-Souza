import React from "react";
import axios from "axios"


export class TelaCriaPlaylist extends React.Component{
    state = {
        name:""         
    }
    
    adicionaPlaylist = (event) => {
        this.setState({name: event.target.value})
        
    }

    salvarPlaylist = () => {
        const link = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }    
        axios.post (link, body, {
            headers:{
                Authorization: "leonardo-couto-alves"
            }
        })
            .then((resposta)=>{
                alert("Playlist Cadastrada!")
                this.setState({name:""})
            })
            .catch((erro) => {
                alert("Playlist com nome já escolhido")
            })
                
    }
    
    
    render(){
        return(
            <div>
                <h1>Criar Playlist</h1>
                <input
                 placeholder={"Insira o nome da playlist"} 
                 value={this.state.name}
                 onChange={this.adicionaPlaylist}></input>
                <button onClick={this.salvarPlaylist}>Adicionar</button>
            <div>

            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>
            </div>
            
        )
    }
}