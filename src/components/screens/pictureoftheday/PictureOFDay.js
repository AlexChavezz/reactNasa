import React, { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch';
import { Content } from './content/Content';
import { Form } from'./content/Form';
export const PictureOFDay = () => {


    const [state, setState] = useState({
        date: new Date(),
        day:new Date().getDate(),
        month:new Date().getMonth() + 1 ,
        year:new Date().getFullYear(),
    });


    const data = useFetch(`https://api.nasa.gov/planetary/apod?date=${state.year}-${state.month}-${state.day}&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah`);


    return (
        <div className="container">
            <Form setState={setState} dates={state.date}/>
            {
                data.loading ?
                    (
                        <div className="spinner-border span" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div className="animate__animated animate__fadeIn">
                            <Content {...data} state={state} setState={setState}/>
                        </div>
                    )
            }
        </div>
    )
}
