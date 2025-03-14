import { Header } from '@/components/home/navbar'
import AnimatedShinyText from '@/components/ui/anumatedText'
import BlurFade from '@/components/ui/blur-fade'
import { darasaMpya } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import Footer from '@/components/home/footer'

 const Intro = ()  => {
    return(
        <BlurFade delay={0.2} className="relative z-50 w-full border-b   ">
              <div className=" my-7  py-7">
        <h1 className=" text-lg font-semibold tracking-tight md:text-2xl lg:text-3xl">
          See{' '}
          <AnimatedShinyText className="inline">
            <span>It in Action 🎬</span>
          </AnimatedShinyText>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Curated short videos (under 1 min) showcasing what’s possible.
        </p>
      </div>
        </BlurFade>   
    )
 }

 const Dawa = () =>  {
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {darasaMpya.map((item, i) => (
            <div key={i} className='pb-6 w-full   rounded-2xl contain-paint border hover:border-purple-400 hover:border-2 bg-purple-50'>  
             <div className='h-52'> 
               <Image src={item.image} width={400} height={400} alt='cover' className='w-full h-full object-cover rounded-t-2xl'  />
             </div>
             <div className='px-3.5 my-3.5 '>
               <h1 className='text-2xl font-semibold'>{item.title}</h1>
            </div>
             <div className='px-3.5 flex items-center  space-x-2 cursor-pointer text-purple-500'> 
               <p className='font-semibold'>Watch video</p>
               <MoveRight className='w-5 animate-ping' />
             </div>
            </div>
        ))}
      </div>
    )
 }
export default function page() {
  return (
    <div>
      
        <Header  />
       <div className='max-w-7xl mx-auto'>
         <Intro />
         <Dawa />
       </div>
       <Footer />
    </div>
  )
}
