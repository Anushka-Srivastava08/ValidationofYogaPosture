import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Contact/Contact.css';
import SheetDB from 'sheetdb-js';

const SHEETDB_URL = 'https://sheetdb.io/api/v1/9f4x3nbf679yz';

SheetDB.read(SHEETDB_URL, {}).then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
function createNewRow({ name, phone, email, msg, rating }) {
  SheetDB.write(SHEETDB_URL, {
    sheet: 'Sheet1',
    data: { name, phone, email, message: msg, rating }
  }).then(
    function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    }
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({});
  return (
    <div className="about-container1 h-screen w-screen flex justify-center items-center flex-col">
      <div>
        <Link to="/" className="btn start-btn">
          Home
        </Link>
      </div>
      <div
        className="w-full md:p-16 p-4 md:max-w-3xl mx-10"
        style={{
          backgroundColor: 'hsl(31, 52%, 90%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '2rem',
          color: 'brown',
          marginTop: '2rem'
        }}
      >
        <h1 className="about-heading">Contact Us</h1>
        <br></br>
        <div className="about-main mx-3">
          <p className="about-content">
            Yogi aims to help our users become their best mental, physical and
            spiritual selves through yoga. Please help us to improve our
            services for you
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'hsl(31, 52%, 90%)',
            padding: '0rem ',
            maxWidth: '75vw',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0rem auto',
            flexDirection: 'column',
            borderRadius: '2rem',
            color: 'brown'
          }}
        >
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target[0].value;
              const phone = e.target[1].value;
              const email = e.target[2].value;
              const msg = e.target[3].value;
              const rating = e.target[4].value;
              createNewRow({ name, phone, email, msg, rating });
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '100%',
              width: '100%',
              margin: '0 auto',
              gap: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <label
                htmlFor="name"
                style={{
                  color: 'black',
                  flex: 1
                }}
              >
                Your Name
              </label>
              <input
                required
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                type="text"
                name=""
                id="name"
                style={{
                  color: 'black',
                  flex: 1,
                  width: '100%'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <label
                htmlFor="name"
                style={{
                  color: 'black',
                  flex: 1
                }}
              >
                Phone Number
              </label>
              <input
                required
                placeholder="Enter Your 10 digit Contact Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                }
                type="text"
                pattern="[789][0-9]{9}"
                style={{
                  color: 'black',
                  flex: 1,
                  width: '100%'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <label
                htmlFor="name"
                style={{
                  color: 'black',
                  flex: 1
                }}
              >
                Your Email
              </label>
              <input
                required
                placeholder="Enter Your Valid E-mail id"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value
                  })
                }
                type="email"
                name=""
                id="name"
                style={{
                  color: 'black',
                  flex: 1,
                  width: '100%'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column'
              }}
            >
              <label
                htmlFor="name"
                style={{
                  color: 'black',
                  flex: 1
                }}
              >
                Your Message
              </label>
              <input
                required
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value
                  })
                }
                type="textarea"
                name=""
                id="name"
                style={{
                  color: 'black',
                  flex: 1,
                  width: '100%'
                }}
              />
            </div>

            <select
              name=""
              id=""
              // value={formData.message}
              onChange={(e) => {
                console.log(e.target.value);
                setFormData({
                  ...formData,
                  rating: e.target.value
                });
              }}
              style={{
                color: 'black',
                flex: 1,
                width: '100%',
                padding: '0.5rem'
              }}
            >
              <option value="Give us a rating" disabled selected>
                Give us a rating
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <center>
              <div>
                <Link to="/">
                  <button className="btn">Submit </button>
                </Link>
              </div>
            </center>
          </form>
        </div>
        {/* <button
   className="primary"
   onClick={() => {
   // createNewRow({
   // 	name: '',
   // 	phone: 'anuj',
   // 	email: 'anuj',
   // 	msg: 'anuj'
   // });
   console.log({ formData });
   }}
  >
   Add new row
  </button> */}
      </div>{' '}
    </div>
  );
}
