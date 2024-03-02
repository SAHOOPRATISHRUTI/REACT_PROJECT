import React,{useState} from 'react';
import 'F:/React_Prati/useEffect/src/index.css';


const DigitalClock = () => {
    let currTime=new Date().toTimeString();
    const [time, setTime] = useState(currTime);

    const timeChanged=()=>{
        currTime=new Date().toTimeString();
        setTime(currTime)
    }

    setInterval((timeChanged),1000)
  return (
    <>
        <div>
            <h1 className='heading'>⏲  Digital Clock ⏲ </h1>
            <h1 className='content'>{time}</h1>
            
            <h2 className='footer'>💚  From Pratishruti Sahoo</h2>
        </div>
         
    </>
   
  );
}

export default DigitalClock;
