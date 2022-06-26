import React from "react";
import axios from "axios";
import styled from "styled-components";


const PaiVisualiza = styled.div`
    display: flex;
    display: block;
    
    background-color: orange;

`

const TituloPagina = styled.h1`
    display: flex;
    color: white;
    justify-content: center

`

const VisualizadorPlaylists = styled.main`
    display: flex;
    display: block;
    justify-content:space-between;
    background-color: orange;
    border: 2px solid black;
    margin-bottom: 5vh;
`

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
            console.log(resposta.data)               
        })
        .catch((erro) => {
            alert("Houve um Erro, solicite ajuda ao suporte!")
        })
    }
    
    deletarPLaylist = (playlistId) => {
        const linkDeletar = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        
        axios.delete (linkDeletar, {
            headers: {
                Authorization: "leonardo-couto-alves"
            }
        })
        .then((resposta) => {
            alert("Playlist excluída com sucesso!")
            this.mostrarPlaylists()
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })
    }

    procurarMusica = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        
        axios.get (url, {
            headers: {
                Authorization: "leonardo-couto-alves"
            }
        })
        .then((resposta) => {
            console.log(resposta.data.result.tracks)                       
        })
        .catch((erro)=> {
            console.log(erro.response.data.message)
        })

    }


    render(){

        const novaLista = this.state.listaDasPlaylists.map((playlist)=>{
            return<VisualizadorPlaylists key={playlist.id}>
            <div>{playlist.name}</div>
            <button onClick={() => this.procurarMusica(playlist.id)}>Detalhes da Playlist</button>
            <button onClick={() => this.deletarPLaylist(playlist.id)}>Excluir</button>
            </VisualizadorPlaylists>
        })
        
        return(
            <PaiVisualiza>
            <div>
            <TituloPagina>Minhas Playlists</TituloPagina>
            </div>
            <div>{novaLista}</div>
           
            
            <div>
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>
            </PaiVisualiza>
        )
    }
}