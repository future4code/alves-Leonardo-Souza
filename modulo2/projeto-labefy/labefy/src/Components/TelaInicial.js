import React from "react";
import styled from "styled-components";

const PaiDeTodos = styled.div`
    background-color: orange;
    display: flex;
`
const Botoes = styled.main`
    display: flex; 
    margin-top: 25vh;
    margin-bottom: 25vh   
`

export class TelaInicial extends React.Component{
    render(){
        return(
            <PaiDeTodos>                          
            <Botoes> 
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            </Botoes>
            </PaiDeTodos>
        )
    }
}