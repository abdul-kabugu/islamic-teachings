"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { lastest } from '@/constants'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
export default function Hero() {
  return (
    <div  className='my-3.5'>
      <h2 className='text-xl font-semibold'>New & Noteworthy</h2>
      <div className='my-2'>
      <Carousel
       opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      >
  <CarouselContent>
{lastest.map((item, i) => (
  <CarouselItem key={i} className=''>
    <div className=' w-full h-[70vh]'>
    <Image src={"https://framerusercontent.com/images/kKenvPLouuCkmUCtfJAbnvA6wg.png"}  layout='full'  alt='cover' width={1000} height={1000} className='w-full h-full object-cover rounded-xl' />
    </div>
  </CarouselItem>
))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      </div>


    </div>
  )
}
