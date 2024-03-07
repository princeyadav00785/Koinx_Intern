import React from 'react'
import CircularChart from './CircularChart'
const content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus. metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus.metus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacusmetus nec efficitur feugiat, nisl elit fermentum velit, vel aliquet purus dui nec erat. Nullam non arcu ac justo venenatis volutpat. Integer congue, ex ut tristique commodo, lacus'

function Tokenomics() {
  return (
    <div className='bg-white rounded-md p-8 mt-4 mb-4 shadow-md'>
        <h1 className='text-3xl font-extrabold mb-8'>Tokenomics</h1>
        <h1 className='text-2xl font-extrabold mb-8'>Initial Distribution</h1>
        <div className='flex mb-8'>
            <div className='w-1/3'> Chart</div>
           <div className='flex flex-col'>
           <div className='flex'>
                <div className='w-[20px] h-[20px] bg-blue-600 rounded-full mr-3'></div>
                <h1>CrowdSale Investors: 80%</h1>
            </div>
            <div className='flex'>
            <div className='w-[20px] h-[20px] bg-yellow-400 rounded-full mr-3'></div>
                <h1>Foundation: 20%</h1>
            </div>
           </div>
        </div>
    {content}

    </div>
  )
}

export default Tokenomics