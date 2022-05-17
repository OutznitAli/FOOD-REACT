import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css'
import swal from 'sweetalert'
import cover from '../image/cover_login.png'

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  let navigate = useNavigate()
  const [user, sendUser] = useState({
    admin_name: '',
    admin_password: '',
  })

  const handlChange = (e) => {
    sendUser({ ...user, [e.target.name]: e.target.value })
  }

  const handSubmit = () => {
    const sendData = {
      admin_name: user.admin_name,
      admin_password: user.admin_password,
    }

    axios
      .post('http://localhost/ReactPHP/login.php', sendData)
      .then((response) => {
        if (response.status == '200') {
          window.localStorage.setItem('admin_name', response.data.admin_name)
          window.localStorage.setItem(
            'admin_password',
            response.data.admin_password
          )
          swal('Welcome Admin', '', 'success')
          navigate('dashboard')
        } else {
          swal('Invalid ', 'invalid user name or password ', 'error')
        }
      })
  }

  return (
    <>
      <div className='wrap-login'>
        <div class='center'>
          <img src={cover} width='300px' className='image_login' />
          <form onSubmit={handleSubmit(handSubmit)}>
            <div className='flex justify-center '>
              <h1 className='text-4xl font-extrabold text-amber-500 mb-10  underline decoration-wavy decoration-lime-500'>
                LOGIN
              </h1>
            </div>
            <div class='inputbox'>
              <input
                {...register('admin_name', {
                  required: 'Enter username',
                })}
                type='text'
                name='admin_name'
                placeholder='username'
                onChange={handlChange}
                value={user.admin_name}
              />
            </div>

            {errors.admin_name && <small>{errors.admin_name.message}</small>}

            <div class='inputbox-pass '>
              <input
                {...register('admin_password', {
                  required: 'Enter password',
                })}
                type='password'
                name='admin_password'
                placeholder='Password'
                onChange={handlChange}
                value={user.admin_password}
              />
            </div>
            {errors.admin_password && (
              <small>{errors.admin_password.message}</small>
            )}

            <div class='inputbox-submit'>
              <input type='submit' value='Login' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
