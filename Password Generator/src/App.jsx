import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [char,setChar]=useState(false);
  const [passsword,setPassword]=useState("")

  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed)str+="0123456789";
    if(char)str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    for(let i=1;i<=length;i++){
      let cha=Math.floor(Math.random()*str.length+1);

      pass+=str.charAt(cha);
    }
      setPassword(pass);
  },[length,numberAllowed,char,setPassword])

 const coppypasswordtoclipboard=useCallback(()=>{
  passwordRef.current?.select(); //user ko achhaa lage aaur select wala view ho blue blue jaisa..
  passwordRef.current?.setSelectionRange(0,5);//ek range ke element ko select aaur copy krne ke liye use hota hai
  window.navigator.clipboard.writeText(passsword); //used for copy the password
 },[passsword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,char,passwordGenerator]) //jb bhee page load hota hai toh yeh 
  //first time use hota hai..agr dependencies main koi bhee change hua toh fir se yeh re run hota hai


  return (
    <>
      <div className="w-13 max-W-md mx-auto shadow-md rounded-lg px-4 py-2 text-cyan-400 bg-gray-700">
        <h1 className="text-4xl align-center text-black my-3 mx-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={passsword}
          className='outline-none w-full py-1 px-3' 
          placeholder="Password"
          readOnly
          ref={passwordRef}
          >
          </input>
          <button
          onClick={coppypasswordtoclipboard} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
          <input 
            type='range'
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input className='ml-3'
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>(!prev))
            }}
          /><label className=''>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input className='ml-3'
            type='checkbox'
            defaultChecked={char}
            onChange={()=>{
              setNumberAllowed((prev)=>(!prev))
            }}
          /><label className=''>Character</label>
          </div>
          </div>
        </div>

     
    </>
  )
}

export default App
