import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor]=useState("cyan");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className=" absolute flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white justify-center gap-3 px-2 py-2 rounded-xl"> //yeh wala neche wale bar ke loye hai
          <button onClick={()=>{setColor("red")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>{setColor("green")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=>{setColor("olive")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={()=>{setColor("pink")}} className="outline-none rounded-xl px-4 py-1 text-black" style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>{setColor("lavender")}} className="outline-none rounded-xl px-4 py-1 text-black" style={{backgroundColor:"lavender"}}>lavender</button>
          <button onClick={()=>{setColor("white")}} className="outline-10 outline-black rounded-xl px-4 py-1 text-black" style={{backgroundColor:"white"}}>white</button>
          <button onClick={()=>{setColor("black")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>{setColor("purple")}} className="outline-none rounded-xl px-4 py-1 text-white" style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>{setColor("yellow")}} className="outline-none rounded-xl px-4 py-1 text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("gold")}} className="outline-none rounded-xl px-4 py-1 text-black" style={{backgroundColor:"gold"}}>Gold</button>

          
        </div>
        </div>
      </div>
    </>
  )
}

export default App
