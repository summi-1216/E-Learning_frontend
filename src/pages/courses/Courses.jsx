import CourseCard from '@/components/courseCard/CourseCard';
import { CourseData } from '@/context/courseContext'
import React from 'react'

const Courses = () => {

    const {courses} = CourseData()
console.log(courses);


  return (
    // <div className=' justify-center '>
    //     <h2>Available Courses</h2>
    <div className='p-10 text-center min-h-10 mb-6 '>
        {/* <div className='max-w-5xl m-auto'> */}
          <h2 className='block w-full font-semibold text-4xl py-2 text-transparent bg-clip-text leading-12  bg-[#7a1d8f] '>Available Courses</h2>

        <div className='flex flex-row flex-wrap justify-center items-center py-20  '>
            {
                courses && courses.length>0 ? courses.map((e)=>(
                    <CourseCard key={e._id} course={e}/>
                )) : <p className='text-2xl font-semibold text-[#9625af] mb-5' >No Courses Yet!</p>
            }
        </div>
    </div>
  )
}

export default Courses