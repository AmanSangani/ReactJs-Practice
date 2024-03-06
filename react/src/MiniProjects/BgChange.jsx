import React from 'react'
import { useState } from 'react'

const BgChange = () => {

    const [color, setColor] = useState("#414141")

    return (
        <>
            <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-xl me-2'>
                        <button onClick={() => setColor("white")} className='outline px-4 bg-white-500 text-black px-5 py-2 rounded-xl'>White</button>
                        <button onClick={() => setColor("Black")} className='outline-none px-4 bg-black text-white px-5 py-2 rounded-xl'>Black</button>
                        <button onClick={() => setColor("rgb(14 165 233)")} className='outline-none px-4 bg-sky-500 text-white px-5 py-2 rounded-xl'>Blue</button>
                        <button onClick={() => setColor("rgb(239 68 68)")} className='outline-none px-4 bg-red-500 text-white px-5 py-2 rounded-xl'>Red</button>
                        <button onClick={() => setColor("rgb(236 72 153)")} className='outline-none px-4 bg-pink-500 text-white px-5 py-2 rounded-xl'>Pink</button>
                        <button onClick={() => setColor("rgb(34 197 94)")} className='outline-none px-4 bg-green-500 text-white px-5 py-2 rounded-xl'>Green</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgChange