import React from 'react'
import Image from 'next/image'

const IconComponent = ({img , title , description}) => {
  return (
    <div className='h-[200px] w-auto flex flex-col justify-center items-center gap-6'>
        <Image src={img} />
        <h3 className='text-black'>{title}</h3>
        <h4 className='text-gray-400 '>{description}</h4>
    </div>
  )
}

export default IconComponent