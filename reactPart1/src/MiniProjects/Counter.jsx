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
            <div className='m-8 mb-[150px] flex justify-center items-center'>
                <h1 className='text-3xl me-5'>Counter : {counter}</h1>
                <button className='text-white m-2 p-1 rounded bg-black' onClick={addValue}>Add Value</button>
                <br />
                <br />
                <button className='text-white m-2 p-1 rounded bg-black' onClick={subtractValue}>Subtract Value</button>
                <br />
                <br />
                <button className='text-white m-2 p-1 rounded bg-black' onClick={resetValue}>Reset Value</button>
            </div>
        </>
    )
}

export default Counter