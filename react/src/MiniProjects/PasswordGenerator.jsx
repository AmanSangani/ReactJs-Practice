import React, { useState, useCallback, useEffect, useRef } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false);
    const [characters, setCharacters] = useState(false);
    const [password, setPassword] = useState("");

    const [btnText, setBtnText] = useState("copy")

    const passwordRef = useRef(null);

    const passwordGenerate = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number) str += "0123456789"
        if (characters) str += "!@#$%^&*(){}[]"

        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(index)
        }

        setPassword(pass);

    }, [length, number, characters, setPassword]) //for optimization of method : give the dependencies : if the change occurs in this then optimize the method accordingly

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,4);
        window.navigator.clipboard.writeText(password);
        setBtnText("copied");
    }, [password])

    useEffect(() => {
        passwordGenerate();
        setBtnText("copy");
    }, [length, number, characters, passwordGenerate]) //if change occurs in this particular field then run the given method again

    return (
        <>
            <div className='w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-500'>
                <h1 className='text-gray-800 my-2 text-3xl text-center font-bold'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-5'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none text-black w-full py-1 px-3'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPassword}
                        className='bg-gray-800 px-3 outline-none shrink-0 py-0.5 hover:bg-gray-700'>
                        {btnText}
                    </button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            id='inputLength'
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label htmlFor="inputLength">Length : {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={number}
                            id='numberInput'
                            onChange={(e) => { setNumber((prev) => !prev) }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={characters}
                            id='charInput'
                            onChange={(e) => { setCharacters((prev) => !prev) }}
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator