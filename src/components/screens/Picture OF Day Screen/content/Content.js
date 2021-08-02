import React, { useRef } from 'react';
export const Content = React.memo(({ data,state, previusDay, nextDay }) => {
    const ref = useRef(new Date());
    return (
        <section className="container">

            <div className="card mb-3 border-0 shadow-lg" id="card">
                <img className="card-img-top w-50 mx-auto mt-3" src={data.url} alt={data.url} title={data.title} />
                <div className="row mt-4">
                    <div className="col d-flex p-0 justify-content-end">
                        <button 
                        className="btn btn-info mx-2"
                        onClick={ ( ) => previusDay() }
                        >
                            Previus
                        </button>
                    </div>
                    <div className="col d-flex p-0 justify-content-start">
                        {
                            state.date.getTime() < ref.current.getTime()  &&
                            <button 
                            className="btn btn-info "
                            onClick={ nextDay }
                            >
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
})
