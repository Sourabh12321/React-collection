import {useState} from "react"
export default function Counter(props){
    const [count,setCount] = useState(props.count)
    return <>
    <h1>Counter</h1>
    <h3>{count}</h3>
    <button onClick={()=>{
        setCount(count+1);
    }}>+</button>
    <button onClick={()=>{
        if(count!==0){
            setCount(count-1);
        }
        
    }}>-</button>
    <button onClick={()=>{
        setCount(count*2)
    }}>Double</button>
    </>
}