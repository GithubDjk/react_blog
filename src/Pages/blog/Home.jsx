import { useEffect, useState } from 'react'
import { Layout } from '../global/components/layout/Layout'
import { Card } from './components/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

export const Home = () => {
  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog`)
      if(response.status === 200){
        setBlogs(response?.data?.data)
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])
  
  
  return (
    <Layout>
        <div className='flex flex-wrap items-center justify-center'>
          {
            blogs.length > 0 && blogs.map((blog) => {
              return (
                <Card blog={blog} />
              )
            })
          }
        </div>
    </Layout>
  )
}
