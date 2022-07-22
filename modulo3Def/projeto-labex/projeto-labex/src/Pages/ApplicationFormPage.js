import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const ApplicationFormDiv = styled.form`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  color: #FA9170;
  font-size: large;
  height: 50%; 
  width: 50%; 
  margin-left: 35vw;
  margin-top: 10vh;
  text-align: center;
`
const ApplicationInput = styled.input`
  border: 1px solid green; 
  text-align: center;  
  width: 50%;
  margin-left: 5vw;
`
function ApplicationFormPage() {
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })
  const params = useParams()

  const changeInputs = (event) => {
    const { name, value } = event.target
    setApplicationForm({ ...applicationForm, [name]: value })
  }

  const submitCandidate = (event) => {
    event.preventDefault()
    const id = params.id
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips/${id}/apply`
    const body = applicationForm
    axios.post(url, body)
      .then((res) => {
        alert("Cadastro recebido com sucesso!")
        setApplicationForm({
          name: "",
          age: "",
          applicationText: "",
          profession: "",
          country: ""
        })
      })
      .catch((err) => {
        alert("Falha na solicitação. Tente novamente!")
      })
  }
  return (
    <div>
      
      <ApplicationFormDiv onSubmit={submitCandidate}>
      <h1>Candidate-se Agora!</h1>
        <ApplicationInput
          name='name'
          value={applicationForm.name}
          placeholder='Nome'
          onChange={changeInputs}>
        </ApplicationInput>
        <ApplicationInput
          name='age'
          value={applicationForm.age}
          placeholder='Idade'
          onChange={changeInputs}>
        </ApplicationInput>
        <ApplicationInput
          name='applicationText'
          value={applicationForm.applicationText}
          placeholder='Porque você deseja ir?'
          onChange={changeInputs}>
        </ApplicationInput>
        <ApplicationInput
          name='profession'
          value={applicationForm.profession}
          placeholder='Profissão'
          onChange={changeInputs}>
        </ApplicationInput>
        <ApplicationInput
          name='country'
          value={applicationForm.country}
          placeholder='País de Origem'
          onChange={changeInputs}>
        </ApplicationInput>
        <button>Enviar</button>
      </ApplicationFormDiv>
    </div>

  )
}

export default ApplicationFormPage