import React, { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch';
import { Content } from './content/Content';
import { Form } from'./content/Form';
export const PictureOFDay = () => {




    const [state, setState] = useState({
        day:new Date().getDate(),
        month:new Date().getMonth() + 1 ,
        year:new Date().getFullYear(),
    });

    console.log(state)

    const data = useFetch(`https://api.nasa.gov/planetary/apod?date=${state.year}-${state.month}-${state.day}&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah`);



    return (
        <div className="cotainer">
            <Form setState={setState}/>
            {
                data.loading ?
                    (
                        <div className="spinner-border span" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            <Content {...data} />
                        </div>
                    )
            }
        </div>
    )
}
