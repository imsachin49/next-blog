import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { PostCard,PostWidgets,Categories } from '../components'
import { getPosts } from '../services'
// import {FeaturedPosts} from '../sections'

export default function Home({posts}) {
  return (
    <div className='container mx-auto px-10 mb-8 text-'>

      <Head>
        <title>Blog Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedPosts /> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>

      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          <PostWidgets />
          <Categories />
        </div>
      </div>
      
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts=(await getPosts() ) || [];
  return {
    props: { posts }
  }
}
