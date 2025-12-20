import React from 'react'
import { NavBar } from '../../../blog/components/NavBar'

export const Layout = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}
