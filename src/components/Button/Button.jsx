import React from 'react'

function Button({
    label
}) {
  return (
    <>
        <button className='mx-20 px-4 py-2 text-white hover:bg-white hover:text-black hover:cursor-pointer'>{label}</button>
    </>
  )
}

export default Button