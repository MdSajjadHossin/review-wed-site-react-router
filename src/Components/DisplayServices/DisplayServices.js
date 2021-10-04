import Button from '@restart/ui/esm/Button';
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
                    <div className="mb-2">
                <Button className="bg-danger rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
            </div>
            </div>
        </div>

        
        </>
        
        
    );
};

export default DisplayServices;