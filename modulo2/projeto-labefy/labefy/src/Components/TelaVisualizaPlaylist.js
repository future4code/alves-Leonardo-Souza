import React from "react";
import axios from "axios";
import styled from "styled-components";

export class TelaVisualizaPlaylist extends React.Component{
    state = {
        listaDasPlaylists: []
    }
    componentDidMount(){
        this.mostrarPlaylists()
    }

    mostrarPlaylists = () => {
        const link = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        

        axios.get (link, {
            headers: {
                Authorization: "leonardo-couto-alves"
            }
        })
        .then((resposta) => {
            this.setState({listaDasPlaylists:resposta.data.result.list})
        })
        .catch((erro) => {
            alert("Houve um Erro, solicite ajuda ao suporte!")
        })
    }
    



    render(){

        const novaLista = this.state.listaDasPlaylists.map((playlist)=>{
            return<div>{playlist.name}</div>
        })

        return(
            <div>
            <h1>Minhas Playlists</h1>
            {novaLista}
            <div>
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>
            </div>
        )
    }
}