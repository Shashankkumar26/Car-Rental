import React from 'react'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
  return (
   <header className='w-full z-10'> 
     <nav className="max-w-[1440px] mx-auto sm:px-16 px-6 sm:py-16 py-4 flex justify-between items-center"> 
       <Link href="/" className="flex justify-center items-center ">
        <Image src="/logo.svg" alt="Car Hub Logo" width={118} height={18}  className="object-contain" />
       </Link>
       <CustomButton 
       title="Sign In"
       btnType="button"
       containerStyles=' bg-white text-primary-blue rounded-full min-w-[130px] z-10 '
       />
     </nav>
   </header>
  )
}

export default Navbar
