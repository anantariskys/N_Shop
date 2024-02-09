import React from 'react'

const CardLayout = ({children}) => {
  return (
    <div className='flex w-full gap-5 flex-wrap justify-center items-start '>{children }</div>
  )
}

export default CardLayout