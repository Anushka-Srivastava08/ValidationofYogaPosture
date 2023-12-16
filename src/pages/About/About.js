import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div>
        <Link to="/">
          <button className="btn start-btn " id="about-button">
            Home
          </button>
        </Link>
      </div>
      <section className="text-gray-600 flex items-center justify-center text-center flex-col rounded-[2rem] bg-[#f3e6d8] md:w-[50vw] mt-3">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <div className="text-center w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[brown]">
              About
            </h1>
            <p className="text-black leading-relaxed text-sm md:text-base font-[Poppins]">
              Yoga has been the way of life for centuries. By building Yogi we
              have built a Yoga trainer website where learners can select the
              pose that they intend to do correctly with the ease of being at
              home.
            </p>
            <p className="text-black leading-relaxed text-sm md:text-base font-[Poppins] text-justify mt-2">
              This AI first predicts keypoints or coordinates of different parts
              of the body(basically where they are present in an image) and then
              it use another classification model to classify the poses if
              someone is doing a pose and if AI detects that pose and then it
              will notify you are doing correctly(by making virtual skeleton
              green). We have used Tensorflow Posenet Model To Predict the
              Keypoints and building a neural network top of that which uses
              these coordinates and classify a yoga pose. We have trained the
              model in python because of tensorflowJS we can leverage the
              support of browser so I converted the keras/tensorflow model to
              tensorflowJS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
