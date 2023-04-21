import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <>
      <img 
        src={icon}
        className='w-8 h-8 sm:h-5 sm:w-5 hover:scale-110'
      />
    </>
  )
}

export default SocialLinks
