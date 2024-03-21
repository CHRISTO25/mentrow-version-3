import React from 'react'
import "./framer.css"

const Framer = ({children}) => {
  return (
    <body className='bg-white'>
      
    <div className={" frame w-full h-full xl:pl-[128px]"}>
          {children}
    </div>
    </body>
  )
}

export default Framer
