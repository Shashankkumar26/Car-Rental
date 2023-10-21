"use client"

import { CarProps } from '@/types';
import Image from 'next/image';
import { useState, Fragment } from 'react'
import {Transition ,Dialog} from "@headlessui/react";
import {generateCarImageUrl} from '@/utils'

interface CarDetailsProps {
    isOpen : boolean;
    closeModal: ()=> void;
    car : CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <div>
      <Transition appear 
      show={isOpen}
      as={Fragment}
    >
      <Dialog as="div" className="" onClose={closeModal} >
      '
      <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
            
        

          </Transition.Child>
          <div  className='fixed inset-0 overflow-y-hidden' >
            <div className='flex justify-center items-center min-h-full p-4 text-center ' >
            <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >   
        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform  rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-5 z-30">
          <button type='button' 
          onClick={closeModal} 
          className="absolute z-10 top-3 right-3 bg-white rounded-full"
          >
           <Image  src="/close.svg" alt="close"  height={22} width={22} className="object-contain p-1 font-bold"/>
          </button>
          <div className="flex-1 flex flex-col gap-3">
                 <div className='w-full h-40 relative bg-pattern bg-cover bg-center rounded-lg'>
                   <Image src={generateCarImageUrl(car)} alt='hero' fill priority className='object-contain '/>
                 </div>
                 <div className='flex gap-3 w-full'>
                       <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src={generateCarImageUrl(car,'29')} fill alt="hero" className="object-contain" />
                       </div>
                       <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src={generateCarImageUrl(car,'22')} fill alt="hero" className="object-contain" />
                       </div>
                       <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src={generateCarImageUrl(car,"13")} fill alt="hero" className="object-contain" />
                       </div>
                 </div>
                 
          </div>
          <div className=' flex-1 flex flex-col w-full gap-2'>
            <h2  className='font-bold text-[18px] capitalize '>{car.make} {car.model}</h2>
             <div className='flex flex-wrap w-full mt-3 gap-4'>
                  {Object.entries(car).map(([key,value])=>(
                    <div className='flex flex-between w-full gap-3' key={key}>
                      <h4 className='text-grey font-semibold capitalize text-[14px]'>{key.split("_").join(" ")}</h4>
                      <p className='font-bold text-[14px] capitalize'>{value}</p>
                    </div>
                  ))}
             </div>
          </div>
        </Dialog.Panel>




          </Transition.Child>


            </div>
             
             </div>



      </Dialog>
      

      </Transition>
    </div>
  )
}

export default CarDetails
