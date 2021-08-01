import React, { useState } from 'react'
export const Content = ({ data,state, setState }) => {
    

    const [date] = useState( state.date );
    const yesterday = () => {
        let daymilisecounds = 24 * 60 * 60 * 1000;
        const ayer = new Date(date.getTime() - daymilisecounds)
        return ayer;
    }

    const previusDays = () => {
        const daybefore = yesterday()
        setState({
            date: daybefore,
            day: daybefore.getDate(),
            month: daybefore.getMonth() + 1,
            year: daybefore.getFullYear(),
        });
    }
    console.log(state.date.getTime());
    return (
        <section className="container">

            <div className="card mb-3 border-0 shadow-lg" id="card">
                <img className="card-img-top w-50 mx-auto mt-3" src={data.url} alt={data.url} title={data.title} />
                <div className="row mt-4">
                    <div className="col d-flex p-0 justify-content-end">
                        <button 
                        className="btn btn-info mx-2"
                        onClick={ ( ) => previusDays() }
                        >
                            Previus
                        </button>
                    </div>
                    <div className="col d-flex p-0 justify-content-start">
                        {
                            state.date.getTime() > date.getTime()  &&
                            <button className="btn btn-info ">
                                Next
                            </button>
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text py-2">{data.date}</p>
                    <p className="card-text">{data.explanation}</p>
                    {
                        data.copyright ?
                            (
                                <p className="card-text">Copyright: <small className="text-muted">{data.copyright}</small></p>
                            )
                            :
                            (
                                <p className="card-text">Copyright: <small className="text-muted">NASA</small></p>
                            )
                    }
                </div>
            </div>
        </section>
    )
}
