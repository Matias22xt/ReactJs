import { useState } from 'react'
import  './Counter.css';

const Counter = ({stock,onAdd}) => {
    const initial = 0
    let [count, setCount] = useState(initial)

    const decrement = () => {
        // accu = accu - 1
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        // accu = accu + 1
        setCount(count + 1)
    }

    

    return (
        <div className='Counterr'>
            <div>
            <button disabled={stock<=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
            <h1 className='numero'>{count}</h1>
            <button className='+' disabled={count >= stock} onClick={increment}>+</button>
            <button className='-' onClick={decrement}>-</button>
            
         </div>
    )
}

export default Counter