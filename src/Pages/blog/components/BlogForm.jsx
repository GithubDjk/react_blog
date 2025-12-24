import React, { useState } from 'react'

export const BlogForm = ({ type, onSubmit }) => {

  const [data, setData] =  useState({
    title: '',
    subtitle: '',
    category: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name] : name === 'image' ? e.target.files[0] : value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(data)
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {type} a Blog Post
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2.5 text-sm font-medium text-heading">Title</label>
                <input type="text" id="title" name="title" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="subtitle" className="block mb-2.5 text-sm font-medium text-heading">Sub Title</label>
                <input type="text" id="subtitle" name  = "subtitle" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="category" className="block mb-2.5 text-sm font-medium text-heading">Category </label>
                <input type="text" id="category" name="category" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="description" className="block mb-2.5 text-sm font-medium text-heading">Description</label>
                <input type="text" id="description"  name="description" className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="" onChange={handleChange} required />
              </div>

              <div>
                <label className="block mb-2.5 text-sm font-medium text-heading" htmlFor="file_input">Upload file</label>
                <input className="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="file_input" name="image" type="file" onChange={handleChange} />
              </div>

              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Post</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
