import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function AdminHomePage() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const params = useParams()
  const [data, setData] = useState("")
  const trips = data?.trips

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token === null) {
      navigate("/login")
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips"
    axios.get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])

  const acessTripDetails = (id) => {
    navigate(`/details/${id}`)
  }
  const acessCreateTrip = () => {
    navigate("/create")
  }

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips/${id}`
    axios.delete(url, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        alert("Viagem deletada!")
      })
      .catch((err) => {
        alert("Erro!")
      })
  }

  const listOfTrips = trips?.map((element) => {
    return <div key={element.id}>
      <div>
        <p>Nome: {element.name}</p>

        <button onClick={() => deleteTrip(element.id)}>Deletar Viagem</button>
        <button onClick={() => acessTripDetails(element.id)}>Detalhes da Viagem</button>

      </div>
    </div>
  })

  return (
    <div>
      <h2>Bem vindo Adm</h2>
      <main>{listOfTrips} </main>
      <div>
        <button onClick={acessCreateTrip}>Criar Nova Viagem</button>
      </div>
    </div>
  )
}

export default AdminHomePage