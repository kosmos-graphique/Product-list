import React from "react";
import './header.css';

import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">W.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Men</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Women</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Kids</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Discover</a>
                    </li>
                </ul>
                <div className="container-fluid">
                    <form className="d-flex input-group w-auto">
                        <input type="search" className="form-control round" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border round" id="search-addon">
                        <i className="fa fa-search" />
                        </span>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <button className="mx-2 btn1"><i className="fa fa-shopping-bag"></i></button>
                    <button className="mx-2 btn1"><i className="fa fa-bookmark"></i></button>
                    <button className="mx-2 btn1"><i className="fa fa-user"></i></button>
                </div>
                    
            </div>
        </nav>
    );
}