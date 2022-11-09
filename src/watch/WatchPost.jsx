import React from 'react'
import { useState } from 'react';
import WatchPostFooter from './WatchPostFooter'
import { useGetPopularMoviesQuery } from './services/BeseApi'
import { useSelector, useDispatch } from 'react-redux';
import { parseISO , formatDistanceToNow } from 'date-fns'
import { AddAllMovieData } from './services/CouterMovieSlice'
import { ChangeCounterEngin } from './services/CouterMovieSlice'
import { AllMovieDataC } from './services/CouterMovieSlice'
import { ChangeCounterC } from './services/CouterMovieSlice'
import Loding from './Loding'
import Earr from './Earr'
let WatchPost = () => {
  
    const AllMovieData =useSelector(AllMovieDataC)
    const pageId =useSelector(ChangeCounterC)
console.log(pageId , 'is selector')

   const dispatch = useDispatch();






  

    const { data: Movie , isFetching: isFetchinRelatedSongs, error } = useGetPopularMoviesQuery({pageId});

    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
 

   /* const [AllData , setAllData ] =useState( Movie?.results    ? [ ...Movie?.results  ]  : await [ ...Movie?.results  ]   ) */
       
    if ( isFetchinRelatedSongs) return <Loding  />;

    
   /* if( Movie && Movie ){
        dispatch(AddAllMovieData([...Movie?.results ]))
    } */

    if (error) return <Earr />;





 



  return (   
    <>
       {Movie?.results.map((MovAll) => (
  
   
    <div key={MovAll.id}  className='max-w-[900px] h-auto  m-auto mt-[20px]  rounded-[7px] overflow-hidden '>
    <div className='bg-[#242526] max-w-[900px] h-auto    '>
        <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
    <div className='flex flex-row'>
        <div >
            <img className='rounded-full mr-[8px] w-[40px] h-auto'
            src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg'
            />
        </div>
        <div className='flex flex-col'>
            <span>Replubic of Movie  </span>
            <span className='text-[13px] text-gray-400'>2 yer Ago<i class="fa-solid fa-earth-asia ml-[5px]"></i></span>
        </div>
    </div>
    <div>
        <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
    </div>
</div>
<div className='w-[96%] h-auto b m-auto pb-[10px] '>
{MovAll.overview}
<span className='text-emerald-400'>{`[${MovAll.title}]`}</span>
</div>
</div>
   <div className='w-[100%] h-auto m-auto bg-[#242526] m-auto'>
       <img className='w-auto h-auto m-auto bg-cover ' src={Api_originimg + MovAll.backdrop_path} />
   </div>
   <WatchPostFooter MovieView={MovAll.popularity} comment={MovAll.vote_count} reaction={MovAll.vote_average}/>
</div>
)
)}
       <div className='flex flex-row items-center justify-center'>
       <button
       onClick={() => dispatch(ChangeCounterEngin(1))}
       className='w-[200px] h-[40px] bg-gradient-to-br from-white to-[#ba1ebf] mt-[30px] mb-[50px] hover:to-[#1ebf6c]  rounded-full '>Load More</button>
       </div>
    </>   
   
  )
}


export default WatchPost