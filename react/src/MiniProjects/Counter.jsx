import { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(5)

    // let counter = 5;

    const addValue = () => {
        if (counter < 20) {
            setCounter(counter + 1)
        }
    }
    const subtractValue = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const resetValue = () => {
        setCounter(counter = 5)
        console.log("ResetValue", counter);
    }
    return (
        <>
            <h1 className='mb-10'>Counter : {counter}</h1>
            <button onClick={addValue}>Add Value</button>
            <br />
            <br />
            <button onClick={subtractValue}>Subtract Value</button>
            <br />
            <br />
            <button onClick={resetValue}>Reset Value</button>
        </>
    )
}

export default Counter