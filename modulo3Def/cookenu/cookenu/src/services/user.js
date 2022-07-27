import {BASE_URL} from '../constants/urls'
import axios from 'axios'

export const login = (body, clear) => {
    const url = `${BASE_URL}/user/login`
    axios.post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
    })
    .catch((err) => {
      alert("Erro no Login")
    })
  }