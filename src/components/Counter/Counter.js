import { useState } from 'react'
import './Counter.css';

const Counter = ({stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)
    /* const [stock, setStock] = useState({stock}) */

    const decrement = () => {

        if (count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className="counter-contador">
                
                <div>
                    <button disabled={count === 0 } onClick={decrement} className="button-82-pushable">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            -
                        </span>
                    </button>
                </div>
                <div>
                    <button disabled={count === stock } onClick={increment} className="button-82-pushable">
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            +
                        </span>
                    </button>
                </div>
            </div>

            <div>

                <button disabled={count === 0 } onClick={() => { onAdd(count); console.log(stock-count);}} className="button-64" >
                    <span className="text">Agregar Al Carrito</span>
                </button>

            </div>

        </div>
    )
}

export default Counter