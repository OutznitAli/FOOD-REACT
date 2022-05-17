import React, { useState } from 'react'
import UsefetchPost from './UseFetchPost'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css'

function AddProduct() {
  let history = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [data, setData] = useState({
    nom_Menu: '',
    image_Menu: '',
    description_Menu: '',
    price_Menu: '',
    categorie_Menu: '',
  })

  console.log(data)

  const handlChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const onChangeFile = (e) => {
    var fReader = new FileReader()
    fReader.readAsDataURL(e.target.files[0])
    fReader.onloadend = function (event) {
      setData({ ...data, [e.target.name]: event.target.result })
    }
  }

  const handlSubmit = () => {
    const dataPhp = {
      nom_Menu: data.nom_Menu,
      image_Menu: data.image_Menu,
      description_Menu: data.description_Menu,
      price_Menu: data.price_Menu,
      categorie_Menu: data.categorie_Menu,
    }

    console.log(dataPhp.image_Menu)

    axios
      .post('http://localhost/ReactPHP/InsertTestfood.php', dataPhp)
      .then((response) => {
        if (response.status === 200) {
          swal('Item Inserted', '', 'success')
        }
      })
  }

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(handlSubmit)}
          encType='multipart/form-data'
          className='flex items-center flex-col gap-4 '
        >
          <div className='wraper-add-products'>
            <h1 className='edit-products font-extrabold text-3xl mb-6 text-amber-500 underline decoration-wavy decoration-lime-500'>
              ADD PRODUCTS
            </h1>
            <div className='inputbox grid-div'>
              <label>nom</label>
              <input
                {...register('nom_Menu', {
                  required: 'item name required !',
                })}
                type='text'
                name='nom_Menu'
                onChange={handlChange}
              />
            </div>
            <div className=' flex ml-16 pl-20 mb-4'>
              {errors.nom_Menu && <small>{errors.nom_Menu.message}</small>}
            </div>
            <div className='inputbox  grid-div'>
              <label>descriptipn</label>
              <input
                {...register('description_Menu', {
                  required: 'description  required !',
                })}
                type='text'
                name='description_Menu'
                onChange={handlChange}
              />
            </div>
            <div className='  flex ml-16 pl-20 mb-4'>
              {errors.description_Menu && (
                <small>{errors.description_Menu.message}</small>
              )}
            </div>
            <div className='inputbox  grid-div'>
              <label>image</label>
              <input
                {...register('image_Menu', {
                  required: 'image required !',
                })}
                className='inputfile'
                type='file'
                onChange={onChangeFile}
                name='image_Menu'
                id='inputFile'
              />
            </div>
            <div className='  flex ml-16 pl-20 mb-4'>
              {errors.image_Menu && <small>{errors.image_Menu.message}</small>}
            </div>
            <div className='inputbox  grid-div'>
              <label>price</label>
              <input
                {...register('price_Menu', {
                  required: 'item price required !',
                })}
                type='number'
                step='.01'
                name='price_Menu'
                onChange={handlChange}
              />
            </div>
            <div className=' flex ml-16 pl-20 mb-4'>
              {errors.price_Menu && <small>{errors.price_Menu.message}</small>}
            </div>

            <div className='inputbox  grid-div'>
              {' '}
              <label>categorie</label>
              <select
                {...register('categorie_Menu', {
                  required: 'item categorie required !',
                })}
                id='cars'
                name='categorie_Menu'
                onChange={handlChange}
                className='cursor-pointer'
              >
                <option>....</option>
                <option value='burger'>burger</option>
                <option value='pizza'>pizza</option>
                <option value='drinks'>drinks</option>
                <option value='noodles'>noodles</option>
                <option value='desserts'>desserts</option>
                <option value='sushi'>sushi</option>
              </select>
            </div>
            <div className=' flex ml-16 pl-20 mb-4'>
              {errors.categorie_Menu && (
                <small>{errors.categorie_Menu.message}</small>
              )}
            </div>
            <div className='flex justify-end p-4'>
              <input
                type='submit'
                value='Update'
                className=' p-3 	rounded-lg bg-lime-500 text-stone-50 hover:cursor-pointer hover:bg-amber-500 duration-300	'
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProduct
