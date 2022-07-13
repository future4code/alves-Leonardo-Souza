import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'

const ApplicationDiv = styled.div`
  border: 2px solid blue;
  display: flex;
  display: block;
  height: 50%;
  width: 100%;  
  justify-content: space-between;
`

const ApplicationInput = styled.input`
  border: 1px solid green;
  display: flex;
  display: block;
  height: 10%; 
  margin: 10%;
`


function ApplicationFormPage(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [appText, setAppText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")

  const sendName = (event) => {
    setName(event.target.value)
  }
  const sendAge = (event) => {
    setAge(event.target.value)
  }
  const sendAppText = (event) => {
    setAppText(event.target.value)
  }
  const sendProfession = (event) => {
    setProfession(event.target.value)
  }
  const sendCountry = (event) => {
    setCountry(event.target.value)
  }


  const postUserInfo = () => {
    console.log('Clicou')
    setName(name)
    setAge(age)
    setAppText(appText)
    setProfession(profession)
    setCountry(country)
    alert("Usuário Cadastrado com Sucesso!")
  }

  useEffect((id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips/:id/apply`
    const body = {
      "name": { name },
      "age": { age },
      "applicationText": { appText },
      "profession": { profession },
      "country": { country }
    }
    axios.post(url, body)
      .then((res) => {
        console.log("Cadastro OK")
        console.log(name)
      })
      .catch((err) => {
        alert(err.response.message)
      })
  }, [])
  return (
    <div>
    <h1>Candidate-se Agora!</h1>  
    <ApplicationDiv>        
        <ApplicationInput placeholder='Nome' onChange={sendName}></ApplicationInput>
        <ApplicationInput placeholder='Idade' onChange={sendAge}></ApplicationInput>
        <ApplicationInput placeholder='Porque deseja ir?' onChange={sendAppText}></ApplicationInput>
        <ApplicationInput placeholder='Profissão' onChange={sendProfession}></ApplicationInput>
        <ApplicationInput placeholder='País de Origem' onChange={sendCountry}></ApplicationInput>
        <button onClick={postUserInfo}>Enviar</button>
      </ApplicationDiv>
    </div>

  )
}

export default ApplicationFormPage