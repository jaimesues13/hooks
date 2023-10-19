import { useState } from "react"

export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value) =>{
        setCounter(counter + value)
    }

    const reset = () =>{
        setCounter(initialValue)
    }

    const decrement = (value) =>{
        if(counter===0) return;

        if(counter<=1){
            setCounter(counter-1);
        }else{
            setCounter(counter - value)
        }
        
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}

