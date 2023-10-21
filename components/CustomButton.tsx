"use client";

import { CustomButtonProps } from '@/types/index';
import React from 'react'
import Image from 'next/image';
const CustomButton = ({handleClick ,title,containerStyles,btnType, textStyles,rightIcon}: CustomButtonProps) => {
  return (
    <button className={`relative ${containerStyles}  flex justify-center items-center px-7 text-[15px] font-semibold py-3 ` }
    disabled ={false}
    type={"button"}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles} `}>{title}</span>
        {rightIcon && ( <div className='w-6 h-6 relative'>
          <Image src={rightIcon} alt=" right icon" fill className='object-contain' />


        </div> )}
    </button>
  )
}

export default CustomButton
