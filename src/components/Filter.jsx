import React, {useEffect} from 'react'

const Filter = ({setFiltered, activeGenre, setActiveGenre, popular }) => {
    useEffect(() => {
        if(activeGenre === 0) {
            setFiltered(popular)
            return
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
    }, [activeGenre], popular)

  return (
    <div className='ml-[250px] mb-4'>
        <button onClick={() => setActiveGenre(0)} className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>All</button>
        <button onClick={() => setActiveGenre(35)} className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>Comedy</button>
        <button onClick={() => setActiveGenre(28)} className='mr-[2rem] px-[.4rem] py-[.2rem] text-[#4162a8] rounded-[1rem] border border-[#4162a8] cursor-pointer min-w-[5rem] hover:bg-[#4162a8] hover:text-white'>Action</button>
    </div>
  )
}

export default Filter