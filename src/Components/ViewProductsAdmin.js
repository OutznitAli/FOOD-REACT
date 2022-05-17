import React, { useEffect, useState } from 'react'
import ViewProductsList from './ViewProductsList'
import axios from 'axios'
import swal from 'sweetalert'
import { Outlet } from 'react-router-dom'

function ViewProductsAdmin() {
  const [data, setData] = useState()

  useEffect(() => {
    loadFood()
  }, [])

  const loadFood = () => {
    axios.get('http://localhost/ReactPHP/ViewAll.php').then((response) => {
      setData(response.data)
    })
  }

  const deletFood = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this item !',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete('http://localhost/ReactPHP/DeleteFood.php', {
            data: { id: id },
          })
          .then((r) => {
            loadFood()
          })
          .catch(() => {
            alert('error')
          })
        swal('Poof! Your item  has been deleted!', {
          icon: 'success',
        })
      } else {
        swal('Your item file is safe!')
      }
    })
  }

  return (
    <>
      <div className='grid-view'>
        <div className='flex justify-center flex-col items-center p-10	'>
          {data &&
            data.map((item) => {
              return (
                <ViewProductsList
                  id={item.id}
                  image={item.image}
                  nom={item.nom}
                  description={item.description}
                  price={item.price}
                  deletFood={deletFood}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default ViewProductsAdmin
