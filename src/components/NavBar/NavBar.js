import React from 'react'
import { NavLink, Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link
                    className="navbar-brand" 
                    to="/"
                    >

                    <img src="./icon.png" alt="logo"/>
                    Nasapp
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink 
                                activeClassName="active"
                                className="nav-link"
                                to="/PictureOFDay"
                                >Picture Of Day</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                activeClassName="active"
                                className="nav-link"
                                to="/AsteroidsNeoWs"
                                >AsteroidsNeoWs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
