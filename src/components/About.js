import React from 'react'
import pic from '../assets/images/pic.jpg';
import Rogan from '../assets/images/Rogan.jpg'
import '../css/About.css'
import AOS from 'aos'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown'
import 'aos/dist/aos.css'
import { FiBook,FiShield,FiZap } from "react-icons/fi";
import resume from '../assets/Resume.pdf';
import cognisance from '../assets/cognisance.pdf';
import renaissance from '../assets/renaissance.pdf';
import codeup from '../assets/codeup.pdf';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className='about' id='section2'>
      <div className='container'>
        <div className='row'>
          <h2 className='text-center'>About <span style={{ color: "#f64c08" }}>me</span></h2>
          <div className='col-12 col-md-6 col-lg-6 aboutImagePart1 mt-4 d-block' data-aos='flip-right'>
            <img src={Rogan} alt='rogan' style={{ width: "300px", height: "300px", objectFit: "contain", borderRadius: "0%"}} />
            <a href="https://drive.google.com/file/d/1MkuLJzhCPOFSdTKh80JFaMvsXsHheCGS/view" style={{textDecoration:'none'}}><button className='downloadcv'>Resume</button></a>
            </div>
          <div className='col-12 col-md-6 col-lg-6 aboutTextPart1' data-aos='fade-left'>
            <div>

              <p>
                Full stack web development with background knowledge of MERN stacks, along with knack of building applications with utmost efficiency. Strong professional development with MongoDB.                </p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card p-3 shadow" >
                  <nav>
                    <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{color:"black"}}> <FiShield size={25} color='black' strokeWidth={2.0} />Highlights</button>
                      <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style={{color:"black"}}><FiBook size={25} color='black' strokeWidth={2.0} />Education</button>
                    </div>
                  </nav>
                  <div className="tab-content p-3 border bg-light" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <div className='highlights d-flex align-items-center justify-content-center' data-aos='zoom-out-right'>

                        <ul >
                          <li>Full Stack Web Developer</li>
                          <li>Interactive Front end as per design</li>
                          <li>HTML, CSS, JAVASCRIPT</li>
                          <li>React</li>
                          <li>MERN stack Development</li>
                      
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <ul>
                          <li>Bannari Amman Instiute of Technology- 2021 - 2025<br /><h5>BE Tech- Information Technology- 8.64cgpa</h5></li>
                          <li>Kg matric Hr Sec School, Nambiyur - 2020 - 2021<h5>Higher Secondary Certificate - 83.4 %</h5></li>
                          <li>St Francis Xavier hr Sec School, Kodiveri - 2018 - 2019<h5>Secondary School Leaving Certificate - 81.2%  </h5></li>
                   </ul>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
