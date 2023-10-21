"use client"
import { CarProps } from '@/types'
import React, { useState } from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton'
import {calculateCarRent, generateCarImageUrl} from '@/utils'
import CarDetails from './CarDetails'
interface CarCardProps{
    car : CarProps
}

const CarCard = ({car}:CarCardProps) => {
   const [isOpen, setIsOpen]=useState(false)
    const {
        city_mpg,
        
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        transmission,
        model,
        year,
        
    } =car
    const carRent= calculateCarRent(city_mpg, year)
   
  return (
    <div className='flex flex-col p-6 justify-center items-start  text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>
        
        <div className='w-full flex justify-between item-start gap-2'>
            <h2 className='text-[22px] font-bold leading-[26px] capitalize '>{make} {model} </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-semibold'>
            
          <span  className='self-start text-[16px]'  >
            $
          </span>
            {carRent}
            
            <span  className='self-end text-[16px]'  >
           / day
          </span>
         
        </p>

        <div className="relative w-full h-40 my-3">
             <Image  src={generateCarImageUrl(car)} alt = "car model" fill className="object-contain" />
        </div>
     
          
         
        <div className="w-full flex mt-2 relative">
            <div className='w-full flex group-hover:invisible justify-around text-gray'>
               <div className='flex flex-col justify-center items-center gap-2' >
                     <Image src='/steering-wheel.svg' alt="steering wheel" height={20} width={20} className="object-contain" />
                     <p className='text-[14px] text-black'>
                         {transmission==='a'? "Automatic": "Manual"}

                     </p>
               </div>
               <div className='flex flex-col justify-center items-center gap-2' >
                     <Image src='/tire.svg' alt="tire" height={20} width={20} className="object-contain" />
                     <p className='text-[14px] text-black'>
                         {drive.toUpperCase()}

                     </p>
               </div>
               <div className='flex flex-col justify-center items-center gap-2' >
                     <Image src='/gas.svg' alt="gas" height={20} width={20} className="object-contain" />
                     <p className='text-[14px] text-black'>
                         {city_mpg} MPG

                     </p>
               </div>
            </div>
            <div className='hidden group-hover:flex absolute w-full z-10' >
               <CustomButton 
               title='View More'
               containerStyles='py-[16px] w-full  font-bold rounded-full bg-primary-blue'
               handleClick={()=>{setIsOpen(true)}}
               textStyles="text-white text-[14px] leading-[17px] font-bold "
               rightIcon='/right-arrow.svg'
              
               
               />
               <CarDetails 
               isOpen={isOpen}
               closeModal={()=>setIsOpen(false)}
               car={car}
               />
            </div>
        </div>






    </div>
  )
}
 
export default CarCard
