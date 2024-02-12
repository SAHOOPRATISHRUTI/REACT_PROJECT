import React, { useState } from 'react';

export default function TodoList() {
  const[activity,setActivity]=useState('');
  const[listdata,setListdata]=useState([]);
function addActivity()
{
  setListdata((listdata)=>{
    const updatelist=[...listdata,activity]
    console.log(updatelist);
    setActivity('');
    return updatelist
  })

}

function removeActivity(i)
{
  const removedData=listdata.filter((_elem,id)=>{
    return i!=id;
  })
  setListdata(removedData)
}
function removeAll()
{
  setListdata([]);
}



  return (
    <>
    <div className='container'>
      <div className='heading'>TO-DO-LIST</div>
      <input type="text" placeholder='Add Value To Do' value={activity}
       onChange={(e)=>{setActivity(e.target.value)}} />
       <button onClick={addActivity}>Add</button>
        {listdata!=[] && listdata.map((data,i)=>{
          return(
            <>
            <p key={i}>
              <div>{data}</div>
              <div><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
            </p>
            </>
          )
        })}

    </div>

    {listdata.length >= 1 && <button onClick={removeAll}>REMOVE ALL</button>}
    
      
    </>
  );
}
