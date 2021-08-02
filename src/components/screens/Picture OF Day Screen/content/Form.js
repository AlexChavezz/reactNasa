import React from 'react'
import { useForm } from '../../../../hooks/useForm'

export const Form = React.memo(({ setState }) => {

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
            {/* {
                day.length !== 2 && month.length !== 2 && year.length !== 4 &&
                <div class="alert alert-danger text-center col-6 mx-auto">
                    all camps are required <br /> Example: 2020/01/01
                </div>
            } */}
                <form
                className="mb-4"
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
                                autoComplete="off"
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
                                autoComplete="off"
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
                                autoComplete="off"
                                value={day}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {
                        day.length === 2 && month.length === 2 && year.length === 4 &&

                            <button type="submit" className="btn btn-primary m-3 animate__animated animate__backInLeft">Submit</button>
                    }
                </form>
            </div>

        </>
    )
})
