import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivDaTelaInicial = styled.div`
    border: 3px solid black;
    display: block; 
    width: 100vw;
    height: 100px;
    position: absolute;
    left: 0; 
    text-align: center;
`

// const CardPerfil = styled.div`
//     border: 1px solid black;
//     display: block;    
//     width: 20vw;
//     height: 50vh;
//     margin-left: 40vw         
// `

const QuadroInformacoes = styled.div`
    border: 2px solid red;
`

const InformacoesDoQuadro = styled.div `
    border: 1px solid blue;
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
    const [idUsuario, setIdUsuario] = useState("")
    



    const escolherPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardoCouto/person"
            
        axios.get(url)
        .then((res) => {
            if(res.data.profile){
            console.log(res.data.profile.id)
            setFotoUsuario(res.data.profile.photo)            
            setNomeUsuario(res.data.profile.name)
            setIdadeUsuario(res.data.profile.age)          
            setBioUsuario(res.data.profile.bio)
            setIdUsuario(res.data.profile.id)
            } else {
                alert("Acabaram os perfis!")
            }
        })
        .catch((err) => {
            alert(err.response)
            console.log("Entrou no catch")
        })        
    }  
    
    const darLike = (id) => {
        const urlDoLike = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardoCouto/choose-person`
        const body = {
            id: "idUsuario",
	        choice: true
        }
        axios.post(urlDoLike, body)            
        .then((res) => { 
            console.log("Deu Like")
            escolherPerfil()
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

  return (
    <DivDaTelaInicial>
        <h2>Tela Inicial</h2>
        <QuadroInformacoes>
        <FotoDoPerfil src={fotoUsuario}/>
        <InformacoesDoQuadro>{nomeUsuario}</InformacoesDoQuadro>
        <InformacoesDoQuadro>{idadeUsuario}</InformacoesDoQuadro>
        <InformacoesDoQuadro>{bioUsuario}</InformacoesDoQuadro>
        </QuadroInformacoes>
        <button onClick={escolherPerfil}>Próximo Perfil</button>
        <button onClick={darLike}>Like</button>
        <button onClick={escolherPerfil}>Dislike</button>
    </DivDaTelaInicial>
  )
}
export default TelaInicial