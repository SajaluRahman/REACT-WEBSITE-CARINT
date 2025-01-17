import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full text-white bg-[#04233b]">
      <div className="w-full h-auto lg:h-[40vh] py-6">
        <div className="flex justify-center items-center h-full">
          <div className="w-[90%] lg:w-[70%] grid grid-cols-1 lg:grid-cols-4 gap-8">
           
            <div>
              <h1 className="text-[25px]">Address</h1><br />
              <p className="py-1">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ml-2">location</span>
              </p>
              <p className="py-1">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ml-2">Call +01 1234567890</span>
              </p>
              <p className="py-1">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-2">abcde@gmail.com</span>
              </p>
            </div>

            
            <div>
              <h1 className="text-[25px]">Info</h1><br />
              <p className="w-[80%]">
                Lorem Ipsum text goes here, used for generating content.
              </p>
            </div>

            
            <div>
              <h1 className="text-[25px]">Links</h1>
              <p className="py-1"><Link to='/'>Home</Link></p>
              <p className="py-1"><Link to='/About'>About</Link></p>
              <p className="py-1"><Link to='/Service'>Service</Link></p>
              <p className="py-1"><Link to='/Contact'>Contact Us</Link></p>
            </div>

            
            <div>
              <h1 className="text-[25px] py-1">Subscribe</h1>
              <form action="" className="py-2">
                <input
                  type="email"
                  className="bg-transparent border-b-2 placeholder:text-white py-1 w-[80%]"
                  placeholder="Enter Email"
                />
              </form>
              <button className="py-3 bg-[#0a97b0] w-[80%]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center text-white lg:text-black text-[18px] mt-8">
          © 2024 All Rights Reserved By Free Html Templates
        </div>
      </div>
    </div>
  );
}

export default Footer;
