import { CarProps } from "@/types";
import { FilterProps } from "@/types";

export async function fetchCars(filters : FilterProps){
 const headers ={
    
		'X-RapidAPI-Key': '2386604e58msh3b61f834fc70de5p171670jsne9b73d36a2d4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	
 }
 const {manufacturer,year, model,fuel, limit} = filters;
 const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&ful_type=${fuel}`;

 const response = await fetch(url ,{headers :headers});

 const result = await response.json();
 return result;
 
}

export const calculateCarRent =(city_mpg: number, year:number) =>{
   const basePrice =50;
   const mileageFactor=0.1;
   const AgeFactor = 0.05;
   const mileageRate =city_mpg *mileageFactor;
   const ageRate = (new Date().getFullYear() -year)* AgeFactor;
   const rentalratePerDay = (basePrice + mileageRate +ageRate).toFixed(2);

   return rentalratePerDay;



}


export const generateCarImageUrl=(car: CarProps, angle?: string)=>{
  const url= new URL ('https://cdn.imagin.studio/getimage');
  const {make, year, model}= car;
  url.searchParams.append('customer','hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
}


export const updateSearchParams=(type:string, value: string)=>{
  const searchParams= new URLSearchParams(window.location.search);
  searchParams.set(type,value)
  
 
 const newPathName=`${window.location.pathname}?${searchParams.toString()}`
 return newPathName;
}