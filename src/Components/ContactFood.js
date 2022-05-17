import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component'
import 'animate.css/animate.min.css'

export default function ContactFood() {
  const handlToast = () => {
    Store.addNotification({
      title: 'Your message has been sent',
      message: 'Thank you for contacting us !',
      type: 'success',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated animate__fadeIn'],
      animationOut: ['animate__animated animate__fadeOut'],
      dismiss: {
        duration: 3000,
      },
    })
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [data, setdata] = useState({
    username: '',
    useremail: '',
    usermsg: '',
  })

  const handChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  function handClick() {
    const senddata = {
      username: data.username,
      useremail: data.useremail,
      usermsg: data.usermsg,
    }

    if (data.username != '' && data.useremail != '' && data.usermsg != '') {
      axios
        .post('http://localhost/ReactPHP/InsertContact.php', senddata)
        .then((result) => {
          if (result.data.Status == 'Invalid') alert('Invalid User')
          else {
            handlToast()
          }
        })

      setdata({
        username: '',
        useremail: '',
        usermsg: '',
      })
    }
  }

  return (
    <>
      <ReactNotifications />
      <h1 className='font-bold text-4xl text-slate-900 text-center mt-10 '>
        Contact
      </h1>

      <div className='form flex flex-col items-center p-20'>
        <div className='form--title'>
          <h1 className='font-bold text-gray-900 text-2xl mb-10 text-center'>
            Get in Touch!
          </h1>
          <p className='text-gray-700 mb-7'>
            Ali is the author of familly taste health care
          </p>
        </div>

        <div className='form--container  '>
          <form onSubmit={handleSubmit(handClick)} className=' flex flex-col'>
            <label
              htmlFor='username'
              className='bg-white font-base font-sans text-gray-700 pb-2'
            >
              Your Name
            </label>
            <input
              {...register('username', {
                required: 'name required',
              })}
              type='text'
              name='username'
              className='bg-slate-200 border-2 border-gray-300 p-3 duration-300 font-base '
              onChange={handChange}
              value={data.username}
            />

            {errors.username && <small>{errors.username.message}</small>}

            <label
              htmlFor='email'
              className='bg-white font-base font-sans text-gray-700 pb-2'
            >
              Your Email
            </label>
            <input
              {...register('useremail', {
                required: 'email is required',
              })}
              type='email'
              name='useremail'
              className='bg-slate-200 border-2 border-gray-300 p-3 duration-300 font-base '
              onChange={handChange}
              value={data.useremail}
            />
            {errors.useremail && <small>{errors.useremail.message}</small>}

            <label
              htmlFor='message'
              className='bg-white font-base font-sans text-gray-700 pb-2'
            >
              Your Message
            </label>
            <textarea
              {...register('usermsg', {
                required: 'message is requierd',
              })}
              typeof='textarea'
              cols='30'
              rows='10'
              name='usermsg'
              className='bg-slate-200 border-2 border-gray-300 p-3 duration-300 font-base'
              onChange={handChange}
              value={data.usermsg}
            ></textarea>
            {errors.usermsg && <small>{errors.usermsg.message}</small>}

            <input
              type='submit'
              className=' btn-submit bg-gray-900 rounded-lg p-2 w-32 mt-5 text-slate-50 text-center'
            />
          </form>
        </div>
      </div>
    </>
  )
}
