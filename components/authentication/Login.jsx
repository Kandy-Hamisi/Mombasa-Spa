import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
// import SignUp from './SignUp';



const Login = () => {

    const [signUpForm, setSignUpForm] = useState(false);

    const handleToggle = () => {
        if(signUpForm) {
            setSignUpForm(false);
        } else {
            setSignUpForm(true);
        }
    }

  return (
    <section className='min-h-screen flex sm:flex-col sm:text-center items-center space-y-4 mr-16 ml-16 lg:flex-row lg:space-x-56'>
        <div>
            <div>
                <span className='uppercase font-bold'>MS</span>
                <h1 className='capitalize text-3xl font-bold'>Mombasa Spa</h1>
            </div>
            <div className='text-center'>
                <h1 className='capitalize text-3xl font-bold'>Welcome Back to The Mombasa Spa</h1>
                <p className='max-w-xl hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, incidunt. Assumenda illum accusamus amet voluptatum iste, possimus itaque tempora dolorum soluta exercitationem, consequuntur maiores numquam illo expedita incidunt! Voluptates fugit nobis veniam aliquid error totam maiores soluta est quos ratione?</p>
            </div>
        </div>
        {/* sign up form */}
        
        <div>
            <div className='bg-brown-secondary p-8 rounded-lg space-y-8'>
                {signUpForm ? <div>
                    <h4 className='text-lg text-white font-bold mb-5'>Sign Up</h4>
                    <p className='text-white'>ALready have an account? <span onClick={handleToggle} className='cursor-pointer text-blue-600 ml-[10px]'>Login</span></p>
                </div>: <div>
                    <h4 className='text-lg text-white font-bold mb-5'>Sign In</h4>
                    <p className='text-white'>Don't have an account? <span onClick={handleToggle} className='cursor-pointer text-blue-600 ml-[10px]'>Sign Up</span></p>
                </div>}
                <div>
                    <form name="my-form" className='space-y-4'>
                        <div>
                            <input type="email" name="email" id="email" placeholder='email'  className='p-[0.5em] rounded-lg dark:bg-black-primary bg-off-white-primary' />
                        </div>
                        <div>
                            <input type="password" id='password' placeholder='password' className='p-[0.5em] rounded-lg dark:bg-black-primary bg-off-white-primary'/>
                        </div>
                        {!signUpForm && <div className='flex justify-end'>
                            <p className='text-blue-600 cursor-pointer'>Forgot your password?</p>
                        </div>}
                        <div className='flex justify-center'>
                            {signUpForm ? <button className='text-white bg-blue-500 rounded-lg p-2 w-full'>Sign Up</button>
                            :<button className='text-white bg-blue-500 rounded-lg p-2 w-full'>Sign in</button>}
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
    </section>
  )
}

export default Login