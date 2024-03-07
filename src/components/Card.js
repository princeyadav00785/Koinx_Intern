import React from 'react'
import './Card.css'
import i1 from "../assests/i1.jpeg"
import Trending from './Trending'

export function Card() {
  return (
    <div className='crd h-full w-1/3  flex justify-center bg-white flex-col items-center '>
     <div className='bg-blue-700 h-[500px] w-[350px] rounded-md flex flex-col items-center'>
        <div className='p-6'>
           <div className='text-white font-extrabold text-xl ml-12'>
             <h1>
                Get Started with KoinX<br/>
                <text className='ml-16'>
                for FREE
                </text>
                
             </h1>
           </div>
           <p className='text-white text-sm leading-6 mt-5'>
                With our range of features that you can equip for freee , KoinX allows you to be more educated and aware of your tax reports.
             </p>
             <img className="mt-4"src={i1}/>
           <button className="mt-8 ml-16 inline-flex cursor-pointer items-center text-sm font-semibold text-blue bg-white p-4 rounded">
            Get Started for FREE &rarr;
           </button>
        </div>
     </div>
     <Trending/>
    </div>
    
  )
}