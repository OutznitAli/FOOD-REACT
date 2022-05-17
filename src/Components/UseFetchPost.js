import React from 'react'
import axios from 'axios'

function UsefetchPost(urlData, datas) {
  const [response, setResponse] = React.useState()

  axios.post(urlData, datas).then((response) => {
    if (response.data.Status == 'Invalid') {
      alert('Invalid User')
    } else {
      setResponse(response.data)
    }
  })

  return response
}

export default UsefetchPost
