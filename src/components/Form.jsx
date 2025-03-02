import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/messageSlice'

const Form = () => {

  const [user, addUser] = useState("Elon")
  const [text, addText] = useState("Hey im elon")
  const dispatch = useDispatch()

  const handleSubmit = async() => {
    try{
      const res = await axios.post(BASE_URL, {
        user:user,
        text:text,
        added:new Date()
      }, {withCredentials: true})
      console.log(res.body)
      dispatch(addMessage(res.body))
    }
    catch(error){
      console.log(error);
      
    }
  }

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Details</legend>
        
        <label className="fieldset-label">Name</label>
        <input 
        type="string" 
        className="input" 
        placeholder="Name"
        value={user}
        onChange={(e) => addUser(e.target.value)} />
        
        <label className="fieldset-label">Message</label>
        <input 
        type="string" 
        className="input" 
        placeholder="Message"
        value={text} 
        onChange={(e) => addText(e.target.value)} />
        
        <button 
        className="btn btn-neutral mt-4"
        onClick={handleSubmit}
        >Submit</button>
      </fieldset>
    </div>
  )
}

export default Form
