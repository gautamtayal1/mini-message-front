import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MessageCard = () => {
  const navigate = useNavigate()
  const data = useSelector((store) => store.message)

  const handleDetailsClick = (messageData) => {
    navigate('/details', { state: { message: messageData } })
  }

  return (
    <div className='mt-10 flex justify-center flex-wrap gap-10'>
      {data && 
      data.map((data, index) => (
        <div className="card card-dash bg-base-300 w-96" key={index}>
          <div className="card-body">
            <h2 className="card-title">{data.user}</h2>
            <p>{data.text}</p>
            <p>{data.added}</p>
            <div className="card-actions justify-end">
              <button 
              className="btn btn-primary"
              onClick={() => handleDetailsClick(data)}
              >See Details</button>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default MessageCard
