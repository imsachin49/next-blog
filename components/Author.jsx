import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='rounded-lg bg-slate-100 p-10 m-10 mb-4 relative'>
      <div className='flex items-center align-middle justify-center'>
        {/* <Image 
          alt={author.name}
          src={author.photo.url}
          height='80px'
          width='80px'
          className='rounded-full mr-4 absolute top-0 align-middle justify-center -mt-8 border-4 border-slate-100'
        />  */}
        <img
          alt={author.name}
          src={author.photo.url}
          height={80}
          width={80}
          className='rounded-full mr-4 absolute top-0 align-middle justify-center -mt-8 border-4 border-slate-100'
        />
      </div>
      <div className='text-center'>
        <h3 className='text-3xl font-extrabold font-mono mt-2'>{author.name}</h3>
        <p className='text-grey font-mono text-gray-700 text-lg'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author