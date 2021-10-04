import Button from '@restart/ui/esm/Button';
import React from 'react';
import './DisplayFaculty.css';

const DisplayFaculty = (props) => {
    const {className, facultyName, facultyImg} = props.faculty;
    return (
        <>
        <div>
            <div className="faculties">
            <div>
                    <img className="course-img" src={facultyImg} alt="" />
                    <h5>class Name: {className}</h5>
                    <h6>Instructor Name: {facultyName}</h6>
                    <div className="mb-2">
                <Button className="bg-primary rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
            </div>
            </div>
        </div>

        
        </>
        
    );
};

export default DisplayFaculty;