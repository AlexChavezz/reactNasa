import React from 'react'
import { useFetch } from '../../../hooks/useFetch'

export const AsteroidsNeoWs = () => {

    const data = useFetch(`https://api.nasa.gov/neo/rest/v1/feed?&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah`);
    console.log(data)

    return (
        <div>
            <h1 className="animate__animated animate__bounce">AsteroidsNeoWs</h1>
            <hr />
        </div>
    )
}
