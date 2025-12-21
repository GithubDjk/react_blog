import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/blog/Home'
import { Register } from './Pages/auth/Register'
import { Login } from './Pages/auth/Login'
import { AddBlog } from './Pages/blog/AddBlog'
import { EditBlog } from './Pages/blog/EditBlog'
import ShowBlog from './Pages/blog/ShowBlog'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path = "blogs/add" element={< AddBlog />} />
        <Route path = "blogs/edit" element={< EditBlog />} /> 
        <Route path = "blogs/id" element={< ShowBlog />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
