import { useState } from 'react'
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(1)

    const decrement = () => {

        if (count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        }

    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div>
                <button onClick={decrement} className="button-82-pushable" >
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        -
                    </span>
                </button>
            </div>
            <div>
                <button onClick={increment} className="button-82-pushable" >
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        +
                    </span>
                </button>
            </div>

        </div>
    )
}

export default Counter