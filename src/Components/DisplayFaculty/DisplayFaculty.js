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
            </div>
            </div>
        </div>

        
        </>
        
    );
};

export default DisplayFaculty;