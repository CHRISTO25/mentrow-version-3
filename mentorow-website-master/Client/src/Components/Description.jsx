import React from 'react'
import Course_Details from "./CourseDetails";


const Description=({index})=> {
  
  return (
    <div className='flex justify-center text-sm text-center text-white bg-black px-4 pb-10 md:pb-20'>
      <div className='px-4 w-full md:w-1/2'>
        <p>{Course_Details[index].details}</p>
    </div>
    </div>
    
  )
}

export default Description;