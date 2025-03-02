import React, { useEffect } from 'react'
import MessageCard from './MessageCard'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/messageSlice'

const Homepage = () => {

  const dispatch = useDispatch()
  const fetchMessages = async() => {
    try{
      const res = await axios.get(BASE_URL, {}, {withCredentials:true})
      console.log(res)
      dispatch(addMessage(res?.data))
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className=''>
      <MessageCard/>
    </div>
  )
}

export default Homepage
