import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
console.log("rdfg");
  },[])

  function updateCount(){
  setCount(count+1)
}

  return (
    <>
    <h1>Button clicked {count} times</h1>
    <button onClick={updateCount}>Count</button>
    
    </>
  )
}

export default App
