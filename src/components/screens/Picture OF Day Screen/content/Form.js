import React from 'react'
import { useForm } from '../../../../hooks/useForm'

export const Form = ({ setState }) => {

    const [values, handleInputChange, reset] = useForm({
        date:'',
        day: '',
        month: '',
        year:''
    });
    const { day, month, year } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            date:new Date(year,month - 1,day),
            day: day,
            month: month ,
            year: year,
        })
        reset();
        const button =  document.getElementById('collapseExample');
        button.classList.remove('show');
    }
    
        return(
        <>

            <button className="btn btn-primary mx-auto d-block my-5" id="button"type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Find Up
            </button>

            <div className="collapse mx-5" id="collapseExample">
                <form
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
                                value={year}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col form-group">
                            <label >MONTH:</label>
                            <input type="text"
                                className="form-control"
                                placeholder="MM"
                                name="month"
                                value={month}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col form-group">
                            <label>DAY:</label>
                            <input type="text"
                                className="form-control"
                                placeholder="DD"
                                name="day"
                                value={day}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                </form>
            </div>

        </>
    )
}
