import { useState } from "react";

function EventUsestate()
{
    const[count,Setcount]=useState(0)
    function handleClick(){
        Setcount(count+1)

    }

    return(
        <div>
        <button onClick={handleClick}>Click Me:{count}</button>
        <button onClick={handleClick}>Click Me:{count}</button>
        </div>
    );

}

export default EventUsestate;