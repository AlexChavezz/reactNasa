import React from 'react'
import { useForm } from '../../../../hooks/useForm'

export const Form = ({setState}) => {
console.log('call')    
    const [ values, handleInputChange, reset ] = useForm({
        day:'',
        month:'',
        year:''
    });
    
    const { day, month, year } = values;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setState({
            day: day,
            month: month,
            year:year,
        })
    }

    return (
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
        )
}
