import React from "react";

export class TelaAdicionaMusicas extends React.Component{
    render(){
        return(
            <div>Adiciona Musicas
            <button onClick={this.props.acessarCriar}>Criar Playlist</button>
            <button onClick={this.props.acessarVisualizar}>Visualizar Minhas Playlists</button>
            <button onClick={this.props.acessarAdicionar}>Adicionar Músicas</button>
            <button onClick={this.props.acessarPrincipal}>Voltar para Inicio</button>
            </div>
        )
    }
}