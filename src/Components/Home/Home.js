import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../img/music-img-1.jpg";
import img2 from "../../img/music-img-6.jpg";
import img3 from "../../img/music-img-3.jpeg";
import img4 from "../../img/music-img-4.jpg";
// import img5 from "../../img/service-img-1.jpg"
// import img6 from "../../img/service-img-2.jpg"
import img7 from "../../img/music-img-5.jpg"
import Button from '@restart/ui/esm/Button';
import "./Home.css";


const Home = () => {
    return (
        <>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src={img1}
                    alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Lets Start a Music Career</h3>
                        <p>Music is a life long learning process, the more you explore the more you learn</p>
                    </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src={img2}
                alt="Second slide"/>
            <Carousel.Caption>
                <h3>Best Palce For Music Education</h3>
                <p>Music is a passion so to master it you need a perfect place to learn it</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 h-25"
            src={img3}
            alt="Third slide"/>

        <Carousel.Caption>
            <h3 className="">Lets Learn Music Togather</h3>
            <p>To be a greate singer you need to have some grate listener</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
    {/* WelCome Section */}
        <div className="my-5">
            <h2 className="fw-bolder">WellCome To Hurmony Music School !!</h2>
            <h4>Attend Our Music School</h4>
        </div>
        <div className="d-flex bg-secondary my-5">
            <img className="m-5 p-5 w-50 h-50" src={img4} alt="" />
            <div className="m-5 p-5 w-50 h-50 text-light">
                <h5>WELCOME THERE</h5>
                <h2 className="fw-bolder">Hermony Music</h2>
                <h2 className="fw-bolder">School</h2>
                <h5 className="fw-light">At our School, we share our passion for music with students from all walks of life. Whether young or old, beginner or master, our students grow!</h5>

                <div className="mb-2">
                <Button className="bg-primary rounded-2 border-0 p-2 text-light fw-bold">
                    More About Us
                </Button>
            </div>
            </div>
        </div>
        {/* Service */}
        <h2>Our Services</h2>
        <div className="d-flex text-center">
            <div className="servise-1">
                <h4 id="sercice-text-1">PRIVATE LESSION</h4>
            </div>
            <div className="servise-2">
                <h4 id="sercice-text-2">GROUP LESSION</h4>
            </div>
            <div className="servise-3">
                <h4 id="sercice-text-3">DAY CARE</h4>
            </div>
        </div>
        <div className="d-flex">
            <div  className="m-5 p-5 w-50 h-50 text-light bg-dark">
                <h3>How To Choose an</h3>
                <h2>MUSICAL INSTRUMENT</h2>
                <p>If you want to dip into the fascinating world of music but don`t know how to play musical instruments and are unsure where to start, you definitely need to contact us! Our experts provide professional, practical, and theoretical music instructions that will help you choose the right direction.</p>
                <div className="mb-2">
                <Button className="bg-primary rounded-2 border-0 p-2 text-light fw-bold">
                    Learn More
                </Button>
                </div>
            </div>
            <img className="m-5 p-5 w-50 h-50 text-light" src={img7} alt="" />
            <div>

            </div>
        </div>
        </>
        
    );
};

export default Home;