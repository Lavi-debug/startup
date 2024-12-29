import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/Logo.png'

const Forstartups = () => {

    
      const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

  return (
    <>
       <nav className="bg-gray-200 border-b-[1px] border-black md4:pl-[60px] md4:pr-[60px] pl-[20px] pr-[20px] py-[10px] sticky top-0 z-[100]">
            <div className="flex justify-between">
                {/* <div className="logo sm3:w-[220px] sm3:h-[60px] w-[160px] h-[60px] bg-green-100 flex justify-center items-center">
                <h1>YOUR LOGO</h1>
                </div> */}
                <img src={logo} alt="" className="logo sm3:w-[220px] w-[160px] my-[16px]"/>
                <div className="options flex items-center gap-[38px] relative">
                <div className="navigation hidden md4:block">
                    <ul className="flex items-center gap-[38px] text-[14px]">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#6c6c6c]">
                            <p>Home</p>
                            {/* <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div> */}
                        
                        </div>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#6c6c6c]">
                            <p>For Partners</p>
                            {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                            )}
                        </div>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/forstartups" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative ">
                            <p>For Startups</p>
                            <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div>
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/forinvestors" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#6c6c6c]">
                            <p>For Investors</p>
                            {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                            )}
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#6c6c6c]">
                            <p>About Us</p>
                            {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                            )}
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#6c6c6c]">
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
                    {/* <li>
                    <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative">
                        <p>For Partners</p>
                        {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                        )}
                        </div>
                    </NavLink>
                    </li> */}
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

        {/* <Navbar/> */}

        <section className="sectionone bg-green-500 flex flex-col justify-center items-center text-center min-h-[400px] relative overflow-hidden p-[15px]">
            <h1 className='text-[52px] leading-[93px] font-[600] relative z-10'>Turn Your Vision Into Reality</h1>
            <h1 className='text-[24px] font-[400] text-[#444]  relative z-10'>Welcome to VENTURE LOOP, where startups thrive and dreams take flight</h1>

            <img src="https://www.creddinv.in/_next/static/media/startup_rocket.acae1f6c.svg" alt="" className='absolute z-0 animate-slide-up-right w-[80px]'/>
            <img src="https://www.creddinv.in/_next/static/media/startup_rocket.acae1f6c.svg" alt="" className='absolute z-0 animate-slide-up-right1 w-[80px]'/>
            <img src="https://www.creddinv.in/_next/static/media/startup_rocket.acae1f6c.svg" alt="" className='absolute z-0 animate-slide-up-right2 w-[80px]'/>
        </section>

        {/* <section className="sectiontwo pt-[60px] pb-[120px] bg-[#e8e8e0]">
            <div className='mx-[86px] px-[15px]'>
                <div className='mx-[-15px]'>
                    <div className='px-[15px]'>

                        <h1 className='text-[48px] text-center font-[600] mb-[38px]'>Successfully funded campaigns</h1>

                        <div className='flex flex-wrap justify-center gap-[30px] mb-[56px]'>

                            <div className='relative'>

                                <div className='p-[24px] pb-[10px] max-w-[419px] bg-[#6bcd7bf2] relative z-10 border-[1px] border-black shadow-custom4'>

                                    <div className='blur-sm'>
                                        
                                        <div className='company-logo'>   
                                            <img alt="Company Logo" loading="lazy" src="https://www.creddinv.in/_next/static/media/tech-logo.4fb8f00e.svg"/>  
                                        </div>

                                        <div className='company-image my-[16px] flex flex-col justify-center items-center'>
                                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-techlogo3.d345662b.png&w=384&q=75" alt="" className='w-full' />
                                        </div>

                                        <div className='card-header relative'>
                                            <h1 className='text-[16px] font-[600] text-[#222]'>Techlogo Company</h1>
                                            <p className='text-[14px] font-[400] text-[#222]'>Kanakpura, Bengaluru</p>
                                            <span className='text-[15px] font-[500] bg-[#fff1dc] py-[5px] px-[12px] rounded-[30px] absolute top-0 right-0'>CSOP</span>
                                        </div>

                                        <div className='card-body py-[15px] pr-[15px]'>
                                            <p className='text-[12px] font-[400]'>Lorem ipsum dolor set lorem ipsuipsum dolor set lorem ipsm dolor set lorem ipsum dolor set Lorem ipsum dolor set lorem i...</p>
                                        </div>

                                        <div className='h-[8px] bg-[#b64f00] rounded-[20px] mb-[5px]'>
                                            <div className='w-[75%] bg-[#a72828] h-[8px]'></div> 
                                        </div>

                                        <div className='card-footer'>
                                            <div className='flex justify-between'>
                                                <div className='w-[200px] text-[14px] font-[400] pr-[15px] flex flex-col items-start'>
                                                    <p className="one-line mb-[8px]"><strong>10,000,000</strong> of 10,000,000</p>
                                                    <p>Raised</p>
                                                </div>

                                                <div className='w-[200px] text-[14px] font-[400] pl-[15px] flex flex-col items-end'>
                                                     <p className='mb-[8px]'><strong>2,942</strong></p>
                                                     <p>Investors</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''></div>

                                    </div>

                                </div>

                                <div className='absolute z-20 top-[25%] left-[25%]'><img src="https://www.creddinv.in/_next/static/media/coming-soon.30ea4b76.svg" alt="" /></div>
                            </div>

                            <div className='relative'>

                                <div className='p-[24px] pb-[10px] max-w-[419px] bg-[#6bcd7bf2] relative z-10 border-[1px] border-black  shadow-custom4'>

                                    <div className='blur-sm'>
                                        
                                        <div className='company-logo'>   
                                            <img alt="Company Logo" loading="lazy" src="https://www.creddinv.in/_next/static/media/tech-logo.4fb8f00e.svg"/>  
                                        </div>

                                        <div className='company-image my-[16px] flex flex-col justify-center items-center'>
                                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-techlogo3.d345662b.png&w=384&q=75" alt="" className='w-full' />
                                        </div>

                                        <div className='card-header relative'>
                                            <h1 className='text-[16px] font-[600] text-[#222]'>Techlogo Company</h1>
                                            <p className='text-[14px] font-[400] text-[#222]'>Kanakpura, Bengaluru</p>
                                            <span className='text-[15px] font-[500] bg-[#fff1dc] py-[5px] px-[12px] rounded-[30px] absolute top-0 right-0'>CSOP</span>
                                        </div>

                                        <div className='card-body py-[15px] pr-[15px]'>
                                            <p className='text-[12px] font-[400]'>Lorem ipsum dolor set lorem ipsuipsum dolor set lorem ipsm dolor set lorem ipsum dolor set Lorem ipsum dolor set lorem i...</p>
                                        </div>

                                        <div className='h-[8px] bg-[#b64f00] rounded-[20px] mb-[5px]'>
                                            <div className='w-[75%] bg-[#a72828] h-[8px]'></div> 
                                        </div>

                                        <div className='card-footer'>
                                            <div className='flex justify-between'>
                                                <div className='w-[200px] text-[14px] font-[400] pr-[15px] flex flex-col items-start'>
                                                    <p className="one-line mb-[8px]"><strong>10,000,000</strong> of 10,000,000</p>
                                                    <p>Raised</p>
                                                </div>

                                                <div className='w-[200px] text-[14px] font-[400] pl-[15px] flex flex-col items-end'>
                                                     <p className='mb-[8px]'><strong>2,942</strong></p>
                                                     <p>Investors</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''></div>

                                    </div>

                                </div>

                                <div className='absolute z-20 top-[25%] left-[25%]'><img src="https://www.creddinv.in/_next/static/media/coming-soon.30ea4b76.svg" alt="" /></div>
                            </div>

                            <div className='relative'>

                                <div className='p-[24px] pb-[10px] max-w-[419px] bg-[#6bcd7bf2] relative z-10 border-[1px] border-black shadow-custom4'>

                                    <div className='blur-sm'>
                                        
                                        <div className='company-logo'>   
                                            <img alt="Company Logo" loading="lazy" src="https://www.creddinv.in/_next/static/media/tech-logo.4fb8f00e.svg"/>  
                                        </div>

                                        <div className='company-image my-[16px] flex flex-col justify-center items-center'>
                                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-techlogo3.d345662b.png&w=384&q=75" alt="" className='w-full' />
                                        </div>

                                        <div className='card-header relative'>
                                            <h1 className='text-[16px] font-[600] text-[#222]'>Techlogo Company</h1>
                                            <p className='text-[14px] font-[400] text-[#222]'>Kanakpura, Bengaluru</p>
                                            <span className='text-[15px] font-[500] bg-[#fff1dc] py-[5px] px-[12px] rounded-[30px] absolute top-0 right-0'>CSOP</span>
                                        </div>

                                        <div className='card-body py-[15px] pr-[15px]'>
                                            <p className='text-[12px] font-[400]'>Lorem ipsum dolor set lorem ipsuipsum dolor set lorem ipsm dolor set lorem ipsum dolor set Lorem ipsum dolor set lorem i...</p>
                                        </div>

                                        <div className='h-[8px] bg-[#b64f00] rounded-[20px] mb-[5px]'>
                                            <div className='w-[75%] bg-[#a72828] h-[8px]'></div> 
                                        </div>

                                        <div className='card-footer'>
                                            <div className='flex justify-between'>
                                                <div className='w-[200px] text-[14px] font-[400] pr-[15px] flex flex-col items-start'>
                                                    <p className="one-line mb-[8px]"><strong>10,000,000</strong> of 10,000,000</p>
                                                    <p>Raised</p>
                                                </div>

                                                <div className='w-[200px] text-[14px] font-[400] pl-[15px] flex flex-col items-end'>
                                                     <p className='mb-[8px]'><strong>2,942</strong></p>
                                                     <p>Investors</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''></div>

                                    </div>

                                </div>

                                <div className='absolute z-20 top-[25%] left-[25%]'><img src="https://www.creddinv.in/_next/static/media/coming-soon.30ea4b76.svg" alt="" /></div>
                            </div>

                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='relative w-[238px] h-[56px] group'>

                                <button className='bg-[#222] px-[24px] py-[18px] flex justify-center items-center w-[238px] h-[56px] text-[12px] font-[700] text-white relative z-10'>
                                    <a href="">Register Now</a>
                                </button>
 
                                <div className='w-[238px] h-[56px] absolute z-0 bg-[#aeaea8] top-[6px] left-[6px] group-hover:hidden'></div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section> */}

        <section className='sectionthree py-[120px] bg-[#d9d9c9]'>
            <div className='mx-[85px] px-[15px]'>

                <div className='flex items-center flex-wrap lg4:flex-nowrap justify-center' >

                    <div className='px-[15px] flex flex-col items-center'>
                       <h1 className='text-[50px] font-[600] leading-[84px] mb-[38px] text-center lg4:text-left'>Unique Advantages for Startups</h1>

                       <div className='relative w-[238px] h-[56px] group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                <button className='bg-[#222] px-[24px] py-[18px] flex justify-center items-center w-[238px] h-[56px] text-[12px] font-[700] text-white relative z-10'>
                                    <a href="">Register Now</a>
                                </button>
 
                                {/* <div className='w-[238px] h-[56px] absolute z-0 bg-[#aeaea8] top-[6px] left-[6px] group-hover:hidden ease-in duration-300'></div> */}

                        </div>
                    </div>

                    <div className='px-[15px] mt-[80px] lg4:mt-[0px] '>

                        <div className="grid md2:grid-cols-2 md2:grid-rows-2 gap-6 grid-cols-1 ">

                            <div className='relative z-10 '>

                                <div className='bg-[#eaffce] flex flex-col gap-[10px] items-start py-[25px] px-[18px] max-w-[329px] relative z-10 border-[1px] border-black hover:bg-green-500 ease-in duration-300 shadow-custom4 w-full  min-h-[184px]'>

                                    <div><img src="https://www.creddinv.in/_next/static/media/icon-transparency-startup.3d7bd863.svg" alt="" /></div>

                                    <div>
                                        <h5 className='text-[#222] text-[16px] font-[600]'>Transparent Process</h5>
                                        <p className='text-[#222] text-[16px] font-[300]'>Easy and transparent process to access capital through campaign</p>
                                    </div>

                                </div>

                                {/* <div className='absolute z-0 bg-[#a3a397] top-[2px] left-[6px] h-full w-full'></div> */}

                            </div>

                            <div className='relative z-10'>

                                <div className='bg-[#fff1dc] flex flex-col gap-[10px] items-start px-[18px] py-[25px] max-w-[329px] relative z-10 border-[1px] border-black hover:bg-green-500 ease-in duration-300 shadow-custom4 w-full min-h-[184px]'>

                                    <div><img src="https://www.creddinv.in/_next/static/media/icon-community-startup.d838ed32.svg" alt="" /></div>

                                    <div>
                                        <h5 className='text-[#222] text-[16px] font-[600]'>Strategic Guidance</h5>
                                        <p className='text-[#222] text-[16px] font-[300]'>Get highlighted on community engagement</p>
                                    </div>

                                </div>

                                {/* <div className='absolute z-0 bg-[#a3a397] top-[2px] left-[6px] h-full w-full'></div> */}

                            </div>

                            <div className='relative z-10'>

                                <div className='bg-[#fff1dc] flex flex-col gap-[10px] items-start px-[18px] py-[25px] max-w-[329px] relative z-10 border-[1px] border-black hover:bg-green-500 ease-in duration-300 shadow-custom4 w-full  min-h-[184px]'>

                                    <div><img src="https://www.creddinv.in/_next/static/media/icon-advice-startup.4c95f3c1.svg" alt="" /></div>

                                    <div>
                                        <h5 className='text-[#222] text-[16px] font-[600]'>Complete Digital Process</h5>
                                        <p className='text-[#222] text-[16px] font-[300]'>Strategic guidance on business through expert advice</p>
                                    </div>

                                </div>

                                {/* <div className='absolute z-0 bg-[#a3a397] top-[2px] left-[6px] h-full w-full'></div> */}

                            </div>

                            <div className='relative z-10'>

                                <div className='bg-[#eaffce] flex flex-col gap-[10px] items-start px-[18px] py-[25px] max-w-[329px] relative z-10 border-[1px] border-black hover:bg-green-500 ease-in duration-300 shadow-custom4 w-full  min-h-[184px]'>

                                    <div><img src="https://www.creddinv.in/_next/static/media/icon-stats-startup.ccf80bfb.svg" alt="" /></div>

                                    <div>
                                        <h5 className='text-[#222] text-[20px] font-[600]'>Community Support</h5>
                                        <p className='text-[#222] text-[16px] font-[300]'>Easily accessible to information through our dedicated founder tab</p>
                                    </div>

                                </div>

                                {/* <div className='absolute z-0 bg-[#a3a397] top-[2px] left-[6px] h-full w-full'></div> */}

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>

        <section className="sectionfour bg-black py-[120px]">
            <div className='max-w-[1360px] mx-[85px] px-[15px]'>
                <div>
                    <div className='px-[15px] text-center'>

                        <h2 className='text-[40px] text-[white] font-[700] mb-[38px]'>Fuel Your Startup Journey with Our 
                            <span className='block text-[#50ff76] mt-[16px] font-[600]'>Funding Pathway</span></h2>

                        <div className='flex flex-wrap gap-[50px] justify-center content-center pt-[24px] pb-[70px] relative z-10'>


                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] group-hover:bg-green-500 rounded-[50%] border-[1px] border-white ease-in duration-300'>
                                    <img src="https://www.creddinv.in/_next/static/media/step1-icon-pitch.72605ede.svg" alt="" className='group-hover:scale-[140%] ease-in duration-300'/>
                                </div>

                                <div className='w-[70%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300] uppercase '>Step 1</h1>
                                    <p className='text-[12px] text-white font-[400]'>Submit Pitch Deck With Application Form</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step2-eval.df784ea2.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300]'>Step 2</h1>
                                    <p className='text-[12px] text-white font-[400]'>Initial Evaluation From IB Team</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step3-legal.5e6bac8f.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300] '>Step 3</h1>
                                    <p className='text-[12px] text-white font-[400]'>Financial & Legal Due Diligence</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step4-call.f265e4dc.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300]'>Step 4</h1>
                                    <p className='text-[12px] text-white font-[400]'>Founder’s Call & Feedback</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step5-agreement.74569d60.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300] uppercase group-hover:scale-[120%]'>Step 5</h1>
                                    <p className='text-[12px] text-white font-[400]'>Commitment & Term Sheet Signing</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step6-campaign.8b302af0.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300] uppercase'>Step 6</h1>
                                    <p className='text-[12px] text-white font-[400]'>Campaign Goes Live</p>
                                </div>
                            </div>

                            <div className='flex items-center flex-col gap-[24px] py-[25px] min-w-[284px] group'>
                                <div className='w-[92px] h-[92px] flex items-center justify-center bg-[#fff1dc] rounded-[50%] border-[1px] border-white group-hover:bg-green-500 ease-in duration-300'>
                                    <img className='group-hover:scale-[140%] ease-in duration-300' src="https://www.creddinv.in/_next/static/media/step7-register.9aedc9bc.svg" alt="" />
                                </div>

                                <div className='w-[60%] flex flex-col gap-[8px] group-hover:scale-[120%] ease-in duration-300'>
                                    <h1 className='text-[16px] text-white font-[300] uppercase '>Step 7</h1>
                                    <p className='text-[12px] text-white font-[400] '>Campaign Closure & Post Closure Procedure</p>
                                </div>
                            </div>
                            
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='relative w-[238px] h-[56px] group'>

                                <button className='bg-green-500 group-hover:bg-white px-[24px] py-[18px] flex justify-center items-center w-[238px] h-[56px] text-[12px] font-[700] text-[#222] relative z-10 ease-in duration-300'>
                                    <a href="" className=''>start a Campaign</a>
                                </button>
 
                                <div className='w-[238px] h-[56px] absolute z-0 bg-[#404040] top-[6px] left-[6px] group-hover:hidden ease-in duration-300'></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>    
        </section> 

        <section className="sectionfive py-[78px] p-[40px] relative flex items-center justify-center overflow-hidden bg-[url('https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-register-now.fb9832a1.jpg&w=3840&q=75')] h-full w-full bg-no-repeat bg-top">

            <div className="absolute inset-0 bg-black opacity-75 h-full w-full"></div>

            <div className='px-[15px] relative z-10 flex justify-center items-center'>
                <div>
                    <div className='px-[15px]'>
                        <h1 className='text-[40px] md:text-[50px] text-white font-[600] leading-[84px] mb-[38px] text-center'>Ready for an exciting journey to raise capital?</h1>

                        <div className='flex justify-center items-center'>

                            <div className='relative w-[238px] h-[56px] group'>

                                <button className='bg-green-500 group-hover:bg-white px-[24px] py-[18px] flex justify-center items-center w-[238px] h-[56px] text-[12px] font-[700] text-[#222] relative z-10 ease-in duration-300'>
                                    <a href="" className=''>Register Now</a>
                                </button>
 
                                <div className='w-[238px] h-[56px] absolute z-0 bg-[#404040] top-[6px] left-[6px] group-hover:hidden ease-in duration-300'></div>

                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>

        <section className='sectionsix pt-[120px] pb-[60px] min-h-[300px] bg-[#e8e8e0]'>

            <div className='px-[40px] w-full'>

                <div className='mb-[55px] text-center'>
                    <h1 className='text-[40px] text-[#222] font-[700] mb-[5px]'>Frequently Asked Questions</h1>
                </div>

                <div className='bg-[#f4f4f4] p-[15px] px-[35px]'>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">     
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen(!isOpen)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">1. How can Venture Loop help my startup raise funds?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Venture Loop connects your startup with a community of high-net-worth individuals (HNIs) and ultra-high-net-worth individuals (UHNIs) who are eager to invest in innovative ventures. With our Premium Series (private round investments), your startup gets access to a curated group of investors, allowing them to join your cap table as valued stakeholders.</p>

                                <p>Our investors come from diverse backgrounds and bring valuable experience, networks and insights to the startups they invest in.</p>

                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen1(!isOpen1)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">2. What are the fees for raising funds on Venture Loop?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen1
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen1 ? "Minus Icon" : "Plus Icon"}
                                />

                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen1 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Venture Loop charges a success fee on funds raised through startup campaigns. This fee supports the operational costs of our platform and enables us to provide high-quality services to both startups and investors.</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen2(!isOpen2)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">3. What type of funding rounds are supported on Venture Loop?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen2
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen2 ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen2 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Currently, we support private investment rounds that allow HNIs and UHNIs to participate in your startup’s growth. In the coming year, we plan to expand with Premium Series, AIF Category 1 and Venture Debt options to provide more fundraising pathways.</p>

                             

                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen3(!isOpen3)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">4. How can I get started with raising funds on Venture Loop?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen3
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen3 ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen3 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p  className='mb-[8px]'>To start, simply register on Venture Loop <a href="/" target="_blank" className='text-[#007bff]'>here</a> and submit your startup’s details. Our investment banking team will review your application and once approved, guide you through the setup process for your fundraising campaign.</p>

                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen4(!isOpen4)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">5. Can Venture Loop help my startup with follow-up rounds?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen4
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen4 ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen4 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Certainly. We’re committed to helping our partnered startups grow. CVenture Loop’s planned expansion into Premium Series and other funding options like AIF Category 1 and Venture Debt next year will create further opportunities for startups seeking capital beyond initial rounds.</p>

                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen5(!isOpen5)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">6. How does Venture Loop ensure the privacy of my startup’s information?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen5
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen5 ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen5 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Venture Loop uses secure technology to protect the confidentiality of your data. Only qualified investors are granted access to your campaign details, and we follow strict data privacy protocols to ensure that your information is secure.</p>

                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full mx-auto mt-10 ">
                        <div className="overflow-hidden border-b-[2px] border-[#cccccc]">
                
                            <div className="flex items-center justify-between pr-4 py-3 pb-[24px] cursor-pointer transition-colors w-[95%] ml-[24px]" onClick={() => setIsOpen6(!isOpen6)}>
                                <h3 className="text-[14px] font-[500] text-gray-800">7. How does the fund transfer take place?</h3>
                                <img
                                    className={`w-[30px] h-[22px] transform transition-transform`}
                                    src={
                                        isOpen6
                                        ? "https://www.creddinv.in/_next/static/media/icon-minus-sign.67ba863f.svg"
                                        : "https://www.creddinv.in/_next/static/media/icon-plus-sign.172f5021.svg"
                                    }
                                    alt={isOpen6 ? "Minus Icon" : "Plus Icon"}
                                />
                            </div>

                
                            <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${ isOpen6 ? "max-h-screen" : "max-h-0"}`}>
                            <div className="card-body ml-[24px] pb-[22px] text-[#222] text-[12px] font-[400]">

                                <p className='mb-[8px]'>Once investors make their online commitments, the invested amount is directly transferred to the startup’s bank account. Only after the funds are deposited in the startup's account is the deal considered finalised, at which point any public announcements can proceed.</p>

                            </div>
                            </div>
                        </div>
                    </div>

                </div>
  
            </div>
        </section>

        <div className='bg-[#f0f0eb] px-[3%] pb-[6%]'>
            <div className='px-[2%] pt-[4%] pb-[2%]'>

                <div className='px-[15px]'>

                    <div className='footerfirstrow  mx-auto w-full flex flex-wrap lg2:flex-nowrap'>

                        <div className='footerfirstrowfirstcol flex pr-[15px] flex-col lg2:items-start items-center w-full lg2:w-[41.66666667%] '>
                            {/* <div className='w-[240px] h-[70px] bg-green-100 flex justify-center items-center'> YOUR LOGO</div> */}
                            <img src={logo} alt="" className="logo sm3:w-[220px] w-[160px] my-[16px]"/>
                            <div className='lg:w-[85%] w-full mt-[1rem] lg2:flex-none lg2:items-start flex flex-col items-center'>
                                <p className='text-[0.875rem] font-semibold mb-[8px] text-center lg2:text-left'>Venture Loop Technologies Pvt Ltd.</p>
                                <h6 className='text-[14px] font-normal w-[67%] text-[#666] leading-[16px] text-center lg2:text-left'>12, Palm crest, Main Avenue road, Santacruz w, Mumbai- 400050</h6>
                                <p className='text-[14px] font-normal w-[67%] text-[#666] pt-[6px] text-center lg2:text-left'></p>
                            </div>
                            <div className='mt-[1rem]'>
                                <p className='text-[1rem] font-semibold color-[#222] text-center lg2:text-left'>App launching shortly</p>
                                <div className='flex gap-[0.5rem] mt-2'>
                                    <img src="https://www.creddinv.in/_next/static/media/google_play_store.c2fbe9b6.svg " alt="" />
                                    <img src=" https://www.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fimages%2Fdownload-on-the-app-store.png&w=128&q=75" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="footerfirstrowsecndcol flex flex-col lg2:items-start items-center px-[15px] w-full lg2:w-[33.33333333%]  lg2:mt-[0px] mt-[40px]">
                            <p className='text-[16px] font-semibold leading-[20.16px] mb-[2rem]'>Quick Links</p>
                            <div className='w-full flex gap-[80px] justify-center lg2:justify-start'>
                                <div className='flex flex-col gap-[1rem]'>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Home</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">For Startups</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">For Investors</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Terms of Use</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Privacy Policy</a></p>
                                    
                                </div>
                                <div className='flex flex-col gap-[1rem]'>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">About Us</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Knowledge Center</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Contact</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Risk Policy</a></p>
                                    <p className='text-[16px] font-normal leading-[20.16px] text-left mb-[8px]'><a href="">Refund Policy</a></p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="footerfirstrowthirdcol px-[15px] w-full lg2:w-[25%] flex flex-col gap-[40px] items-center lg2:items-start lg2:mt-[0px] mt-[40px]">
                            <div className='flex flex-col items-center lg2:items-start gap-[1rem]'>
                                <p className='text-[16px] font-semibold leading-[20.16px] text-left'>Contact with Us</p>
                                <div className='flex gap-[0.5rem]'>
                                    <a href=""><img src="https://www.creddinv.in/_next/static/media/linkden-logo.0dbd56fd.svg" alt="" className='w-[36px] h-[36px]' /></a>
                                    <a href="" className='w-[44px] h-[36px] flex justify-center items-center rounded-[4px] text-[11px] font-semibold bg-white '>Medium</a>
                                    <a href=""><img src="https://www.creddinv.in/_next/static/media/instagram.578f8d2d.svg" alt="" className='w-[36px] h-[36px]' /></a>
                                    <a href=""><img src="https://www.creddinv.in/_next/static/media/facebook-logo.7d8a1e50.svg" alt="" className='w-[36px] h-[36px]' /></a>
                                    <a href=""><img src="https://www.creddinv.in/_next/static/media/twitter-logo.d0271197.svg" alt="" className='w-[36px] h-[36px]' /></a>
                                    <a href=""><img src="https://www.creddinv.in/_next/static/media/youtube-logo.20f1f89a.svg" alt="" className='w-[36px] h-[36px]' /></a>
                                

                                </div>
                            </div>
                            <div className='flex flex-col items-center lg2:items-start gap-[10px]'>
                                <p className='text-[16px] font-semibold leading-[20.16px] text-left'>Certified By</p>
                                <div className='flex items-center gap-[20px]'>
                                    <img src="https://www.creddinv.in/_next/static/media/ISO_certified_logo.8aadd954.svg" alt="" />
                                    <img src="https://www.creddinv.in/_next/static/media/footerstartup.2ffdf8d3.svg" alt="" />
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <p className="footersecond row mt-[36px] mb-[8px] text-[11.5px] text-[#222] font-normal leading-[26px]"><strong className="text-dark"> Disclaimer: </strong> VentureLoop Technologies Private Limited (VentureLoop) owns and operates its website <a href="/"> www.VentureLoopv.in </a>&nbsp;(Platform), which is neither a registered stock exchange, an investment advisor nor a funding portal and is not registered with the Securities Exchange Board of India (SEBI). Nothing contained on this Platform shall be construed as an authorization by the SEBI to solicit investments nor should the Platform be construed as a SEBI authorized crowdfunding platform or a stock exchange, or their equivalent. The securities offered by any company registered on Platform are not traded on any stock exchange recognised by SEBI. VentureLoop does not allow any secondary market trading of securities on the Platform. By accessing this Platform and any pages thereof, you agree to be bound by the <a href="/termsofuse">&nbsp;Terms of Use </a>&nbsp;and <a href="/privacypolicy">&nbsp;Privacy Policy.</a> Investing in start-ups and early-stage businesses involves risks, including illiquidity, lack of dividends, loss of investment and dilution, and it should be done only as part of a diversified portfolio. VentureLoop is targeted exclusively at investors who are sufficiently sophisticated to understand these risks and make their own investment decisions. Please read our <a href="/riskpolicy">&nbsp;Risk Policy </a> for more information.</p>

                    <p className="footer_disclaimer mt-[36px] mb-[8px] text-[11.5px] text-[#222] font-normal leading-[26px]">Mutual Fund distribution services are offered through VentureLoop Technologies Pvt. Limited. AMFI Registration No.: <strong className='font-medium'>ARN -310253. </strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully. Terms and conditions of the website are applicable. Privacy policy of the website is applicable.</p>

                    <div className='w-full border-t-[1px] border-t-[#bdbdb9] mt-[18px] mb-[12px]'></div>

                    <div className='flex justify-between items-baseline flex-wrap sm:flex-nowrap'>
                        <p className='text-[11.5px] font-light text-center w-full sm:max-w-fit'>©2024 VentureLoop Technologies. All rights reserved.</p>
                        <div className='flex items-center justify-center w-full sm:max-w-fit'>
                            <p className='text-[12px] font-normal mt-[3px]'>Check us out on</p>
                            <img src="https://www.creddinv.in/_next/static/media/transction.a3989d2f.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Forstartups
