import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function GsapFrom() {
    useGSAP(() => {
        gsap.to('.s-b', {
            y:300,
            rotation: 350,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'cir.inOut',
                from: 'center'
            }

        })
    }, [])

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
        <div className='mt-10 '>
            <div id="stag" className='flex gap-5'>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>
            <div id="blue-box" className='s-b w-20 h-20 bg-blue-500 rounded-lg'></div>

            </div>
          
        </div>
    </main>
  )
}

export default GsapFrom;
