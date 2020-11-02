import React from 'react';
import { Link } from 'react-router-dom';
import LoginManager from './manager/LoginManager';

function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Marvel</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                    <Link to='/manager/login' class="nav-link" href="#">Manager</Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/bod/login">Director</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
