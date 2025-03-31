import React from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import logo from "./image-src/reiro_white.svg"
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <>



      {/* header */}

      <nav id="navbar" className='w-full h-25 bg-gray-800 flex justify-between items-center pl-10  pr-20 overflow-x-hidden'>

        {/* nav-log */}
        <div id='nav-log'>
          <img className='h-10' src={logo} alt="" />
        </div>

        <div id='hamburger' className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={40} color="white" /> : <IoMdMenu size={40} color="white" />}

        </div>

        <div id='link'
          className={` flex  ${isOpen ? "block" : "hidden "}`} >

          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/service'} >Service</Link>

          <div id='nav-btn'>
            <Btn />
          </div>
        </div>

      </nav>

      {/* header-end */}

    </>
  )
}

export default Nav