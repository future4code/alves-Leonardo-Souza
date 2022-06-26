import React from "react";
import axios from "axios";
import styled from "styled-components";

const PaiAdiciona = styled.div`
    background-color: orange
`
export class TelaAdicionaMusicas extends React.Component{
    state = {
        name:"",
        artist: "",
        url: "",
        listaMusicas: []
    }

    adicionaNomeMusica = (event) => {
        this.setState({name: event.target.value})
        console.log(this.state.name)
    }
    adicionaNomeArtista = (event) => {
        this.setState({artist: event.target.value})
        console.log(this.state.artist)
    }
    adicionaLinkMusica = (event) => {
        this.setState({url:event.target.value})
        console.log(this.state.url)
    }

    salvarMusicaNaPlaylist = (playlistId) => {
        const linkAdicionar = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url, 
            
        }
        axios.post (linkAdicionar, body, {
            headers: {
                Authorization: "leonardo-couto-alves"
            }
        })
        .then((resposta) => {
            console.log(resposta)
            alert ("Musica adicionada com sucesso")
        })
        .catch((erro)=>{
            console.log(erro.response.data)
        })
    }
    
    render(){
        return(
            <PaiAdiciona>
            <div>
                <h1>Adiciona Musicas</h1>
            </div>
            
            <main>
            <input placeholder={"Insira o nome da música"} onChange={this.adicionaNomeMusica}></input>
            <input placeholder={"Insira o nome do artista"} onChange={this.adicionaNomeArtista}></input>
            <input placeholder={"Insira url da Música"} onChange={this.adicionaLinkMusica}></input>
            
            <div> 
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>    

            </main>
            </PaiAdiciona>
        )
    }
}