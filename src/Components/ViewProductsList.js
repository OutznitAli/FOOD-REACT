import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ViewProductsList(props) {
  return (
    <>
      <table>
        <tr className='row1 text-stone-600'>
          <th style={{ width: '20%' }}>image</th>
          <th style={{ width: '20%' }}>nom</th>
          <th style={{ width: '20%' }}>description</th>
          <th style={{ width: '10%' }}>price</th>
          <th style={{ width: '10%' }}>edit</th>
          <th style={{ width: '10%' }}>delete</th>
        </tr>
        <tr style={{ height: '20px' }}>
          <td className='flex justify-center'>
            <img src={props.image} width='100px' />
          </td>
          <td className='font-bold text-lime-600'>{props.nom}</td>
          <td className='text-sm'>{props.description}</td>
          <td>{props.price} MAD</td>
          <td>
            <Link
              className='text-lime-500'
              to={`/admin/dashboard/edit-products/${props.id}`}
            >
              <EditIcon fontSize='small' />
            </Link>
          </td>
          <td className='text-red-600'>
            <Link
              className='text-red-600'
              to=''
              onClick={() => props.deletFood(props.id)}
            >
              <DeleteForeverIcon fontSize='small' />
            </Link>
          </td>
        </tr>
      </table>
    </>
  )
}

export default ViewProductsList
