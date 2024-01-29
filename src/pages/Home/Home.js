import React from 'react';
import { Link } from 'react-router-dom';
import carousel1 from '../../utils/images/carousel1.svg';
import carousel2 from '../../utils/images/carousel2.svg';
import carousel3 from '../../utils/images/carousel3.svg';

import './Home.css';
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar/>

      <div className="home-main">
        <div className="carousel-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carousel1} id="img-car" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel2} id="img-car" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={carousel3} id="img-car" className="d-block" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-section">
          <Link to="/start">
            <button className="btn start-btn">Let's Start</button>
          </Link>
          <Link to="/tutorials">
            <button className="btn start-btn">Tutorials</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
