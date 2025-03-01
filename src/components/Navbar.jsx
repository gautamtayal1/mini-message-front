import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
      <Link to="/home"><h1 className="btn btn-ghost text-xl">Message Board</h1>
      </Link>
      
      <Link to="/form">
      <button 
        className=' border rounded p-1 mr-5'>
          Add Message
        </button>
      </Link>
        
        
      </div>
    </div>
  )
}

export default Navbar
