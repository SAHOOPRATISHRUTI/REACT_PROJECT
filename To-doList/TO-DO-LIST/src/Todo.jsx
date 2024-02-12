import { useState } from "react";

function Todo(){
    const[activity,setActivity]=useState('')
    const[listdata,setListdata]=useState([])
    function addActivity()
    {
        setListdata((lisidata)=>{
            const updatedList=[...lisidata,activity]
            console.log(updatedList);
            setActivity('');
            return updatedList;
        })
    }
    function removeActivity(i){
        const updatedListData=listdata.filter((_elem,id)=>{
            return i!=id;

        })
        setListdata(updatedListData)
    }
    function removeAll(){
        setListdata([])
    }
    return(
        <>
        <div className="container">
            <div className="heading">TODOLIST</div>
            <input type="text"  placeholder="Add to list" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add</button>

            {listdata!=[] && listdata.map((data,i)=>{
                return(
                    <>
                    <p key={i}>
                        <div>{data}</div>
                        <div><button onClick={()=>removeActivity(i)}>remove</button></div>
                        
                    </p>
                    </>
                )
            })}

            {listdata.length>= 1 && <button onClick={removeAll}>RemoveAll </button>}
        </div>
        </>

    )


}

export default Todo;