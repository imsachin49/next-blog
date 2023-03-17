import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../services'

const Header = () => {
  const [categories,setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  },[])

  return (
    <div className='conatiner mx-auto px-8 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
        <Link href='/'>
          <span className='cursor-pointer font-bold text-4xl text-white font-mono'>
              Blog-Spot
          </span>
        </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-mono text-md font-semibold cursor-pointer">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
