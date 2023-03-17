import React,{useState,useEffect} from 'react'
import {getCategories} from '../services'
import Link from 'next/link'

const Categories = () => {
  const [categories,setCategories] = useState([]);
  
  useEffect(() => {
      getCategories().then((newCategories) => 
      setCategories(newCategories)
    );
  },[])

  return (
    <div className='bg-white p-8 rounded-lg'>
      <h3 className='border-b mb-4 p-2 font-semibold text-xl'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link href={`/post/${category.slug}`} key={category.slug}>
          <p className='block mb-2 text-gray-600 cursor-pointer hover:text-gray-800 font-mono pl-8 text-xl capitalize'>
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default Categories