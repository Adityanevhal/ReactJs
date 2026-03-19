import React, { useState } from 'react'
import image from './assets/image.png'
const App = () => {
  
 const [title, setTitle] = useState("")
 const [details, setDetails] = useState("")

const [task, setTask] = useState([])

 const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(title)
  console.log(details)
  setTitle("")
  setDetails("")
 }

  return ( 
    <div className=' h-screen  bg-black text-white lg:flex'>
      <form className="lg:w-1/2 flex items-start px-10 p-10 " onSubmit={handleSubmit}> 

        <div className='flex gap-4 w-1/2 flex-col items-start'>
        <h1 className='text-3xl font-bold'>Add New Note:</h1>

        {/* input for heading */}
        <input  type="text" 
         placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded' value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          />

         {/* input for details */}
         <textarea type="text"  placeholder='Write Details'
          className='px-5 w-full h-32 font-medium py-2 flex items-start flex-row border-2 outline-none rounded'
          value={details}
          onChange={(e)=>setDetails(e.target.value)}/>
          
          <button type="submit" className='px-5 py-2 font-medium w-full bg-amber-500 outline-none text-black rounded'
           > Add Note</button>
        </div>

      </form>
      <div className=' lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        <div className='h-52 w-42 rounded-2xl bg-white'></div>
        
       </div>
      </div>
    </div>
  )
}

export default App