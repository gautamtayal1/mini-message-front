import React from 'react'

const MessageCard = ({data}) => {
  return (
    <div>
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Author Name</h2>
          <p>Message</p>
          <p>Time</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageCard
