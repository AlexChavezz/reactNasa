import React from 'react'
import { useFetch } from '../../../hooks/useFetch'

export const AsteroidsNeoWs = () => {


    const data = useFetch(`https://api.nasa.gov/neo/rest/v1/feed?&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah`);
    console.log(data)
    return (
        data.loading ?
            (
                <div className="spinner-border span" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="container md-container-fluid border mt-4">
                    Near Asteroids: {data.data.element_count}
                </div>

            )
    )
}
