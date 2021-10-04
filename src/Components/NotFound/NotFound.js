import React from 'react';
import './NotFound.css';
import img9 from '../../img/404-not-found-hd-png.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
        <div >
            <div className="page-not-found">
            <div>
                <img className="not-found-img" src={img9} alt="" />
            </div>
            <div>
            <Link className="bg-danger rounded text-decoration-none text-light px-3 py-1" to="/home">Home</Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default NotFound;