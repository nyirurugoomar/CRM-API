import React from 'react'
import userImage from '../assets/user_image.avif'
import { Link } from 'react-router-dom'

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`bg-gray-800 w-64 h-full flex flex-col ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center py-4">
        {/* <img src="logo.png" alt="CRM Logo" className="h-8 w-8" /> */}
        <span className="text-white text-lg font-semibold ml-2">CRM</span>
      </div>
      <ul className="py-4">
             <Link to="/dashboard">
             <li className="px-6 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer" onClick={toggleSidebar}>
              Dashboard
            </li>
            </Link>
            <Link to="/product">
                <li className="px-6 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer" onClick={toggleSidebar}>
                Product
                </li>
            </Link>
            <li className="px-6 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer" onClick={toggleSidebar}>Customers</li>
            <li className="px-6 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer" onClick={toggleSidebar}>Sales</li>
            <li className="px-6 py-3 text-gray-300 hover:bg-gray-700 cursor-pointer" onClick={toggleSidebar}>Analytics</li>
      </ul>
      
      {/* Sidebar Footer */}
      <div className="mt-auto px-6 py-3 flex gap-10">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
        <img className='w-[50px] h-[50px] rounded-2xl' src={userImage} alt=''/>
      </div>
    </div>
  )
}

export default Sidebar