import React, {useEffect} from 'react'

const Filter = () => {
  return (
    <div className='ml-[250px] mb-4'>
        <button className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>All</button>
        <button className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>Comedy</button>
        <button className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>Action</button>
    </div>
  )
}

export default Filter