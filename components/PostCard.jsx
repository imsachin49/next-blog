import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const postCard = ({post}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 drop-shadow-2xl'>
      
      <div className='relative overflow-hidden shadow-mb pb-60 mb-4 pt-2 border-solid border-2  border-gray-100 rounded-lg '>
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-60 w-full object-contain max-h-fit pb-1 mb-1 shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      
      <h1 className='transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      
      <div className='flex  text-center items-center justify-middle mv-8 w-full lg:w-auto md:auto mr-8 mt-0 justify-center border-red-300'>
          <img alt={post.author.name} className='rounded-full align-middle mr-2 border' src={post.author.photo.url} height='30' width='30'/>
          <div className="font-medium text-gray-700 flex align-middle justify-center my-4 mr-7 space-x-20 sm:h-full">
            <p className='text-gray-700 text-sm font-semibold'>{post.author.name}</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
      </div>
      
      <p className="text-center text-md text-gray-700 font-normal px-1 lg:px-4 mb-4">
          {post.excerpt}
      </p>
      
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-md font-medium rounded-full text-white px-6 py-2 cursor-pointer">Continue Reading</span>
        </Link>
      </div>

    </div>
  )
}   

export default postCard
