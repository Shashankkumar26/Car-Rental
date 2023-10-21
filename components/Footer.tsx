 "use client"
import React from 'react'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import { footerLinks } from '@/Constants/index'
const Footer = () => {
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-300'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-4'>
        <div className='flex flex-col justify-start items-start gap-5' >
          <Image src="/logo.svg" width={100} height={18} alt="footer logo" className='object-contain'/>
          <p className=' ml-4 text-base text-gray-700 font-bold text-[14px]'>
             Carhub 2023 <br />
             All rights reserved &copy;
          </p>
        </div>
        <div className='flex-1 w-full flex md:justify-end flex-wrap gap-20 max-md:mt-10 font-semibold'>
          {footerLinks.map((link,index)=>(
            <div key={link.title} className="flex flex-col lg:gap-4 gap-2 text-base min-w-[170px]"> 
            <h3 className='font-bold text-[18px]'>{link.title}</h3>
            
              
            {link.links.map((links,index)=>(
              <Link className='text-gray-500  text-[15px] ' key={links.title} href={links.url} >{links.title}</Link>
            ))}
          

            </div>
          ))}
        </div>
        
      </div>
      <div className='border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center flex-wrap mt-10 sm:px-16 px-6 py-4 '>
          <p className='text-gray-500 text-[14px] '>@2023 Carhub. All Rights Reserved</p>
          <div className='flex-1 flex sm:flex-center justify-end max-sm:mt-4  gap-5'>
          <Link href="/" className='text-gray-500 text-[14px] text-base '>Privacy policy</Link>
          <Link href="/" className='text-gray-500 text-[14px] text-base '> Terms of use</Link>

          </div>
          

        </div>

   </footer>
  )
}

export default Footer;
