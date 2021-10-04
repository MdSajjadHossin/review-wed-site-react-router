import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayServices from '../DisplayServices/DisplayServices';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div >
            <h2>Our Provide</h2>
            <div className="service-container">
            {
                services.map(Services =>
                    <DisplayServices
                    key = {Services.id}
                    services ={Services}
                    >
                    </DisplayServices>

                    )
            }
            </div>
        </div>
    );
};

export default Services;