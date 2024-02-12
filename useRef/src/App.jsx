import { useRef, useState } from 'react'
import './App.css'

function App() {
 const refElement=useRef("");

 const[name,setName]=useState("Prabhu")

 function Reset()
 {
  setName("")
  refElement.current.focus()
  refElement.current.value="Nilu"
 }
 function handleInput()
 {
refElement.current.style.color="blue"


 }

  return (
    <>
 <h1>Learning Using UseRef </h1>
 <input ref={refElement} type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
 <button onClick={Reset} >Reset</button>
 <button onClick={handleInput}>handleInput</button>
 </>
  )
}

export default App
