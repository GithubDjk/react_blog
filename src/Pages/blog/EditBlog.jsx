import React from 'react'
import { Layout } from '../global/components/layout/Layout'
import { BlogForm } from './components/BlogForm'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'

export const EditBlog = () => {
  const location = useLocation()
  const blog = location.state  
  const navigate = useNavigate()
  
  const handleBlogPost = async (data) => {
  try {
    const response = await axios.patch(`${baseUrl}/blog/${blog._id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": localStorage.getItem('token')
      }
    })
    if(response.status == 200){
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
      <BlogForm type='Edit' blog={blog} onSubmit={handleBlogPost} />
    </Layout>
  )
}
