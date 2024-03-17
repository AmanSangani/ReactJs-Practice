import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    
    const data = useLoaderData()
    
    // const [data, setData] = useState(null);
    // useEffect(() => {
        // fetch('https://api.github.com/users/amansangani')
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
    // }, []);

    if (data === null) {
        return (
            <div className='text-center text-3xl m-4 bg-gray-500 p-4'>Loading...</div>
        );
    }

    return (
        <div className='rounded-lg text-white text-center text-3xl m-4 bg-gray-500 p-4'>
            Github Followers : {data.followers}
            <img className='rounded-lg' src={data.avatar_url} width={300} />
        </div>
    );
}

export default Github;
