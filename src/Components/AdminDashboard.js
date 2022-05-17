import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, NavLink, Outlet } from 'react-router-dom'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component'
import 'animate.css/animate.min.css'
import Usefetch from './Usefetch'
import NavAdmin from './NavAdmin'

function AdminDashboard() {
  return (
    <>
      <NavAdmin />
      <Outlet />

      {/* <div>
        <Link to='/' onClick={logOut}>
          Log Out
        </Link>
      </div> */}
    </>
  )
}

export default AdminDashboard
