import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'


const SignUp = () => {
  return (
    
    <div>
      <div className='bg-brown-secondary p-8 rounded-lg space-y-8'>
          <div>
              <h4 className='text-lg text-white font-bold mb-5'>Sign Up</h4>
              <p className='text-white'>ALready have an account? <span className='cursor-pointer text-blue-600 ml-[10px]'>Login</span></p>
          </div>
          <div>
              <form name="my-form" className='space-y-4'>
                  <div>
                      <input type="email" name="email" id="email" placeholder='email'  className='p-[0.5em] rounded-lg dark:bg-black-primary bg-off-white-primary' />
                  </div>
                  <div>
                      <input type="password" id='password' placeholder='password' className='p-[0.5em] rounded-lg dark:bg-black-primary bg-off-white-primary'/>
                  </div>
                  <div className='flex justify-center'>
                      <button className='text-white bg-blue-500 rounded-lg p-2 w-full'>Sign Up</button>
                  </div>
                  <div className='flex items-center justify-center space-x-2'>
                      <hr className='w-20'/>
                      <span>or</span>
                      <hr className='w-20'/>
                  </div>
                  <div className='text-white flex justify-between space-x-4'>
                      <button className='p-2 rounded-lg flex items-center gap-2 bg-blue-500'>
                          <span><FcGoogle/></span>
                          Google
                      </button>
                      <button className='p-2 rounded-lg flex items-center gap-2 bg-blue-500'>
                          <span><FaFacebookF/></span>
                          Facebook
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  )
}

export default SignUp