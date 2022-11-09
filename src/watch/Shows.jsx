import React from 'react'
import { useGetTvQuery } from './services/BeseApi'
const Shows = () => {
    const pageId = 1 ;
    const { data: Tv , isFetching: isFetchinRelatedSongs, error } = useGetTvQuery({pageId});
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    console.log(Tv)
  return (
    <div className='w-full h-screen  flex flex-row flex-wrap gap-8  justify-center overflow-y-scroll'>
        {Tv?.results.map((tv) => (
        <div className='w-[300px] h-[auto] bg-gradient-to-br from-black to-[#1e2bbf] flex flex-col rounded '>
        <div className='w-full h-[auto] relative  group bg-cover '>  
          <div className={`absolute inset-0 justify-center items-center rounded bg-white bg-opacity-30 group-hover:flex hidden `}>
                <span className='py-[7px] px-[12px] rounded-full cursor-pointer  bg-emerald-500 text-black hover:bg-emerald-400'>See More</span>
          </div>
          <div className='w-[92%] h-auto m-auto my-[10px]  rounded overflow-hidden'>
            <img className='w-[auto] h-auto bg-cover ' src={ Api_originimg + tv.poster_path} />
          </div>  
         </div>  
         <div className='w-[90%] h-auto m-auto'>
            <span className='text-emerald-400'>{tv.original_name}</span> 
            
         </div>
        </div>
        ))}
    </div>
  )
}

export default Shows