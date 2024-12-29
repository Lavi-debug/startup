// import React from 'react'
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className='bg-gray-200 border-b-[1px] border-black md4:pl-[60px] md4:pr-[60px] pl-[20px] pr-[20px] py-[10px]'>
//         <div className='flex justify-between'>
//             <div className="logo sm3:w-[220px] sm3:h-[60px] w-[160px] h-[60px] bg-green-100 flex justify-center items-center">
//                 <h1>YOUR LOGO</h1>
//             </div>
//             <div className='options flex items-center gap-[38px] relative'>

//                 <div className='navigation hidden md4:block'>
//                     <ul className='flex items-center gap-[38px] text-[14px]'>
//                         <li>
//                             <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>Home</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>For Partners</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/forstartups" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>For Startups</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/forinvestors" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>For Investors</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>About Us</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
//                                 <div>
//                                      <p>Contact</p>
//                                      <div className={isActive ? "underline visible" : "underline hidden"}></div>
//                                 </div>
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className='login-signup relative group mr-[40px] shadow-custom1'>
//                     <NavLink to='/investorlogin' className='bg-[#222] py-[6px] md3:px-[24px] px-[14px] flex justify-center items-center text-white md3:text-[14px] text-[10px] font-semibold relative z-10'>
//                         <h1>Login /Signup</h1>
//                     </NavLink>
//                     {/* <div className='w-[135px] h-[34px] bg-[#aeaea8] absolute z-0 top-[6px] left-[4px] group-hover:hidden'></div> */}
//                 </div>

//                 <p className="absolute h-[30px] w-[26px] right-[-10px] block md4:hidden"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars hamburger_menu" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></p>

//             </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  

  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <nav className="bg-gray-200 border-b-[1px] border-black md4:pl-[60px] md4:pr-[60px] pl-[20px] pr-[20px] py-[10px]">
        <div className="flex justify-between">
          <div className="logo sm3:w-[220px] sm3:h-[60px] w-[160px] h-[60px] bg-green-100 flex justify-center items-center">
            <h1>YOUR LOGO</h1>
          </div>
          <div className="options flex items-center gap-[38px] relative">
            <div className="navigation hidden md4:block">
              <ul className="flex items-center gap-[38px] text-[14px]">
                <li>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>Home</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>For Partners</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forstartups" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>For Startups</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forinvestors" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>For Investors</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>About Us</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                      <p>Contact</p>
                      {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                      )}
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="login-signup relative group mr-[40px] shadow-custom1">
              <NavLink to="/investorlogin" className="bg-[#222] py-[6px] md3:px-[24px] px-[14px] flex justify-center items-center text-white md3:text-[14px] text-[10px] font-semibold relative z-10">
                <h1>Login /Signup</h1>
              </NavLink>
            </div>

            <p onClick={toggleMenu} className="absolute h-[30px] w-[26px] right-[-10px] block md4:hidden">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars hamburger_menu" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </p>
          </div>

          <div className={`w-[70%] absolute bg-green-400 top-[81px] right-[0] block md4:hidden z-[100] ${isMenuVisible ? 'block' : 'hidden'}`}>

            <ul className="flex flex-col items-start gap-[38px] text-[12px] font-semibold pl-[60px]">
                <li className='mt-[38px]'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>Home</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
                <li>
                <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>For Partners</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
                <li>
                <NavLink to="/forstartups" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>For Startups</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
                <li>
                <NavLink to="/forinvestors" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>For Investors</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
                <li>
                <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>About Us</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
                <li className='mb-[38px]'>
                <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                    <div className="relative">
                    <p>Contact</p>
                    {({ isActive }) => (
                        <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                    )}
                    </div>
                </NavLink>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
