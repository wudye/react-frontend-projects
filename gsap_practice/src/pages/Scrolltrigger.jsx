import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

function Scrolltrigger() {
    const scrollRef = useRef();
    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach((box) => {
            gsap.to(box, {
                x: 200,
                rotation: 360,
                borderRadius: '100%',
                scale:1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true
                },
                ease: 'power1.inOut'
            })
        })

    }, {scope: scrollRef})
    return (
        <main>
            <h1>gaspto</h1>
            <p className='mt-5 text-gray-500'>
                thiis is my mymmmm
            </p>
            <p className='mt-5 text-gray-500'>
                öjk 
                random text

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            
            ddd

            </p>
            <p className='mt-5 text-gray-500'>
                <a href='https://www.google.com'
                target='_blank'
                rel='noreferrer noopenner nofollow'>
                    gaspto.to()
                </a>{" "}
                method.
            </p>
            <svg className='animate-bounce mt-5, xmlns="localhost"
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="blue" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-arrow-down">
            '>
                <path d="M12 19V5"></path>
                <path d="M5 12l7-7 7 7"></path>
            </svg>
            <div className='mt-20 w-full
            h-screen' ref={scrollRef}>
            <div id="scroll-pink" className='mb-10 w-20 h-20 bg-pink-500 rounded-lg'></div>
            <div id="scroll-orange" className='w-20 h-20 bg-orange-500 rounded-lg'></div>
            </div>
        </main>
      )
}

export default Scrolltrigger
