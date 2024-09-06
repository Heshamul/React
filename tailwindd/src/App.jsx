import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 m-2 rounded-xl mb-4 '>Tailwind Test</h1>
      <Card username="Hezu" btntext="click me na"/>
      <Card username="sexy" />
    </>
  )
}

export default App
