import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationFormPage from './ApplicationFormPage'
import styled from 'styled-components'

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const PageTitle = styled.h2`
  margin-left: 43vw;
  color: #FA9170;
  font-weight: bold;
`
const TripsDiv = styled.div`
  border: solid 2px #348BAD;
  font-weight: bold;
  color: #FA9170;
  height: 50%;
  margin-left: 35vw;
  text-align: center;
`
function ListTripsPage() {
  const navigate = useNavigate()
  const [data, setData] = useState("")
  const trips = data?.trips

  useEffect(() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips"
    axios.get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])

  const acessApply = (id) => {
    navigate(`/application/${id}`)
  }

  const listOfTrips = trips?.map((element) => {
    return <TripsDiv key={element.id}>
      <div>
        <p>Nome: {element.name}</p>
        <p>Planeta: {element.planet}</p>
        <p>Descrição: {element.description}</p>
        <p>Data de Partida: {element.date}</p>
        <p>Duração da Viagem: {element.durationInDays}</p>
        <button onClick={() => acessApply(element.id)}>Aplicar-se a esta viagem</button>
      </div>
    </TripsDiv>
  })

  return (
    <PageDiv>
      <PageTitle>Viagens Disponíveis</PageTitle>
      {listOfTrips}
    </PageDiv>
  )
}

export default ListTripsPage