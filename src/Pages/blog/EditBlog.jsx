import React from 'react'
import { Layout } from '../global/components/layout/Layout'
import { BlogForm } from './components/BlogForm'

export const EditBlog = () => {
  return (
    <Layout>
      <BlogForm type='Edit' />
    </Layout>
  )
}
