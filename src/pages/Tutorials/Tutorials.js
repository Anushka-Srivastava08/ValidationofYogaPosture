import React from 'react';
import { Link } from 'react-router-dom';

import './Tutorials.css';

//import { tutorials, fixCamera } from '../../utils/data'

export default function Tutorials() {
  return (
    <div className="tutorials-container flex flex-col">
      <Link to="/" className="btn start-btn">
        Home
      </Link>
      <div
        className="w-screen md:w-fit md:max-w-[50vw] flex-1"
        style={{
          backgroundColor: 'hsl(31, 52%, 90%)',
          color: 'brown',
          borderRadius: '2rem',
          // padding: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // margin: 'auto',
          flexDirection: 'column'
        }}
      >
        <h1
          className="pt-2"
          style={{
            fontWeight: 'bold',
            color: 'brown',
            fontSize: '3rem',
            marginBottom: '1rem'
          }}
        >
          Basic Tutorials
        </h1>
        <div>
          <p
            className="about-content p-4"
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: 'Poppins',
              textAlign: 'justify',
              fontSize: '1.4rem'
            }}
          >
            1. When App ask for permission of camera, allow it to access to
            capture pose.
            <br />
            2. Select what pose you want to do in the dropdown.
            <br />
            3. Read Instrctions of that pose so you will know how to do that
            pose.
            <br />
            4. Click on Start pose and see the image of the that pose in the
            right side and replecate that image in front of camera.
            <br />
            5. If you will do correctly the skeleton over the video will become
            green in color and sound will start playing.
            <br />
            <br />
          </p>
          <h1
            // className="about-heading"
            style={{
              fontWeight: 'bold',
              color: 'brown',
              fontSize: '3rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}
          >
            Camera Not Working?
          </h1>
          <p
            className="about-content px-4"
            style={{
              fontSize: '1.4rem',
              textAlign: 'justify',
              fontFamily: 'Poppins'
            }}
          >
            <p>
              <b>Solution 1:</b> <br /> Make sure you have allowed the
              permission of camera, if you have denined the permission, go to
              setting of your browser to allow the access of camera to the
              application. <br />
            </p>
            <p>
              <b>Solution 2:</b> <br /> Make sure no any other application is
              not accessing camera at that time, if yes, close that application.{' '}
              <br />
            </p>
            <p>
              <b>Solution 3:</b> <br /> Try to close all the other opened
              browsers <br />
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
