import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivDaTelaInicial = styled.div`
    /* border: 1px solid black; */
    display: block; 
    width: 100vw;
    height: 80vh;
    position: absolute;
    left: 0; 
    text-align: center;
    margin-top: 10vh;
    background-color: #FA7A02
`

// const CardPerfil = styled.div`
//     border: 1px solid black;
//     display: block;    
//     width: 20vw;
//     height: 50vh;
//     margin-left: 40vw         
// `

const QuadroInformacoes = styled.div`
    /* border: 2px solid red; */
    width: 50vw;
    height: 50vh;
    margin: 0 15vw 5vw 25vw;
`

const InformacoesDoQuadro = styled.div `
    /* border: 1px solid blue; */
    height: 4vh;
    font-size: large;
`

const FotoDoPerfil = styled.img`
    width: 20%;
    height: 80%;  
    margin-top: 1vh;
    margin-bottom: 2vh;
`

const DivDosBotoes = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const BotaoIniciar = styled.button`
    color: orange;
    margin-top: 2vh;
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
            id: id,
	        choice: true
        }
        axios.post(urlDoLike, body)            
        .then((res) => { 
            console.log("Deu Like")
            escolherPerfil()
        })
        .catch((err) => {
            alert(err.response)
        })
    }

  return (
    <DivDaTelaInicial>
        <BotaoIniciar onClick={escolherPerfil}>Iniciar</BotaoIniciar>
        <QuadroInformacoes>
        <FotoDoPerfil src={fotoUsuario}/>
        <InformacoesDoQuadro>{nomeUsuario}</InformacoesDoQuadro>
        <InformacoesDoQuadro>{idadeUsuario}</InformacoesDoQuadro>
        <InformacoesDoQuadro>{bioUsuario}</InformacoesDoQuadro>
        </QuadroInformacoes>        
        <DivDosBotoes>
        <button onClick={() => darLike(idUsuario)}>Like</button>
        <button onClick={escolherPerfil}>Dislike</button>
        </DivDosBotoes>
    </DivDaTelaInicial>
  )
}
export default TelaInicial