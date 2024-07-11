import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {GithubIcon, Image} from 'lucide-react'
import google from "../../../public/google.svg"
const SignUp = () => {
  return (
  <div className='mt-24 rounded bg-black/50 py-10 md:mt-0 md:max-w-md md:px-14'> 
  <form >

<h1 className='text-3xl font-semibold'>SignUp</h1>
<div className=' space-y-3 mt-5'>
<Input type="email" placeholder="Email" name='email' className='bg-[#333] placeholder:text-xl w-full inline-block placeholder:text-white' />
<Button type='submit' className='text-white bg-[#e50914]  w-full' variant={'destructive'}>Sign up</Button>

</div>
  </form>
  <div className='text-sm mt-2 text-gray-400'>
    <h2 className='text-gray-400'>Alredy have Account? <span><Link className=' text-green-50' href={'/login'}>Login now</Link></span></h2>
  </div>
  <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
<Button variant={'outline'} size='icon'>
  <GithubIcon className='w-4 h-4' />
</Button>
<Button variant={'outline'} size='icon'>

<Image  className="w-6 h-6" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png"} alt='google-logo'/>

</Button>

  </div>
  </div>
  )
}

export default SignUp