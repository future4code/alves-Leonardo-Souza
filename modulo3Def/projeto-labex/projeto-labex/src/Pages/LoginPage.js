import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const sendEmail = (event) => {
    setUserEmail(event.target.value)
  }
  const sendPassword = (event) => {
    setUserPassword(event.target.value)
  }

  const acessAdminArea = (event) => {
    event.preventDefault()
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardoCouto/login`
    const body = {
      email: userEmail,
      password: userPassword
    }
    axios.post(url, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        navigate('/admin')
      })
      .catch((err) => {
        alert("Usuário ou senha inválidos")
      })
  }

  return (
    <div>

      <h2>Página de Login</h2>
      <form onSubmit={acessAdminArea}>
        <input type="email" placeholder='Login' onChange={sendEmail} required></input>
        <input type="password" placeholder='Senha' onChange={sendPassword} required></input>
        <button>Acessar</button>
      </form>
    </div>
  )
}

export default LoginPage