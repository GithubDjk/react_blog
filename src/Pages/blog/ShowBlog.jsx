import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../global/components/layout/Layout'
import axios from 'axios'
import { baseUrl } from '../../config'

const ShowBlog = () => {
    const [blog, setBlog] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()

    const fetchBlog = async () => {
       try {
           const response = await axios.get(`${baseUrl}/blog/${id}`)
           if (response === 200 || 304) {
               setBlog(response.data.data)
           }else{
               alert('Something went wrong!')
           }
       } catch (error) {
        alert(error?.response?.data?.message)
       }
    }

    const deleteBlog = async () => {
        try {
           const response = await axios.delete(`${baseUrl}/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
           })
           if (response === 200 || 304) {
            navigate('/')
           }else{
               alert('Something went wrong!')
           }
       } catch (error) {
        alert(error?.response?.data?.message)
       }
    }

    useEffect(() => {
        fetchBlog()
    }, [])

    return (
        <Layout>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full dark:hidden" src={blog.imageUrl} alt="" />
                            <img className="w-full hidden dark:block" src={blog.imageUrl} alt="" />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1
                                className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                            >
                                {blog.title}
                            </h1>
                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {blog.description}
                            </p>

                            <div className='mt-5'>
                                <Link to='/blogs/edit'>
                                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-1">Edit</button>
                                </Link>

                                <button type="submit" className="w-full text-white bg-red-600 hover:bg-danger-700 focus:ring-4 focus:outline-none focus:ring-danger-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-800 my-1" onClick={deleteBlog}>Delete</button>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ShowBlog