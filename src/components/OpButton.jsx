import React from 'react'

const OpButton = ({children }) => {
  return (
    <div className={`text-xl text-center font-bold font-inter text-gray-100 bg-gray-700 cursor-pointer py-2 px-3 w-[70px] rounded-[5px] hover:opacity-80 transition duration-300 ease-in`}>
        {children}
    </div>
  )
}

export default OpButton