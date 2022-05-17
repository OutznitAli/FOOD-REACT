import React from 'react'
import axios from 'axios'

function Usefetch(urlData) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    try {
      // declare the data fetching function
      const getData = async () => {
        const dataGet = await axios.get(urlData)
        setData(dataGet.data)
      }

      // call the function
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [urlData])

  return data
}

export default Usefetch
