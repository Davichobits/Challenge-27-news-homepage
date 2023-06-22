import { useState } from 'react'

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const Navbar = () => {

  const [menuClicked, setMenuClicked] = useState(true)

  const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  }

  return (
    <>
      <ul className={`${menuClicked ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed sm:text-4' href="#">Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-SoftRed' href="#">Categories</a>
        </li>
      </ul>
      <img className={`${menuClicked ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={handleClick} alt="" />
    </>
  )
}