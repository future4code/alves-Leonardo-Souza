import {useState} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

  const changeInputs = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value}) 
  }  
    return {form, changeInputs}
}
export default useForm