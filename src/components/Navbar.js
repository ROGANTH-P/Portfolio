import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Navbar.css'
function navbar() {
  return (
    <div className='first'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#"><span className='start'>Port</span><span className='end'>folio</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" color='white'></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" color='white'>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#section1">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#section2">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#section3">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#section5">Contact</a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default navbar
