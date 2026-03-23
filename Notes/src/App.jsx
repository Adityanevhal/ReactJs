import React, { useState } from 'react'
import image from './assets/image.png'
import { X } from 'lucide-react';
const App = () => {
  
 const [title, setTitle] = useState("")
 const [details, setDetails] = useState("")



const [task, setTask] = useState([])

 const handleSubmit = (e) =>{
  e.preventDefault()
  const copyTask = [...task];
  copyTask.push({title, details})
  setTask(copyTask)
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
          
          <button type="submit" className='px-5 py-2 active:bg-amber-700 active:scale-98  font-medium w-full bg-amber-500 outline-none text-black rounded'
           > Add Note</button>
        </div>

      </form>

      <div className=' lg:w-1/2 p-10 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-full'>
        
        {task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40  py-9 px-3 rounded-xl bg-[url(./assets/image.png)]
             bg-cover bg-center flex flex-col items-start justify-start'>
              <h2 className='bg-red-700 text-xl text-white absolute top-5 right-5 rounded-full'><X /></h2>
              <h1 className='text-black leading-tight text-xl font-bold'>{elem.title}</h1>
              <p className='mt-4 leading-tight font-medium text-gray-800'>{elem.details}</p>
            </div>
        })}
        
        
       </div>
      </div>
    </div>
  )
}

export default App