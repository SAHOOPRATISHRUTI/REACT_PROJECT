import { useState } from "react"
import './index.css'


function App() {
  const[weight,Setweight]=useState('')
  const[height,Setheight]=useState('')
  const[bmi,Setbmi]=useState('')
  const[message,Setmessage]=useState('');

  let calcBmi=(e)=>{
    e.preventDefault();
    if(weight===0 || height==0){
      alert("Please Enter a valid Weight and Height")
    }
    else{
     let bmi=(weight/(height*height)*703)
     Setbmi(bmi.toFixed(1))
    
  
  if (bmi < 25) {
    Setmessage('You are underweight')
  } else if (bmi >= 25 && bmi < 30) {
    Setmessage('You are a healthy weight')
  } else {
    Setmessage('You are overweight')
  }
    }
  }

  let reload=()=>{
    window.location.reload()
  }



  return (
    <>
    
    <div className="app">
      <div className="container">
      <h1 className="heading">BMI CALCULATOR</h1>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight(lbs)</label>
          <input type="text" 
          value={weight}
          placeholder="Enter Weight"
          onChange={(e)=>Setweight(e.target.value)}/>
        </div>

        <div>
          <label>Height(In)</label>
          <input type="text"
          value={height} 
          placeholder="Enter height"
          onChange={(e)=>Setheight(e.target.value)} />
        </div>

        <div>
          <button className="btn">Submit</button>
          <button className="btn btn-outline" onClick={reload}>Reload</button>
        </div>

        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
      </div>
    </div>
    
    <footer>
            <p>&#x3c; &#47; &#x3e; with ❤️ by
              <a href="https://github.com/SAHOOPRATISHRUTI"> Pratishruti Sahoo</a>
              <br />
              <a href= "https://github.com/SAHOOPRATISHRUTI/REACT_PROJECT"target="_blank">#ReactProjectByPrati
              </a>
            </p>
          </footer>
    
    </>
  )
}

export default App
