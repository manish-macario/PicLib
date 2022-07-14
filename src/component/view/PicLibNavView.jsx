
import * as React from 'react';
import logo from '../../asset/image-search.png'
import './Nav.css'
import { Link } from "react-router-dom";

const PicLibNavView = () => {
    return (
        <div className='nav-container'>
            <nav className='piclib-nav'>

                <Link to="/"> <img className='piclib-logo' src={logo}></img></Link>



                <Link className='title-link' to="/"><span className='piclib-title'>PicLib</span></Link>


            </nav>
        </div>
    );
};

export default PicLibNavView;

