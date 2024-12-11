import React from 'react'

function Button({text}) {
  return (
    <>
        <button className='border-2 p-2 mr-1 text-sm border-black w-auto h-8 flex justify-center items-center hover:bg-black hover:text-white transition duration-300 ease-in-out'>{text}</button>
    </>
  )
}

export default Button
