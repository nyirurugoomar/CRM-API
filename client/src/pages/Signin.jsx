import React from 'react'
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
    <div className=''>
    <div className='md:p-10 p-2   max-w-lg mx-auto md:mt-40 mt-20 bg-blue-600 rounded-lg'>
          <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
          <form className="flex flex-col gap-4 ">
          <input
              type="email"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg "
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg "
            />
            <button className="bg-white text-black p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-extrabold">
              Sign In
            </button>
          </form>
          <div className="flex gap-2 mt-5">
            <p>Dont Have an Account</p>
            <Link to="/sign-up">
              <span className="text-white">Sign up</span>
            </Link>
          </div>
        </div>
    </div>
      
    </>
   
  )
}

export default Signin