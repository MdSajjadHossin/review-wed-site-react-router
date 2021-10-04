import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayFaculty from '../DisplayFaculty/DisplayFaculty';
import './Faculty.css';

const Faculty = () => {
    const [faculty, setFaculty] = useState([]);
    useEffect( () =>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setFaculty(data))
    },[])
    return (
        <div>
            <h2>Our Faculty Members</h2>
            <div className="faculty-container">
                {
                    faculty.map(Faculty =>
                        <DisplayFaculty
                        key = {Faculty.id}
                        faculty ={Faculty}
                        >
                        </DisplayFaculty>)
                }
            </div>
        </div>
    );
};

export default Faculty;