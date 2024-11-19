import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const GaspTo = () => {
    useGSAP(()=> {
        gsap.to('#blue-box', {
            x:200,
            repeat: -1,
            yoyo: true,
            rotation: 350,
            duration: 1,
            ease: 'elastic'
        })
    },[])
  return (
    <main>
        <h1>gaspto</h1>
        <p className='mt-5 text-gray-500'>
            thiis is my mymmmm
        </p>
        <p className='mt-5 text-gray-500'>
            öjk 
            random text
        </p>
        <p className='mt-5 text-gray-500'>
            <a href='https://www.google.com'
            target='_blank'
            rel='noreferrer noopenner nofollow'>
                gaspto.to()
            </a>{" "}
            method.
        </p>
        <div className='mt-20'>
            <div id="blue-box" className='w-20 h-20 bg-blue-500 rounded-lg'></div>
        </div>
    </main>
  )
}

export default GaspTo
