import React from 'react'
import {Bookmark} from 'lucide-react'
import {MessageCircle} from 'lucide-react'
import {Phone} from 'lucide-react'
import {Heart} from 'lucide-react'
const Card = () => {
  return (
    <div className='card'>
        <div className="top">
          <img id='lo' src="./public/LOGO.jpg" alt="logo" />
           
           <button>Save <Bookmark size={12}/></button>
          
        </div>

        <div className="mid"> 
             <img src="./public/image.png" alt="profilePic" />
             <h3>Aditya Nevhal</h3>
             <h1>Software Developer</h1>
             <p>Frontend Developer with experties in React and JavaScript</p>
        </div>
        
        <div className="bottom"> 
         <button>Message  <MessageCircle size={12}/></button>
         <button><Phone size={12}/></button>
         <button><Heart size={12}/></button>
        </div>
      </div>
  )
}

export default Card