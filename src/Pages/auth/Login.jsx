import React from 'react'
import Form from './components/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../config'

export const Login = () => {

    const navigate = useNavigate()

    const submitLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, data)
      if(response?.status == 200){
        navigate('/')
      }
      else{
        alert(`Something went wrong!, ${response.status}`)
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }

  return (
    <Form type="login" onSubmit={submitLogin} />
  )
}
