import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Details</legend>
        
        <label className="fieldset-label">Name</label>
        <input type="email" className="input" placeholder="Name" />
        
        <label className="fieldset-label">Message</label>
        <input type="password" className="input" placeholder="Message" />
        
        <button className="btn btn-neutral mt-4">Submit</button>
      </fieldset>
    </div>
  )
}

export default Form
