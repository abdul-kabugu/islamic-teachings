

"use client"

import { Header } from '@/components/home/navbar'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { supabase } from '@/lib/sbClient'
import { toast } from 'sonner'
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  thumbnail: z.string().min(2, {
    message: "Thumbnail must be at least 2 characters.",
  }),
  link: z.string().min(2, {
    message: "link must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  subject: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  scholar: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
})

const formSchema2 = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    thumbnail: z.string().min(2, {
      message: "Thumbnail must be at least 2 characters.",
    }),
    link: z.string().min(2, {
      message: "link must be at least 2 characters.",
    }),
    scholar: z.string().min(2, {
      message: "Category must be at least 2 characters.",
    }),
    category: z.string().min(2, {
      message: "Category must be at least 2 characters.",
    }),
  })
 
 const categories = [
    "Sharia", "Fiqh", "Hadeeth"
 ]
const CreateForms = () => {
    const [loading, setloading] = useState(false)

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      thumbnail : "",
      link : "",
      description : "",
      subject : "",
      scholar : "",
      category : ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   // console.log(values)
    try {
        setloading(true)
     await supabase.from("azad_dawa")
        .insert(values)
        //.select()
        toast("New Post added.")
        setloading(false)
    } catch (error) {
        console.log(error)
        toast("Something went wrong check your connection")
        setloading(false)
    }
  }
     return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
                <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail</FormLabel>
                <FormControl>
                  <Input placeholder="cover link" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
             <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video link</FormLabel>
                <FormControl>
                  <Input placeholder="yoyube link..." {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
                <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="desc...." {...field} className='h-28 resize-none' />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
                <FormField
            control={form.control}
            name="scholar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Scholar name</FormLabel>
                <FormControl>
                  <Input placeholder="Abdallah" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
                <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
                <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='w-full'>
                {categories.map((item,i) => (
                    <SelectItem key={i} value={item} className='w-full'>{item}</SelectItem>
                ))}
                </SelectContent>
              </Select>
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
           
            )}
          />
          <Button type="submit" size={"lg"} className='my-4 w-full cursor-pointer'>{loading ? "LOADING..." : "submit"}</Button>
        </form>
      </Form>
     )
}

const CarouselForms = () => {
    const [loading, setloading] = useState(false)
    // 1. Define your form.
 const form = useForm<z.infer<typeof formSchema2>>({
   resolver: zodResolver(formSchema2),
   defaultValues: {
      title: "",
      thumbnail : "",
      link : "",
      scholar : "",
      category : ""
   },
 })

 // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema2>) {
   try {

    setloading(true)
    await supabase.from("azad_announcements")
    .insert(values)
    setloading(false)
    toast("New Post added.")
} catch (error) {
    console.log(error)
    setloading(false)
    toast("Something went wrong check your connection")
}
   console.log(values)
 }
    return(
       <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         <FormField
           control={form.control}
           name="title"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Title</FormLabel>
               <FormControl>
                 <Input placeholder="title" {...field} />
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
          
           )}
         />
               <FormField
           control={form.control}
           name="thumbnail"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Thumbnail</FormLabel>
               <FormControl>
                 <Input placeholder="cover link" {...field} />
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
          
           )}
         />
            <FormField
           control={form.control}
           name="link"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Video link</FormLabel>
               <FormControl>
                 <Input placeholder="yoyube link..." {...field} />
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
          
           )}
         />
   
               <FormField
           control={form.control}
           name="scholar"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Scholar name</FormLabel>
               <FormControl>
                 <Input placeholder="Abdallah" {...field} />
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
          
           )}
         />
      
               <FormField
           control={form.control}
           name="category"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Category</FormLabel>
               <FormControl>
               <Select onValueChange={field.onChange} defaultValue={field.value} >
               <FormControl>
                 <SelectTrigger className='w-full'>
                   <SelectValue placeholder="Select a Category" />
                 </SelectTrigger>
               </FormControl>
               <SelectContent className='w-full'>
               {categories.map((item,i) => (
                   <SelectItem key={i} value={item} className='w-full'>{item}</SelectItem>
               ))}
               </SelectContent>
             </Select>
               </FormControl>
               <FormDescription>
                 This is your public display name.
               </FormDescription>
               <FormMessage />
             </FormItem>
          
           )}
         />
         <Button type="submit" size={"lg"} className='my-4 w-full cursor-pointer'>{loading ? "Loading..." : "New announcement"}</Button>
       </form>
     </Form>
    )
}

export default function Page() {
    const [isAdmin, setisAdmin] = useState<boolean>(false)
    const [demoSecretCode, setdemoSecretCode] = useState<string>()

     const addAdmin = () => {
         if(demoSecretCode && demoSecretCode === "ABDUL-KABUGU"){
            setisAdmin(true)
         }else {
            toast("INVALID CREDENTIALS")
         }
     }
    if(!isAdmin) {
     return(
        <div className='w-full h-screen flex flex-col items-center justify-center '>
           <h1 className='text-3xl font-bold my-6'>Only admin</h1>
           <div className='flex flex-col w-2xl border p-5 rounded-xl'>
            <h2 className='font-semibold text-center my-3.5'>Enter you access code</h2>
             <Input  className='h-12 w-full' value={demoSecretCode} onChange={(e) => setdemoSecretCode(e.target.value)} />
              <Button onClick={() => addAdmin()} size={"lg"}  className='my-4 cursor-pointer'>Submit</Button>
           </div>
        </div>
     )
    }
  return (
    <div>
        <Header  />
        <div className='max-w-3xl mx-auto border min-h-screen p-5'>
        <Tabs defaultValue="video" className="w-full">
  <TabsList>
    <TabsTrigger value="video" className='cursor-pointer'>New Content</TabsTrigger>
    <TabsTrigger value="password">New Carousel</TabsTrigger>
  </TabsList>
  <TabsContent value="video"><CreateForms /></TabsContent>
  <TabsContent value="password"><CarouselForms /></TabsContent>
</Tabs>

      </div>
    </div>
  )
}
