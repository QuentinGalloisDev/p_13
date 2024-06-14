import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const handleIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(amount))
    }
    const handleDecrementByAmount = (amount) => {
        dispatch(decrementByAmount(amount))
    }
    const [number, setNumber] = useState(0);
    // Prend la valeur d'un input du dom et le met en parametre dans le redux
    const handleAmount = (domEvent) => {
        setNumber(parseInt(domEvent.target.value))
    }


    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
                <input type="number" onChange={handleAmount}></input>
                <button onClick={() => handleIncrementByAmount(number)}> increment by amount</button>
                <button onClick={() => handleDecrementByAmount(number)}> decrement by amount</button>
            </div>
        </div>
    )
}