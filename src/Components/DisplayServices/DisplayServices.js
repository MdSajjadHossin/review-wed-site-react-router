import React from 'react';
import './DisplayServices.css';

const DisplayServices = (props) => {
    console.log(props);
    const {img, className, totalSit} = props.services;
    return (
        <>
        <div>
            <div className="services">
            <div>
                    <img className="course-img" src={img} alt="" />
                    <h4>Calss Name: {className}</h4>
                    <h5>Total Sit: {totalSit}</h5>
            </div>
            </div>
        </div>

        
        </>
        
        
    );
};

export default DisplayServices;