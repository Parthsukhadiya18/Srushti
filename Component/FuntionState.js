import React, { useState } from 'react'

function FuntionState() {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    if (count < 0) {
        setCount(0)
    }

    if (count > 10) {
        setCount(10)
    }

    return (
        <div>FuntionState
            <p>Count:{count}</p>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>


        </div>
    )
}

export default FuntionState