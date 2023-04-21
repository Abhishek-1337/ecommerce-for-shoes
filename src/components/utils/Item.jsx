import React from 'react'
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const Item = ({id, title, text, rating, img, btn, price, color, shadow}) => {
  return (
    <>
      <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center px-5 py-4 rounded-xl transition-all ease-in-out duration-700 w-full hover:scale-105`}>
          <div className='grid items-center justify-items-center'>
            <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
            <p className='text-slate-200 text-base md:text-sm font-normal filter drop-shadow'>{text}</p>
            <div className='flex items-center justify-between w-28 my-2'>
              <div className='bg-white/80 rounded px-1 blur-effect-theme'><h1 className='text-black text-sm font-medium '>${price}</h1></div>
              <div className='flex items-center gap-1'><StarIcon className='icon-style w-5 h-5 md:h-4 md:w-4'/><h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
            </div>
            <div className='flex items-center gap-3'>
              <button type='button' className='button-theme bg-white/90 blur-effect-theme shadow shadow-sky-200 p-0.5'>
                <ShoppingBagIcon className='icon-style text-slate-800 text-sm'/>
              </button>
              <button type='button'
              className='button-theme bg-white/90 blur-effect-theme shadow shadow-sky-200 px-2 py-1'
              >{btn}</button>
            </div>
          </div>
          <div>
            <img
            src={img}
            alt='img/'
            className='w-60 transitions-theme hover:-rotate-12 h-30'
            />
          </div>
      </div>
    </>
  )
}

export default Item
