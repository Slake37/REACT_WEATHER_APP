import React from 'react'

function Search({handleSubmit,text, handleChange}) {
  return (
    <div className='bg-blue-600 h-screen flex flex-col align-middle justify-center'>
        <h1 className='text-center text-4xl mt-20 text-white font-bold '>Weather App</h1>
        <form onSubmit={handleSubmit} className='m-auto bg-transparent flex flex-col w-full p-5 md:w-1/2 text-white'>
            <input className='bg-transparent placeholder-white outline-0 border-b-[1px] ' onChange={handleChange} type='text' value={text} id="" placeholder='Search location' />
            <input className='bg-green-600 mt-3 rounded-md md:w-1/2 md:self-center' type="submit" onClick={handleSubmit} value="Search"  />
        </form>
    </div>
  )
}

export default Search