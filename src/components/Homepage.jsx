import React, { useEffect } from 'react'
import MessageCard from './MessageCard'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'

const Homepage = () => {

  const fetchMessages = async() => {
    try{
      const res = await axios.get(BASE_URL, {}, {withCredentials:true})
      console.log(res)
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className='mt-5 flex justify-center flex-wrap'>

      <MessageCard/>
    </div>
  )
}

export default Homepage
