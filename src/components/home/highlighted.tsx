import { darasaMpya } from '@/constants'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnimatedShinyText from '../ui/anumatedText'

export default function Highlighted() {
  return (
    <div className='mt-6 w-full '>
         <div className=" mb-2.5">
        <h1 className=" text-lg font-semibold tracking-tight md:text-2xl lg:text-3xl">
          Discover{' '}
          <AnimatedShinyText className="inline">
            <span>the Essence of Faith –</span>
          </AnimatedShinyText>
        </h1>
        <p className="mt-2 text-muted-foreground">
        Stay Updated with the Latest Islamic Teachings and Community News
        </p>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
         {darasaMpya.map((item, i) => (
             <div key={i} className='pb-6 w-full   rounded-2xl contain-paint border hover:border-purple-400 hover:border-2 bg-purple-50'>  
              <div className='h-52'> 
                <Image src={item.image} width={400} height={400} alt='cover' className='w-full h-full object-cover rounded-t-2xl'  />
              </div>
              <div className='px-3.5 my-3.5 '>
                <h1 className='text-2xl font-semibold'>{item.title}</h1>
             </div>
              <Link href={"/dawa/1"} className='px-3.5 flex items-center  space-x-2 cursor-pointer text-purple-500'> 
                <p className='font-semibold'>Watch video</p>
                <MoveRight className='w-5 animate-ping' />
              </Link>
             </div>
         ))}
       </div>

        <Link href={`/dawa`} className='my-7 flex w-full flex-col items-center justify-center'>
           <div className='border-4 border-purple-500 px-3 py-1.5 rounded-2xl flex items-center gap-2 cursor-pointer'>
            <p className='font-semibold'>See more</p>
             <MoveRight  className='w-5 h-4'/>
             
           </div>
        </Link>
    </div>
  )
}
