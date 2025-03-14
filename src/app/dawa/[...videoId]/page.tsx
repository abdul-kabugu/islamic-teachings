import { Header } from '@/components/home/navbar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { darasaMpya } from '@/constants'
import React from 'react'
import Image from 'next/image'


export default function page() {
  return (
    <div className='h-full w-full'>
   <Header  />
<div className='w-full xl:flex xl:space-x-2.5 xl:justify-between  xl:p-2'>
   <div className='   aspect-video w-full xl:w-[75%]'>
                <iframe
                  src={"https://www.youtube.com/embed/5J7Z1hvrR8w?si=yXiwb6IjPNdET2qN"}
                  className="size-full rounded-2xl border"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                 <div className='p-2.5'>
                     <h3 className='text-xl font-semibold'>THIS IS THE VIDEO TITLE</h3>
                 </div>
                </div>
                <div className='hidden xl:flex w-[22%]  h-full overflow-hidden flex-col space-y-4 p-3.5 max-h-screen'>
                   <div className='my-2.5'>
                     <h3 className='font-semibold'>Related videos</h3>
                   </div>
                  {darasaMpya.map((item, i) => (
                     <div key={i}>  
                     <Image  src={item.image} alt='cover' width={100} height={100} className='w-full h-[90%] object-cover rounded-xl' />
                      <p className='truncate text-ellipsis font-semibold'>{item.title}</p>
                     </div>
                  ))}
                </div>
    </div>
  
    </div>
  )
}
