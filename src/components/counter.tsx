import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'




export const Counter = () =>  {

    const [count, setCount] = useState(0);

    const CountDown = () => {
        setCount(count-1)

        if (count<=0){
            alert ('Не уводите счётчик в ноль')
            setCount(0)
        }
    }


    return(
            <div>
                 <button onClick={()=> setCount(count+1)}>+1</button>
                 <button onClick={CountDown}>-1</button>
                 <p>You clicked {count} times</p>
                 <button onClick={()=> setCount(0)}>RESET</button>
            </div>
    )


}


