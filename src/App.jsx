import React from 'react'
import Card from './components/Card'
import User from './components/User'
const App = () => {

const name = ['Aditya', 'Arnav','Anushka','Anvit']

  return (
    <div className='parent'>
      {name.map(function(element){
        return  element 
      })}
        
    {/* {name} */}
    </div>
  )
}

export default App