import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12'>
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          Welcome to Blood Donation System
        </h1>
        <p className='text-lg mb-8'>Saving lives one donation at a time</p>
        <div>
        <Link to="/donate">
          <button className='bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-500 mr-4'>
            Donate Now
          </button>
          </Link>
          <Link to="/about-us">
            <button className='bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-500'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
