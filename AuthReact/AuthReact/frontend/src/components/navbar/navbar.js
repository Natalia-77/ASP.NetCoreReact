import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand text-primary" to="/">--My brend--</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Головна</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Рестрація</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
