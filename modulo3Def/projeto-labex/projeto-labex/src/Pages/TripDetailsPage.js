import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { List } from '@chakra-ui/react'

function TripDetailsPage() {
  const [details, setDetails] = useState({})
  const [candidates, setCandidates] = useState([])
  const params = useParams()

  const tripDetails = () => {
    const token = localStorage.getItem('token')
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trip/${params.id}`
    axios.get(url, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        setDetails(res.data.trip)
        setCandidates(res.data.trip.candidates)
      })
      .catch((err) => {
        alert("Página em erro. Tente novamente!")
      })
  }

  useEffect(() => {
    tripDetails()
  }, [])

  const seeCandidates = candidates.map((element) => {
    return <div key={element.id}>
      <h2>Aplicações recebidas:</h2>
      <p>Nome: {element.name}</p>
      <p>Idade: {element.age}</p>
      <p>País de Origem: {element.country}</p>
      <p>Profissão: {element.profession}</p>
      <p>Motivo da Aplicação: {element.applicationText}</p>
      <button>Aprovar</button>
      <button>Rejeitar</button>
    </div>
  })

  return (
    <div>
      <h1>Trip Details Page</h1>      
      {seeCandidates}
    </div>
  )
}
export default TripDetailsPage

