import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivDaTelaInicial = styled.div`
    display: block; 
    margin: 0;
    padding: 0;     
    text-align: center;
`

// const CardPerfil = styled.div`
//     border: 1px solid black;
//     display: block;    
//     width: 20vw;
//     height: 50vh;
//     margin-left: 40vw         
// `

const Informacoes = styled.p`
    width: 20vw;
    height: 10vh;      
    border: solid 2px red;
    text-align: center;
    
    
`

const FotoDoPerfil = styled.img`
    max-width: 20vw;
    max-height: 10vh;  
`

function TelaInicial(props) {
    
    const [fotoUsuario, setFotoUsuario] = useState("")
    const [nomeUsuario, setNomeUsuario] = useState ("")
    const [idadeUsuario, setIdadeUsuario] = useState ("")
    const [bioUsuario, setBioUsuario] = useState ("")



    const escolherPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
        axios.get(url)
        .then((res) => {
            console.log(res)
            setFotoUsuario(res.data.profile.photo)            
            setNomeUsuario(res.data.profile.name)
            setIdadeUsuario(res.data.profile.age)          
            setBioUsuario(res.data.profile.bio)
        })
        .catch((err) => {
            alert(err.response)
        })        
    }  
    
  return (
    <DivDaTelaInicial>
        <h2>Tela Inicial</h2>
        <div>
        <FotoDoPerfil src={fotoUsuario}/>
        <Informacoes>{nomeUsuario}</Informacoes>
        <Informacoes>{idadeUsuario}</Informacoes>
        <Informacoes>{bioUsuario}</Informacoes>
        </div>
        <button onClick={escolherPerfil}>Próximo Perfil</button>
    </DivDaTelaInicial>
  )
}
export default TelaInicial