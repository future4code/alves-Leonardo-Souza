import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { useEffect } from 'react'
import useForm from '../Components/useForm'


function CreateTripPage() {
  
  const [form, onChange] = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
  })

  // const createTrip = () => {
  //   const token = localStorage.getItem('token')
  //   const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips'
  //   const body = form
  //   axios.post(url, body, { headers: {
  //     "Content-Type": "application/json",
  //     auth: token
  //   }
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err.response)
  //   })      
  //   })
  // }  
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/trips'
  //   const body = {
  //     name: "",
  //     planet: "",
  //     date: "",
  //     description: "",
  //     durationInDays: ""
  //   }
  //   axios.post(url, body, { headers: {
  //     "Content-Type": "application/json",
  //     auth: token
  //   }
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err.response)
  //   })      
  //   })
  // }, [])  

  return (
    <div>
      <h2>Create Trip Page</h2>
      <form>
        <input
        name='name'
        value={form.name}
        placeholder='Nome'
        onChange={onChange}>          
        </input>
        <input
        name='planet'
        value={form.planet}
        placeholder='Planeta'
        onChange={onChange}>          
        </input>
        <input
        name='date'
        value={form.date}
        placeholder='Nome'
        onChange={onChange}>          
        </input>
        <input
        name='description'
        value={form.description}
        placeholder='Nome'
        onChange={onChange}>          
        </input>
        <input
        name='durationInDays'
        value={form.durationInDays}
        placeholder='Duração (em dias)'
        onChange={onChange}>          
        </input>
      </form>
    </div>
  )
}

export default CreateTripPage