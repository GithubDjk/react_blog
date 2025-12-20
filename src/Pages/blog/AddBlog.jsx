import React from 'react'
import { NavBar } from './components/NavBar'
import { Layout } from '../global/components/layout/Layout'
import { BlogForm } from './components/BlogForm'

export const AddBlog = () => {
  return (
    <Layout>
      <BlogForm />
    </Layout>
  )
}
