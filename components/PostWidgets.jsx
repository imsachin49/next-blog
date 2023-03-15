import React, { useEffect,useState } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getPosts,getRecentPosts,getSimilarPosts } from '../services';

const postWidgets = ({categories,slug}) => {
  const [realtedPost,setRelatedPost] = React.useState([]);
  
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
    <div className='bg-white'>
      <div className=''>

      </div>
    </div>
  )
}

export default postWidgets
