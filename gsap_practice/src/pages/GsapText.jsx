import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import GaspTo from './gaspto'

function GsapText() {
    useGSAP(() => {
        gsap.to('#text', {
            ease:'power1.inOut',
            opacity: 1,
            y: 10
        }),
        gsap.to('.para', {
            opacity: 0.5,
            y:20
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.5
        })
    }, [])
  return (

    <div>
        <h1 id="text" className='opacity-0 translate-y-10'>
            Gasptexttt
        </h1>
        <p className='mt-15 text-gray-500 para'>
            we can use same {" "}
            <code>gaspto()</code> {" "}
            <code>GsapFrom()</code>{" "}
            <code>Scrolltrigger()</code>{" "}
            <code>gsap.timeline()</code>{" "}
            animate text
        </p>
    </div>
 )

}

export default GsapText;
