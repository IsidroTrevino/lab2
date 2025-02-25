import { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(1);

    return (
        <>
            <h1>Count: {count}</h1>
            <div className='d-flex flex-column'>
                <button className="mb-2" onClick={() => setCount(count + 1)}>Mas +++++++++++++</button>
                <button className="mb-2" onClick={() => setCount(0)}>Cancelar</button>
                <button className="mb-2" onClick={() => setCount(count - 1)}>Menos ---------------</button>
            </div>
        </>
    )
}

export default CounterApp;
