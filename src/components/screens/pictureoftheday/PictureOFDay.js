import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch';
import { useForm } from '../../../hooks/useForm';
import { Content } from './content/Content';
// import { pictureofdayData } from '../helpers/pictureofdayData'
export const PictureOFDay = () => {

    const data = useFetch(`https://api.nasa.gov/planetary/apod?&api_key=ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah`);

    const [state, setstate] = useState({
        year: null,
        month: null,
        day: null
    });
    
    


    return (
        <div className="container">
            <form 
            className="m-4"
            onSubmit={handleSubmit}
            >
                <div className="row">
                        <div className="col form-group">
                            <label>YEAR:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="YYYY"
                            name="year"
                            value={ year }
                            onChange={ handleInputChange }
                            />
                        </div>
                        <div className="col form-group">
                            <label >MONTH:</label>
                            <input type="text"
                            className="form-control" 
                            placeholder="MM" 
                            name="month"
                            value={ month }
                            onChange={ handleInputChange }
                            />
                        </div>
                        <div className="col form-group">
                            <label>DAY:</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="DD" 
                            name="day"
                            value={ day }
                            onChange={ handleInputChange }
                            />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>            
            {
                data.loading ?
                    (
                        <div className="spinner-border span" role="status">
                            {/* <span className="visually-hidden">Loading...</span> */}
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
