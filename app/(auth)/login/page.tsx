import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {GithubIcon, Image} from 'lucide-react'
import google from "../../../public/google.svg"
const Login = () => {
  return (
  <div className='mt-24 rounded bg-black/50 py-10 md:mt-0 md:max-w-md md:px-14'> 
  <form >

<h1 className='text-3xl font-semibold'>Login</h1>
<div className=' space-y-3 mt-5'>
<Input type="email" placeholder="Email" name='email' className='bg-[#333] placeholder:text-xl w-full inline-block placeholder:text-white' />
<Button type='submit' className='text-white bg-[#e50914]  w-full' variant={'destructive'}>Login</Button>

</div>
  </form>
  <div className='text-sm mt-2 text-gray-400'>
    <h2 className='text-gray-400'>Create an Account Here! <span><Link className=' text-green-50' href={'/signup'}>Sign-Up now</Link></span></h2>
  </div>
  <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
<Button variant={'outline'} size='icon'>
  <GithubIcon className='w-4 h-4' />
</Button>
<Button variant={'outline'} size='icon'>

<Image className="w-6 h-6" src="https://shorturl.at/q71YD" alt='google-logo'/>

</Button>

  </div>
  </div>
  )
}

export default Login