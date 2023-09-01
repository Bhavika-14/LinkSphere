
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'




export default function Home() {
  
  return (
    <div className='flex align-center justify-center h-screen bg-black'>
    <div className='flex flex-col text-center align-center text-white flex-shrink md:my-32 md:mx-16  sm:my-32 sm:mx-16 mx-10 my-16 bg-gray-900 py-8 px-6'>
      <h2 className='text-center font-bold sm:text-4xl text-2xl mt-14'>Welcome</h2>
      <h2 className='font-bold sm:text-4xl text-2xl'>to</h2>
      <h1 className='font-bold sm:text-5xl text-2xl text-purple-700 sm:mx-2 mb-2 mx-auto mt-4'>LinkSphere</h1>
      <div className=' flex flex-col justify-center'>
        <div className='sm:mx-4 mx-auto my-4 '><Link href="/login"><button className='bg-purple-700 sm:px-28 py-2 px-10 rounded-lg' >Login </button></Link></div>
        <div className='sm:mx-4 mx-auto my-4 '><Link href="/signup"><button className='bg-purple-700 sm:px-28 py-2 px-10 rounded-lg'>Signup</button></Link></div>
      
      </div>
    </div>
    </div>
  )
}
