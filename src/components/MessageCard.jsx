import React from 'react'
import { useSelector } from 'react-redux'

const MessageCard = () => {

  const data = useSelector((store) => store.message)
  return (
    <div className='mt-10 flex justify-center flex-wrap gap-10'>
      {data && 
      data.map((data) => (
        <div className="card card-dash bg-base-300 w-96" key={data.added}>
          <div className="card-body">
            <h2 className="card-title">{data.user}</h2>
            <p>{data.text}</p>
            <p>{data.added}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See Details</button>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default MessageCard
