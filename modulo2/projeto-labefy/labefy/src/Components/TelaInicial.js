import React from "react";
import styled from "styled-components";

export class TelaInicial extends React.Component{
    render(){
        return(
            <div><h1>Labefy</h1>
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>
        )
    }
}