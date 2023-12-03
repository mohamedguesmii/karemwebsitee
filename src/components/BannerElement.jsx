import React from 'react'

const BannerElement = ({title , option}) => {   
  return (
<div className='w-[200px] flex flex-col justify-center'>
        <h2 className='font-bold m-2'>{title}</h2>
    {option}

    </div>
  )
}

export default BannerElement