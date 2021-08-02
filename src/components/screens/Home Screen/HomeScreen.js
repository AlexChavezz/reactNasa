import React from 'react'
import { Link } from 'react-router-dom';
export const HomeScreen = () => {
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
                <div className="apinfo">
                    <div className="shadow">
                        <h3 className="my-2 p-3"> Astronomy Picture of the Day</h3>
                        <p className="mb-4 px-3"> One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications.</p>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <button type="button" class="btn btn-primary btn btn-info m-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Docs
                                </button>
                                <Link to="/PictureOFDay" className="btn btn-link m-4"> Let me try </Link>
                            </div>
                        </div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">PICTURE OF THE DAY</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    </div>
                                    <div class="modal-body">

                                        <div class="modal-dialog modal-dialog-scrollable">
                                            ...
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="shadow">
                        <h3 className="my-2 p-3">Near Earth Object Web Service</h3>
                        <p className="mb-4 px-3"> NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set.</p>
                        <div className="col d-flex justify-content-center">
                                <button type="button" class="btn btn-primary btn btn-info m-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Docs
                                </button>
                                <Link to="/AsteroidsNeoWs" className="btn btn-link m-4"> Let me try </Link>
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
