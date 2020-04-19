import React,{useState} from 'react';

function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Initial Value of Counter is {count}</h1>
            <button className="button" onClick={()=>setCount(0)}>Reset Counter</button>
            <button className="button" onClick={()=>count>=100?null:setCount(count+1)}>Increment Counter</button>
            <button className="button" onClick={()=>count<=0?null:setCount(count-1)}>Decrement Counter</button>
        </div>
    )
}

export default Counter;