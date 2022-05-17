import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Input } from 'postcss'

function EditProducts() {
  let history = useNavigate()
  const { id } = useParams()

  const [food, setFood] = useState({
    id_menu: '',
    image_menu: '',
    nom_menu: '',
    description_menu: '',
    price_menu: '',
    categorie_menu: '',
  })

  console.log(food)
  useEffect(() => {
    loadFood()
  }, [])

  const {
    id_menu,
    image_menu,
    nom_menu,
    description_menu,
    price_menu,
    categorie_menu,
  } = food

  const handlChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value })
  }

  const handlEdit = (e) => {
    e.preventDefault()
    const dataPhp = {
      id_Menu: food.id_menu,
      nom_Menu: food.nom_menu,
      image_Menu: food.image_menu,
      description_Menu: food.description_menu,
      price_Menu: food.price_menu,
      categorie_Menu: food.categorie_menu,
    }

    console.log(dataPhp)

    axios
      .post('http://localhost/ReactPHP/UpdateFood.php', dataPhp)
      .then((response) => {
        console.log(response)
        if (response.data.status === 'valid') {
          history('/admin/dashboard/view-products')
        }
      })
  }

  const onChangeFile = (e) => {
    var fReader = new FileReader()
    fReader.readAsDataURL(e.target.files[0])
    fReader.onloadend = function (event) {
      setFood({ ...food, [e.target.name]: event.target.result })
    }
  }

  const loadFood = () => {
    axios
      .get('http://localhost/ReactPHP/EditeFood.php?id_menu=' + id)
      .then((response) => {
        setFood(response.data)
      })
  }

  return (
    <>
      <div className=''>
        <form
          onSubmit={handlEdit}
          encType='multipart/form-data'
          className='flex items-center flex-col gap-4'
        >
          <div className='wraper-edit-products'>
            <h1 className='edit-products font-extrabold text-3xl mb-10 text-amber-500 underline decoration-wavy decoration-lime-500'>
              EDIT PRODUCTS
            </h1>
            <div className='inputbox grid-div'>
              <label>nom</label>
              <input
                type='text'
                name='nom_menu'
                value={nom_menu}
                onChange={handlChange}
              />
            </div>
            <div className='inputbox  grid-div'>
              <label>descriptipn</label>
              <input
                type='text'
                name='description_menu'
                onChange={handlChange}
                value={description_menu}
              />
            </div>
            <div className='inputbox  grid-div'>
              <label>image</label>
              <input
                className='inputfile'
                type='file'
                onChange={onChangeFile}
                name='image_menu'
                id='inputFile'
              />
            </div>
            <div className='inputbox  grid-div'>
              <label>price</label>
              <input
                type='number'
                step='.01'
                name='price_menu'
                onChange={handlChange}
                value={price_menu}
              />
            </div>

            <div className='inputbox  grid-div'>
              {' '}
              <label>categorie</label>
              <select
                id='cars'
                name='categorie_menu'
                onChange={handlChange}
                value={categorie_menu}
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

export default EditProducts
