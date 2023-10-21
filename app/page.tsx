import {Hero,CustomButton,Searchbar , CustomFilter, CarCard} from '@/components/index'
import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/Constants';
import Image from '@/node_modules/next/image'
import { HomeProps} from '@/types';
import { fetchCars } from '@/utils'

export default async function Home({searchParams}:HomeProps) {
 console.log(searchParams)
  const allCars= await fetchCars({
    manufacturer:searchParams.manufacturer || '',
    year :searchParams.year || 2022,
    fuel :searchParams.fuel || "",
    limit : searchParams.limit  || 10,
    model : searchParams.model || '',
  });
  console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="min-h-screen Overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y w-full' id='discover'>
           <div  className='flex flex-col items-start justify-start gap-y-2.5 text-black-100' >
            <h1 className='text-4xl font-extrabold'> Car Catalogue</h1>
            <p className='text-[18px] font-semibold pl-2'>Explore the cars you might like.</p>

           </div>

           <div className='mt-12 w-full flex flex-between items-center flex-wrap gap-5 '>
            <Searchbar  />
            <div className='flex flex-start gap-4 z-0 ml-2 relative'>
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
           </div>
           {!isDataEmpty ? (<section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-16'>
              {allCars?.map((car,index)=> <CarCard car={car}/>)}


            </div>
            <div>
          <ShowMore
             pageNumber ={(searchParams.limit || 10)/10}
             isNext={(searchParams.limit || 10) > allCars.length}
          />

            </div>
           </section>) :(
            <div className='mt-16 flex justify-center items-center flex-col gap-2' >
            <h2 className='text-black text-xl font-bold' >OOps No Cars Available</h2>
            <p className=''>{allCars?.message}</p>
            </div>
           )}
            
      </div>

    </main>
  )
}
