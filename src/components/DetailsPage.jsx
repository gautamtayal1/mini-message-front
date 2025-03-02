import React from 'react'
import { useLocation } from 'react-router'

const DetailsPage = () => {

  const location = useLocation()
  const message = location.state.message
  console.log(message);
  
  return (
    <div className='p-10 w-full'>
      <div className="card card-dash bg-base-300 ">
          <div className="card-body">
            <h2 className="card-title">{message.user}</h2>
            <p>{message.text}</p>
            <p>{message.added}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
    </div>
  )
}

export default DetailsPage
