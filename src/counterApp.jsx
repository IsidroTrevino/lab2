import { useState } from 'react'
import PropType from 'prop-types'

const CounterApp = ({value, counter}) => {
    const [count, setCount] = useState(counter);


    return (
        <div className="container text-center p-4">
            <h1 className="text-primary mb-4">Counter App!!!!!!!!</h1>
            <h2 className="text-secondary">valor traido de prop: {value}</h2>
            <h1 className="display-1 text-info mb-4">Count: {count}</h1>
            <div className="d-flex flex-column align-items-center gap-3">
                <button 
                    className="btn btn-success w-50"
                    onClick={() => setCount(count + 1)}>
                    Mas +++++++++++++
                </button>
                <button 
                    className="btn btn-danger w-50"
                    onClick={() => setCount(0)}>
                    Cancelar
                </button>
                <button 
                    className="btn btn-warning w-50"
                    onClick={() => setCount(count - 1)}>
                    Menos ---------------
                </button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropType.number.isRequired,
    counter: PropType.number.isRequired
}

export default CounterApp;
