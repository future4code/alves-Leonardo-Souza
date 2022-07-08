import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ImagemMatch = styled.img`
  max-height: 200px;
  max-width: 100px;
`

const DivDosMatches = styled.div`
  background-color: #FA7A02;
  display: block; 
    width: 100vw;
    height: 80vh;
    position: absolute;
    left: 0; 
    margin-top: 10vh;
    text-align: center;

`

function TelaMatches(props) {  
  const [telaDosMatches, setTelaDosMatches] = useState([])
  const [fotoUsuarioCurtido, setFotoUsuarioCurtido] = useState("")
  const [nomeUsuarioCurtido, setNomeUsuarioCurtido] = useState ("")
  // const [idadeUsuario, setIdadeUsuario] = useState ("")
  // const [bioUsuario, setBioUsuario] = useState ("")
  // const [idUsuario, setIdUsuario] = useState("")

  let arrayDeMatches = []
  let i = arrayDeMatches[0]

    const mostrarMatches = () => { 
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardoCouto/matches`
    
    axios.get(url)
    .then((res) => {      
      console.log(res.data.matches)
      arrayDeMatches = [... res.data.matches]
      arrayDeMatches.map((perfil) => {
        console.log(perfil.name)
        return <p>{perfil.name}</p>
        setNomeUsuarioCurtido(perfil.name)
        setFotoUsuarioCurtido(perfil.photo)
      })     
    })    
    .catch((err) => {
      console.log("entrou no catch")
      console.log(err.response)
  })
}



  return (
    <DivDosMatches>
    <h2>Seus Matches!</h2>
    <button onClick={() => mostrarMatches()}>Mostrar Matches</button>
    <div>
    <ImagemMatch src={fotoUsuarioCurtido}/>
    {nomeUsuarioCurtido} 
    </div>  
    </DivDosMatches>
  )
}

export default TelaMatches