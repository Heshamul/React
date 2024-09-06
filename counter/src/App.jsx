import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setcounter]=useState(10); //this is known as state..yahan pr jo bhee values
    //di jaati hain pehle wale main changes aati hai
    //aaur dusare wale ke saath inc aaur decrement kiya jaata hai.
  const addvalue=()=>{ 
      console.log("value added",counter);
      setcounter(counter+1);
  }
  const decvalue=()=>{
    setcounter(counter-1);
  }
  return (
    <>
     <h1>hey how are you</h1>
     <h2>Count Numbers = {counter} </h2>

     <button onClick={addvalue}>Inc Number {counter}</button>
     <br></br>
     <button onClick={decvalue}>Dec Number {counter}</button>
    </>
  )
}

export default App
