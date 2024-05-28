import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';

function Header() {
  const [openNavDropdown, setOpenNavDropdown] = useState(false);
  const window_width = window.outerWidth;
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenNavDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='flex flex-row items-center justify-between w-[96vw] h-[8vh]'>
      <Link to="/"><img className="h-[30px]" src={logo1} alt="error" /></Link>
      {window_width > 1000 ? (
        <div className='nav_items h9'>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      ) : (
        <div className='flex flex-col justify-start relative' ref={dropdownRef}>
          <div
            className='w-[20px] flex flex-col gap-1 cursor-pointer bg-black'
            onClick={() => setOpenNavDropdown(!openNavDropdown)}
          >
            <div className='w-full border-[1px] border-white'></div>
            <div className='w-full border-[1px] border-white'></div>
            <div className='w-full border-[1px] border-white'></div>
          </div>
          {openNavDropdown && (
            <div className='absolute top-6 right-0 bg-black opacity-90 px-3 py-2 rounded-lg flex flex-col gap-2 text-[12px]'>
              <Link to="/about" className='cursor-pointer hover:text-[#AA14F0]'>About</Link>
              <Link to="/services" className='cursor-pointer hover:text-[#AA14F0]'>Services</Link>
              <Link to="/blogs" className='cursor-pointer hover:text-[#AA14F0]'>Blogs</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
