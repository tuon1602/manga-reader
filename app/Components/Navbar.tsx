import React from 'react'
import myAva from "/public/assets/images/ava.png"
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <Link href="/"><Image src={myAva} alt='ava' width={100} height={100}/></Link>
        <ThemeToggle/>
    </div>
  )
}

export default Navbar