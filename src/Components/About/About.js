import Button from '@restart/ui/esm/Button';
import React from 'react';
import img7 from "../../img/music-img-6.jpg";
import img8 from "../../img/campus.jpg";
import './About.css';

const About = () => {
    return (
        <>
        <div>
            <h2>About Us</h2>
        </div>
        <div className="d-flex">
            <div  className="m-5 p-5 w-50 h-50 text-light bg-danger">
                <h3>Harmony</h3>
                <h2>Music School</h2>
                <p>If you want to dip into the fascinating world of music but don`t know how to play musical instruments and are unsure where to start, you definitely need to contact us! Our experts provide professional, practical, and theoretical music instructions that will help you choose the right direction.</p>
                <div className="mb-2">
                <Button className="bg-dark rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
            </div>
            <img className="m-5 p-5 w-50 h-50 text-light" src={img7} alt="" />
            <div>
            </div>
        </div>
        <div>
            <h1>Our Beautiful Campus</h1>
            <div className="d-flex">
            <div>
                <img className="campus-img" src={img8} alt="" />
            </div>
            <div className="m-5 p-5 w-50 h-50 text-light bg-danger">
                <h2>Campus Tours</h2>
                <p>Prospective students and their parents are invited to attend a tour, hear a concert, and explore what Rythmo Music School has to offer.
                Tours are available year-round on Mondays, Wednesdays, and Fridays at 10 am, excluding holidays and audition days. If you are hoping to meet with a faculty member during your visit.
                <div className="mb-2 my-2">
                <Button className="bg-primary rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
                </p>
            </div>
            </div>
        </div>
        </>
    );
};

export default About;