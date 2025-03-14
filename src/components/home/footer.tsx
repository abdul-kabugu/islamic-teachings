import { contacts, socilMedia } from '@/constants'
import React from 'react'

export default function Footer() {
  return (
    <div className='border-t pt-10 px-6 mt-7 pb-7 flex justify-between'>
      <div>
         <h3 className='font-bold'>HADITHI MEDIA</h3>
      </div>
       <div>
         <h2 className='font-bold mb-4'>Socials</h2>
          <div className='flex flex-col gap-2.5'>
            {socilMedia.map((item,i) => (
                 <div key={i} className='flex items-center space-x-1'> 
                 <div className='w-8 h-8 p-1.5 rounded-full flex items-center justify-center bg-purple-500'>
                 <item.icon className='text-white' />
                 </div>
                 <p>{item.name}</p>
                 </div>
            ))}
          </div>
       </div>
       <div>
         <h2 className='font-bold mb-4 '>Contacts</h2>
          <div  className='flex flex-col gap-2.5'>
            {contacts.map((item,i) => (
                 <div key={i} className='flex items-center space-x-1'> 
                 <div className='w-8 h-8 p-1.5 rounded-full flex items-center justify-center bg-purple-500'>
                 <item.icon className='text-white'/>
                 </div>
                 <p>{item.name}</p>
                 </div>
            ))}
          </div>
       </div>
    </div>
  )
}
