
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PictureOFDayModal } from './PictureOFDayModal';
import { NeowsModal } from './NeowsModal';


export const HomeScreen = () => {

    const [state, setstate] = useState(false);
    const [statetwo, setstatetwo] = useState(false);
    const hiddeModalOne = () => {
        setstate(false);
    }
    const hiddeModalTwo = () => {
        setstatetwo(false);
    }

    return (
        <>
            <div className="container-fluid height-custom">
                <div className="container pt-5">
                    <div className="row text-light">
                        <div className="col-12">
                            <h1 className="display-5 text-light text-center fw-bold">Nasapp</h1>
                        </div>
                        <div className="col-12 mt-4">
                            <h2 className="text-center fw-normal">A Single Wep Aplication</h2>
                        </div>
                        <div className="col-12 mt-4">
                            <p className="text-center">Nasapp is a web aplication builded whit react. This web site use a few nasa APIs. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 respo">
                <div className="row row-cols-2 justify-content-between">
                    <div className="col-5 shadow">
                        <h3 className="my-2 p-3"> Astronomy Picture of the Day</h3>
                        <p className="mb-4 px-3"> One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications.</p>
                        <div className="row m-2">
                            <div className="col d-flex justify-content-around">
                                <button
                                    className="btn btn-info"
                                    onClick={ () => setstate(true)}
                                >About</button>
                                <Link to="/PictureOFDay" className="btn btn-outline-primary"> Let me try </Link>
                            </div>
                            { state &&  <PictureOFDayModal state={state} close={hiddeModalOne}/>
                            }
                        </div>
                    </div>
                    <div className="col-5 shadow">
                        <h3 className="my-2 p-3">Near Earth Object Web Service</h3>
                        <p className="mb-4 px-3"> NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>
                        <div className="row mt-2">
                            <div className="col d-flex justify-content-around">
                                <button
                                className="btn btn-info"
                                onClick={ ( ) => setstatetwo(true) }
                                >About</button>
                                <Link to="/AsteroidsNeoWs" className="btn btn-outline-primary"> Let me try </Link>
                            </div>
                            {
                                statetwo &&   <NeowsModal  statetwo={statetwo} close={hiddeModalTwo} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <footer className="d-flex align-items-end justify-content-center text-light">
                <p className="mt-5 text-center">Developed by Alexis more about my work <a href="https://alexchavezz.github.io/PORTAFOLIO/" target="_ blank">Here!</a>. &copy; All rights reserved.</p>
            </footer>
        </>
    )
}
