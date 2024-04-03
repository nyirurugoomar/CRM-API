import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className='bg-blue-600'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
          <h1 className="font-bold">LOGO</h1>
        </Link>
        <ul className="flex gap-4 text-white">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to='/'>
          <li>Profile</li>
          </Link>
        </ul>
        </div>
    </div>
  )
}

export default Header