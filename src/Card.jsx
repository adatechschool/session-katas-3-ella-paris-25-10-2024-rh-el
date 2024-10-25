import { useState } from 'react'
import './output.css'

function Card({data}) {   
  return (
    <>
    <div className='bg-slate-100 border-2 rounded-md p-4 border-white flex flex-col justify-center items-center w-64 '>
        <h2 className=' text-xl'>{data.name}</h2>
        <img src={data.img} alt="a pokemon image"/>
        <div className='text-sm flex justify-center flex-col items-center'>
            <p className=''>height: {data.height}</p>
            <p className=''>weight: {data.weight} kg</p>
            <p>type: {data.type}</p>
        </div>

    </div>
    </>
  )
}

export default Card
