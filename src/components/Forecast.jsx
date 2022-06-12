import React from 'react'

function Forecast({date,icon,iconText,temperature}) {
  return (
    <div className='mt-4'>
        <p>{date}</p>
        <img className='m-auto w-1/2 md:w-1/5' src={icon} alt={iconText} />
        <p>{temperature} {'\u00b0'}C</p>
    </div>
  )
}

export default Forecast