import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const ApplicationFormDiv = styled.form`
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
function ApplicationFormPage() {
  const [applicationForm, setApplicationForm] = useState({
    name:"",
    age:"",
    applicationText:"",
    profession:"",
    country:""    
  })
  
  const params = useParams()

  const changeInputs = (event) => {
    const {name, value} = event.target
    setApplicationForm({...applicationForm, [name]: value}) 
  }  

  const submitCandidate = (event) => {
    event.preventDefault()    
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips/:id/apply`   
    const body = applicationForm
    axios.post(url, body)
      .then((res) => {
        alert("Cadastro OK")        
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  return (
    <div>
    <h1>Candidate-se Agora!</h1>  
    <ApplicationFormDiv onSubmit={submitCandidate}>        
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