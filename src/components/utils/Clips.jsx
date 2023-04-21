import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Clips = ({imgsrc, clip}) => {
  return (
    <div className="relative h-28 w-32 overflow-hidden rounded-xl group transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
      <img
        alt='clip-image'
        src={imgsrc}
        className=" inset-0 w-full h-full absolute top-0 right-0 left-0 rounded-xl z-10 opacity-100 object-cover transition-opacity duration-500"
      />
      <div className='bg-white blur-effect-theme z-[100] absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 w-8 h-8 md:w-5 md:h-5 rounded-full flex items-center justify-center'>
        <PlayIcon className='icon-style text-slate-800 md:w-3 md:h-3'/>
      </div>
      <video
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      className='absolute top-0 left-0 right-0 z-0 flex w-full h-full opacity-0 group-hover:opacity-100 group-hover:z-20 object-cover'>
         <source type='video/mp4' src={clip}/>
      </video>
    </div>
  )
}

export default Clips;
