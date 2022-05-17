import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import logo from '../image/LOGO.png'

function Admin() {
  return (
    <>
      <div className='flex justify-center mr-10 p-4'>
        <img src={logo} alt='logo' />
      </div>

      <Outlet />
    </>
  )
}

export default Admin
