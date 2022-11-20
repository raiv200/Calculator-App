import React from 'react'

const NumButton = ({children }) => {
  return (
    <div className={`flex items-center justify-center text-4xl text-center font-bold font-spacemono rounded-lg text-gray-50 hover:text-gray-100 hover:bg-gray-400/30 cursor-pointer py-2 w-full h-full  hover:opacity-80 transition duration-300 ease-in`}>
        {children}
    </div>
  )
}

export default NumButton