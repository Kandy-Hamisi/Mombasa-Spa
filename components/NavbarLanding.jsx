import React from 'react'
import Link from 'next/link'
import { FaSearch, FaShoppingCart} from 'react-icons/fa'

const NavbarLanding = () => {
  return (
    <header className='fixed flex justify-between w-full pt-4 text-white'>
      <div className="ml-16">
        <h1>Mombasa Spa</h1>
      </div>

      {/* navigaton */}
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* search and cart icons */}
      <div className="flex space-x-2 mr-16 text-md">
        <span><FaSearch/></span>
        <span className="flex relative">
          <FaShoppingCart/>
          <span className="text-[10px] absolute p-[1px] bg-orange-secondary rounded-full w-full text-center ml-[10px] -mt-[10px] text-white">9</span>
          </span>
      </div>
    </header>
  )
}

export default NavbarLanding