import React from 'react'
import { NavBar } from './components/NavBar'
import { Layout } from '../global/components/layout/Layout'
import { BlogForm } from './components/BlogForm'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'

export const AddBlog = () => {
  const navigate = useNavigate()
  const handleBlogPost = async (data) => {
  try {
    console.log(data)
    const response = await axios.post(`${baseUrl}/blog`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem('token')
      }
    })
    console.log(response)
    if(response.status == 201){
      navigate('/')
    }else{
      alert('Something went wrong!')
    }
  } catch (error) {
    alert(error?.response?.data?.message)
  }
  }

  return (
    <Layout>
      <BlogForm type='Create' onSubmit={handleBlogPost} />
    </Layout>
  )
}
