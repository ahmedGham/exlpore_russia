import React from 'react'
import Course from '../course/Course'
import './courseList.css'

const CoursesList = ({courses}) => {  
  return (
    <div className='courses-list'>

      {
        courses?.map((course)=>{
          return (
            <Course key={course.id} course={course}/>
          )
        })
      }
    </div>
  )
}

export default CoursesList