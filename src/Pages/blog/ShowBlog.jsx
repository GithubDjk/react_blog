import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../global/components/layout/Layout'
const ShowBlog = () => {
  return (
    <Layout>
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img className="w-full dark:hidden" src="https://media.istockphoto.com/id/175490523/photo/beautiful-nature-big-world-of-small-things.jpg?s=1024x1024&w=is&k=20&c=dmKetrZ9RCKfVGp3MH0cFS8bR8uEyuZzZlPme3Nw3no=" alt="" />
                <img className="w-full hidden dark:block" src="https://media.istockphoto.com/id/175490523/photo/beautiful-nature-big-world-of-small-things.jpg?s=1024x1024&w=is&k=20&c=dmKetrZ9RCKfVGp3MH0cFS8bR8uEyuZzZlPme3Nw3no=" alt="" />
                </div>

                <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1
                    className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                    >
                    Title of the Blog
                </h1>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Studio quality three mic array for crystal clear calls and voice
                    recordings. Six-speaker sound system for a remarkably robust and
                    high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                </p>

                <p className="text-gray-500 dark:text-gray-400">
                    Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                    Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                    Magic Keyboard or Magic Keyboard with Touch ID.
                </p>

                <div className='mt-5'>
                    <Link to='/blogs/edit'>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 my-1">Edit</button>
                    </Link>

                    <Link to='/'>
                        <button type="submit" className="w-full text-white bg-red-600 hover:bg-danger-700 focus:ring-4 focus:outline-none focus:ring-danger-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-danger-800 my-1">Delete</button>
                    </Link>

                </div>
                            
                </div>
            </div>
            </div>
        </section>
    </Layout>
  )
}

export default ShowBlog