import React from 'react'
export const Content = ({ data }) => {



   
    return (
        <section className="container">
           
            <div className="card mb-3 border-0 shadow-lg" id="card">
                <img className="card-img-top w-50 mx-auto mt-3" src={data.url} alt={data.url} title={data.title} />
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
