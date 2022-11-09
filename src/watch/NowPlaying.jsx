import React from 'react'
import WatchPostFooter from './WatchPostFooter'
import { useGetNowPlayingQuery } from './services/BeseApi'
import Earr from './Earr'
import Loding from './Loding'
const NowPlaying = () => {
  const pageId = 5
  const { data: NowPlaying , isFetching: isFetchinRelatedSongs, error } = useGetNowPlayingQuery({pageId});
  
  if ( isFetchinRelatedSongs) return <Loding  />;

  const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
 
   if (error) return <Earr />;

  console.log(NowPlaying , 'is now playing')
  return (
    <div className='w-full h-screen overflow-y-scroll pb-[40px]' id='MusicBarS'>
  
    {NowPlaying?.results.map((Playing) => (   
    <div className='max-w-[1000px] h-[auto] bg-slate-800 m-auto  rounded-[10px] overflow-hidden mt-[20px] '>
      <div className='w-[96%] h-[70px] m-auto flex flex-row items-center justify-between'>
        <div className='flex flex-row'>
        <img className=' w-[40px] lg:w-[50px] h-[40px] lg:h-auto mr-[10px] rounded-full mt-[15px] lg:mt-[0px]' src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg'/>
        <div className='flex flex-col'>
          <span className='text-[18px]  text-teal-400  '>{`${Playing.original_title} .... `}<span className='text-indigo-500 hover:underline '>see More</span></span>
          <span className='text-[14px] hover:underline text-sky-500 '>{Playing.title}</span>
        </div>
        </div>
        <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
      </div>
      <div>
         <img
          className='bg-cover m-auto w-[100%]'
          src={Api_originimg + Playing.backdrop_path} />
      </div>
      <WatchPostFooter MovieView={Playing.popularity} comment={Playing.vote_count} reaction={Playing.vote_average} />
    </div> 

   ))  }
          <div className='flex flex-row items-center justify-center'>
       <button
      
       className='w-[200px] h-[40px]  bg-gradient-to-br from-black to-[#bc1ebf] mt-[30px] mb-[50px] rounded hover:to-[#bf1e66]   '>Load More</button>
       </div>
   
     </div>
  )
}

export default NowPlaying