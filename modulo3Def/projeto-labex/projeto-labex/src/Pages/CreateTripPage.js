import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CreateTripPage() {

  const [form, setForm] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const changeInputs = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const createTrip = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips'
    const body = form
    axios.post(url, body, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        alert("Viagem cadastrada com sucesso!")
        setForm({
          name: "",
          planet: "",
          date: "",
          description: "",
          durationInDays: ""
        })
      })
      .catch((err) => {
        alert("Erro na criação! Tente novamente!")
      })
  }

  return (
    <div>
      <h2>Create Trip Page</h2>
      <form onSubmit={createTrip}>
        <input
          name='name'
          value={form.name}
          placeholder='Nome'
          onChange={changeInputs}>
        </input>
        <input
          name='planet'
          value={form.planet}
          placeholder='Planeta'
          onChange={changeInputs}>
        </input>
        <input
          name='date'
          value={form.date}
          placeholder='Data'
          onChange={changeInputs}>
        </input>
        <input
          name='description'
          value={form.description}
          placeholder='Descrição'
          onChange={changeInputs}>
        </input>
        <input
          name='durationInDays'
          value={form.durationInDays}
          placeholder='Duração (em dias)'
          onChange={changeInputs}>
        </input>
        <button>Criar Viagem</button>
      </form>
    </div>
  )
}

export default CreateTripPage