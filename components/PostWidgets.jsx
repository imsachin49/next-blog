import React, { useEffect,useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getPosts,getRecentPosts,getSimilarPosts } from '../services';

const postWidgets = ({categories,slug}) => {
  const [realtedPost,setRelatedPost] = useState([]);
  
  useEffect(() => {
      if(slug){
          getSimilarPosts(categories,slug).then((res)=>{
              setRelatedPost(res);
          });
      }else{
          getRecentPosts().then((res)=>{
              setRelatedPost(res);
          });
      }
  },[slug])

  return (
    <div className='bg-white p-8 rounded-lg mb-6'>
      <h3 className='border-b mb-8 font-semibold text-xl'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {
        realtedPost.map((post)=>{
            return(<div className='flex items-center w-full border m-1 rounded-lg border-gray-100'>
              <div className='w-16 flex-none m-2'>
                <img 
                  alt={post.title}
                  height='60px'
                  width='60px'
                  className='rounded-full align-middle border'
                  src={post.featuredImage.url} 
                />
              </div>
              <div className='flex-none'>
                <p className='text-sm font-light font-sans text-gray-500'>
                  {moment(post.createdAt).format('MMM DD,YYYY')}
                </p>
                <p className='text-lg font-extralight font-mono from-neutral-700'>
                  <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </p>
              </div>
          </div>)
        })
      }
    </div>
  )
}

export default postWidgets
