import React from 'react'
import Form from './components/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'

export const Register = () => {
  const navigate = useNavigate()

  const submitRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, data)
      if(response?.status == 201){
        navigate('/login')
      }
      else{
        alert(`Something went wrong!, ${response.status}`)
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }

  return (
    <Form type="register" onSubmit={submitRegister} />
  )
}
