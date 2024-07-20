import React, { useState } from 'react'
import './css/Projects.css'
import AOS from 'aos'
import { useEffect } from 'react';
import ProjectsData from './ProjectsData';
import 'aos/dist/aos.css'
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  const [selectedcategory, setSelectedcategory] = useState('All');
  function handlefunction(e) {
    setSelectedcategory(e.target.value);
  }

  const filteredProjects = selectedcategory === 'All' ? ProjectsData : ProjectsData.filter(project => project.category === selectedcategory);

  return (
    <div className='projects p-5 bg-white' id='projects'>
      <div className='myProjectText'>

        <h3>My <span>Projects</span></h3>
       
        <br></br>
        <hr />
      </div>
      <div className='container text-center'>
        <div className='row'>
          {filteredProjects.map((project, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-4'>
              <div className='card text-dark' style={{ backgroundColor: project.category === 'Full Stack' ? '#DFDFDF' : '#F5F5F5' }}>
                <img src={project.image} className='card img-top' alt='project' style={{ height: '200px', objectFit: 'cover' }} />
                <div className='card-body'>
                  <h5 className='card-title'>{project.name}</h5>
                  <p>{project.description}</p>
                  <a href={project.liveDemo} className='btn aboutbtn' target='no_blank'>Live Demo</a>
                  <a href={project.code} className='btn aboutbtn ms-1 ms-sm-5 mt-0 mt-sm-0' target='no_blank'>Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects
