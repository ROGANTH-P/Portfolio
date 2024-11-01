import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
//import Projects from './components/Projects';
import App from './App';
import First from './components/Navbar';
import About from './components/About';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
  <Routes>
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Portfolio />} />
  </Routes>
</BrowserRouter>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
