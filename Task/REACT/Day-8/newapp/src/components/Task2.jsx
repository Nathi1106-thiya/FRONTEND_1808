import React from 'react'

const Task2 = () => {

     const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
   <>
   <h1 className='bg-amber-200 p-3'>TASK2</h1>
   <h2>Student Name:{student.name}</h2>
   <h2>Student Age:{student.age}</h2>
   <h2>Student Department:{student.department}</h2>
   <h2>Student City:{student.city}</h2>
   
   </>
  )
}

export default Task2
