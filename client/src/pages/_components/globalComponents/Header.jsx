import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-blue-500 p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <div className='logo text-white text-xl font-bold'>
          <Link to='/'>Blood Donation System</Link>
        </div>
        <ul className='flex gap-10 justify-center'>
          <li className='mr-4'>
            <Link to='/' className='text-white hover:text-gray-200'>
              Home
            </Link>
          </li>
          <li className='mr-4'>
            <Link to='/donate-now' className='text-white hover:text-gray-200'>
              Donate Now
            </Link>
          </li>
          <li className='mr-4'>
            <Link to='/donate' className='text-white hover:text-gray-200'>
              Register As Donor
            </Link>
          </li>
          <li className='mr-4'>
            <Link to='/recipient' className='text-white hover:text-gray-200'>
              Recipient
            </Link>
          </li>
          <li className='mr-4'>
            <Link to='/inventory' className='text-white hover:text-gray-200'>
              Inventory
            </Link>
          </li>
          <li>
            <Link to='/volunteering' className='text-white hover:text-gray-200'>
              Volunteering
            </Link>
          </li>
          <li className='mr-4'>
            <Link to='/about-us' className='text-white hover:text-gray-200'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
