import React, { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import Hiw from './howitworks'
import Navbar from './Navbar';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Logo2.png';
import person1 from './person1.jpg'
import person2 from './person2.jpg'
import person3 from './person3.jpg'
import person4 from './person4.jpg'
import corp1 from './corp1.jpg'
import corp2 from './corp2.jpg'
import corp3 from './corp3.jpg'


const Landing = () => {
          
      const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };


    //   const [currentIndex, setCurrentIndex] = useState(0);

    //   const images = [
    //     corp1,
    //     corp2,
    //     corp3,
    //   ];
    
    //   useEffect(() => {
    //     const slideInterval = setInterval(() => {
    //       setCurrentIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //       );
    //     }, 3000); // Change slide every 3 seconds
    
    //     return () => clearInterval(slideInterval); // Cleanup interval on unmount
    //   }, [images.length]);
    
    //   const nextSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    //   };
    
    //   const prevSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    //   };

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
      <div className="w-full h-[50rem] bg-blue-500 flex items-center justify-center text-white text-2xl font-bold relative">
        <img src={corp1} alt="" className="w-full h-[50rem] object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-40"></div>
        <div className="absolute text-center z-[90] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
            <h1 className="md:text-[50px] text-[26px]">We are,</h1>
            <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
            <p className="md:text-[22px] text-[14px] text-[white]">AI platform to join startup and investors</p>                
        </div>
      </div>,

      <div className="w-full h-[50rem] bg-red-500 flex items-center justify-center text-white text-2xl font-bold">
        <img src={corp2} alt="" className="w-full h-[50rem] object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-40"></div>
        <div className="absolute text-center z-[90] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
            <h1 className="md:text-[50px] text-[26px]">We are,</h1>
            <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
            <p className="md:text-[22px] text-[14px] text-[white]">AI platform to join startup and investors</p>                
        </div>
      </div>,

      <div className="w-full h-[50rem] bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
        <img src={corp3} alt="" className="w-full h-[50rem] object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 z-40"></div>
        <div className="absolute text-center z-[90] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
            <h1 className="md:text-[50px] text-[26px]">We are,</h1>
            <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
            <p className="md:text-[22px] text-[14px] text-[white]">AI platform to join startup and investors</p>                
        </div>
      </div>,

    ];
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }, [slides.length]);

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
                        <div className="relative">
                          <p>Home</p>
                          <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div>
                         
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
                        <div className="relative text-[#6c6c6c]">
                          <p>For Startups</p>
                          {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                          )}
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

    <div className='bg-gradient-to-r from-gray-200 via-gray-200 to-lime-500'>

        {/* <div className="heroone flex justify-between">

            <div className="herooneleft pl-[30px] pt-[120px]">
                <div className=''>
                    <h1 className='text-[64px] font-semibold'>Back The Business You Care About</h1>
                    <p className='text-[46px] font-normal text-[#333] mt-[10px]'>Invest in emerging Indian startups</p>
                    <p className='text-[24px] font-normal max-w-[52%] text-[#333] my-[25px]'> Welcome to Venture Loop Technologies: where startup founders and investors connect seamlessly for mutual success.</p>
                    <div>
                        <div className='relative group w-[204px]'>
                            <div className='bg-[#222] px-[12px]  w-[204px] h-[56px] text-[white] flex justify-center items-center relative z-10'>
                                <a href="/"><button className="border-0 text-[16px] font-medium">Invest Now</button></a>
                            </div>
                            <div className='w-[204px] h-[56px] absolute z-0 top-[6px] left-[6px] bg-[#aeaea8] group-hover:hidden'></div>
                        </div>
                    </div>
                    <p className='text-[18px] font-light mt-[20px]'>
                        Already a member?
                       
                        <a href="">
                            <span className='text-[18px] font-medium underline decoration-solid'>Login here</span>
                        </a>
                    </p>

                </div>
            </div>

            <div className="herooneright pr-[15px] mt-[62px] md:block hidden">
                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findianmen.afef4f17.png&w=1920&q=75" alt="" className='w-[510px] h-[628px]'/>
            </div>
        </div>  */}

        {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">

        <div className="relative h-[210px] overflow-hidden rounded-lg md:h-[644px]">
            
            <div className="hidden duration-700 ease-in-out " data-carousel-item>
                <img src={corp1} className="brightness-50 object-contain absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." loading="eager"/>
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
                <div className="absolute text-center z-[100] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
                    <h1>We are,</h1>
                    <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
                    <p className="md:text-[22px] text-[14px] text-[white]">Bridging ideas with opportunities for startups & investors</p>                
                </div>
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={corp2} className="object-contain absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." loading="eager"/>
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
                <div className="absolute text-center z-[100] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
                    <h1>We are,</h1>
                    <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
                    <p className="md:text-[22px] text-[14px] text-[white]">AI platform to join startup and investors</p>                
                </div>
                
            </div>
            
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={corp3} className="object-contain absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." loading="eager"/>
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70"></div>
                <div className="absolute text-center z-[100] flex flex-col justify-center items-center text-white md:text-[50px] text-[24px] font-semibold  w-full h-full p-[15px]">
                    <h1>We are,</h1>
                    <span><img src={logo} alt="" className="logo sm3:w-[300px] w-[160px] my-[16px]"/></span>
                    <p className="md:text-[22px] text-[14px] text-[white]">Where everyone works get executed</p>                
                </div>
            </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
        </div> */}

        {/* <div className="w-full mx-auto relative">
        
        <div className="overflow-hidden rounded-lg">
            <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-[50rem] object-cover"
            />
        </div>

        Navigation Buttons 
        <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
            ❮
        </button>
        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
            ❯
        </button> 

        <div className="flex justify-center mt-4 space-x-2 absolute bottom-[12px] left-[50%]">
            {images.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
            ></button>
            ))}
        </div>
        </div> */}

        <div className="w-full mx-auto relative">
        {/* Slides */}
        <div className="overflow-hidden rounded-lg">
            {slides[currentIndex]}
        </div>

        {/* Navigation Buttons */}
        {/* <button
            onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
            ❮
        </button>
        <button
            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
            ❯
        </button> */}

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2 absolute bottom-[12px] left-[50%]">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-400" : "bg-white"
                }`}
            ></button>
            ))}
        </div>
        </div>

        
    </div>

    <div className='bg-gradient-to-r from-lime-500 via-gray-200 to-gray-200 relative'>

        <div className='herotwo px-[50px] pt-[100px] pb-[50px] relative z-50'>
            <div className='herotwohdng flex flex-col justify-center'>
                <div className='flex justify-center'><h1 className='text-[56px] font-semibold text-center'>What We Offer At Venture Loop</h1></div>
            </div>

            <div className='flex gap-[70px] justify-center px-[40px] mt-[40px] flex-wrap lg:flex-nowrap'>

                <div className="left min-w-[378px] p-[30px] bg-white lg:w-[49%] flex flex-col justify-between hover:bg-[#437975] border-[1px] border-black">
                    <div>
                        <div className="rocketlogo"><img src="https://www.creddinv.in/_next/static/media/plainIcon.45657af0.svg" alt="" /></div>

                        <p className='text-[30px] font-semibold my-[20px]'>For Startup Founders</p>

                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Transparent, easy access to capital through campaigns</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Visibility and engagement within the investment and/or startup community</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Strategic guidance on fundraising</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Interactive dashboard to access updated information</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Post fundraising support</span>
                            </p>
                        </div>
                    </div>
                   
                    <div className='flex justify-between mt-[30px] flex-wrap'>


                        <div className='relative group'>

                            <p className='campaign-button w-[300px] lg:w-[169px] bg-[#222] text-white py-[15px] px-[24px] max-w-[300px]  flex justify-center items-center gap-[7px] my-[10px] relative z-10 shadow-custom4 hover:shadow-none ease-in duration-150'>
                                <img src="https://www.creddinv.in/_next/static/media/capmaignButtonIcon.1d1bf39c.svg" alt="" />
                                <a href="">Start a campaign</a>
                            </p>

                            {/* <div className='absolute z-0 w-[160px] h-[48px] bg-[#aeaea8] bottom-[6px] left-[6px] group-hover:hidden'></div> */}


                        </div>

                        <div className='relative group'>

                            
                                <p className='campaign-button w-[300px] lg:w-[176px] bg-white text-black py-[15px] px-[44px] max-w-[300px]  flex items-center justify-center gap-[7px] border-[1px] border-[#222] my-[10px] relative z-10 shadow-custom4 hover:shadow-none ease-in duration-150'>
                                    <img src="https://www.creddinv.in/_next/static/media/arrowIcon.6ad4ee13.svg" alt="" />
                                    Know more
                                </p>
                            

                            {/* <div className='absolute z-0 w-[174px] h-[49px] bg-[#aeaea8] bottom-[6px] left-[6px]  group-hover:hidden'></div> */}

                        </div> 
                    </div>
                </div>

                <div className="right min-w-[378px] p-[30px] bg-white lg:w-[49%] flex flex-col justify-between hover:bg-[#437975] border-[1px] border-black">
                    <div>

                        <div className='treelogo'><img src="https://www.creddinv.in/_next/static/media/investor_big_icon.fcff7328.svg" alt="" /></div>

                        <p className='text-[30px] font-semibold my-[20px]'>For Investors</p>

                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Easy online customer registration process</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Minimum investment to grow your wealth over time</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Diversified array of startups to invest in</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Customized dashboard to monitor investments</span>
                            </p>
                        </div>
                        <div>
                            <p className='flex my-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" className='mr-[10px]'/>
                                <span className='text-[18px] font-semibold'>Post investment updates and portfolio review</span>
                            </p>
                        </div>

                    </div>

                    <div className='flex justify-between mt-[30px] flex-wrap'>

                        <div className='relative group'>

                            <p className='bg-[#222] w-[300px] lg:w-[169px] text-white py-[15px] px-[24px] max-w-[300px] flex justify-center items-center gap-[7px] my-[10px] relative z-10 shadow-custom4 hover:shadow-none ease-in duration-150'>
                                <img src="https://www.creddinv.in/_next/static/media/capmaignButtonIcon.1d1bf39c.svg" alt="" />
                                <a href="">Start a campaign</a>
                            </p>

                            {/* <div className='absolute z-0 w-[160px] h-[48px] bg-[#aeaea8] bottom-[6px] left-[6px] group-hover:hidden'></div> */}


                        </div>

                        <div className='relative group'>

                            
                                <p className='bg-white w-[300px] lg:w-[176px] text-black py-[15px] px-[44px] flex items-center justify-center gap-[7px] border-[1px] border-[#222] my-[10px] relative z-10 shadow-custom4 hover:shadow-none ease-in duration-150'>
                                    <img src="https://www.creddinv.in/_next/static/media/arrowIcon.6ad4ee13.svg" alt="" />
                                    Know more
                                </p>
                            

                            {/* <div className='absolute z-0 w-[174px] h-[49px] bg-[#aeaea8] bottom-[6px] left-[6px]  group-hover:hidden'></div> */}

                        </div> 
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-black h-[30%] w-full absolute bottom-0'></div>

    </div>

    <div className='bg-[#e8e8e0]'>

        <div className="herothree flex items-end px-[30px] py-[50px] gap-[30px] flex-wrap">

            
            <div className="landingherothreeleft  w-full ">

                <h1 className='text-[56px] font-semibold leading-[68px] mb-[50px]'> Stay On Top Of Everything With Your Interactive Dashboards</h1>

                <div className='herothreeleftrightcont flex gap-[40px] w-full flex-wrap md2:flex-nowrap'>

                    <div className='herothreeelefta min-w-[48%] w-full md2:w-[48%] p-[20px] bg-[#f4f4f4] border-[1px] border-black hover:bg-[#437975]'>

                        <h1 className='text-[26px] font-semibold'>For Startup</h1>

                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Campaign status</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Funds raised via equity / debt</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Transaction reports and updates</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Closed campaign updates</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Post fundraising support & mentorship</span>
                            </p>
                        </div>
                    </div>

                    <div className='herothreerighta min-w-[48%] w-full md2:w-[48%] p-[20px] bg-[#f4f4f4] border-[1px] border-black hover:bg-[#437975]'>

                        <h1 className='text-[26px] font-semibold'>For Investors</h1>

                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Product (Premium Series/AIF/Venture Debt)</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Live campaigns</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Investment portfolio</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Transaction reports and updates</span>
                            </p>
                        </div>
                        <div className=' mt-[15px]'>
                            <p className='text-[16px] font-light flex gap-[10px]'>
                                <img src="https://www.creddinv.in/_next/static/media/pointsIcon.a2a6fdcb.svg" alt="" />
                                <span>Closed campaign updates</span>
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            {/* <div className="herothreeright xl2:w-[42%] w-full  flex justify-center items-end">
                <img src="https://www.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fimages%2Fstartup-dashboard.png&w=384&q=100" alt="" className='md:w-[600px] w-full h-auto'/>
            </div> */}

        </div>

    </div>

    <div className='bg-gradient-to-r from-lime-500 via-gray-200 to-gray-200 relative px-[10px] py-[10px]'>
        {/* <div className='herofour flex gap-[30px] flex-wrap'>
            <div className="herofourleft lg2:w-[45%] w-full">
                <img src={person1} alt="" className='w-full h-auto'/>
            </div>
            <div className="herofourright lg2:w-[52%] w-full">
                <h1 className='text-[56px] font-semibold text-white'>How Does It Work?</h1>

                <div className='my-[30px] relative'>

                    <div className='shadow-custom5 border-[1px] border-white  px-[20px] py-[18px] relative z-10 bg-[white]'>
                        <p className='flex gap-[15px]'>
                            <img src="https://www.creddinv.in/_next/static/media/starYellowIcon.df017397.svg" alt="" />
                            <span className=' text-[18px] font-[400]'>Startup registers with Venture Loop</span>
                        </p>
                    </div>

                    
                </div>

                <div className='my-[30px] relative'>

                    <div className='shadow-custom5 border-[1px] border-white px-[20px] py-[18px] relative z-10'>
                        <p className='flex gap-[15px]'>
                            <img src="https://www.creddinv.in/_next/static/media/starYellowIcon.df017397.svg" alt="" />
                            <span className='text-[white] text-[18px] font-[400]'>Startup's campaign goes live on Venture Loop platform</span>
                        </p>
                    </div>
                    

                </div>

                <div className='my-[30px] relative'>

                    <div className='shadow-custom5 border-[1px] border-white my-[30px] px-[20px] py-[18px] relative z-10'>
                        <p className='flex gap-[15px]'>
                            <img src="https://www.creddinv.in/_next/static/media/starYellowIcon.df017397.svg" alt="" />
                            <span className='text-[white] text-[18px] font-[400]'>Investors choose to invest during the campaign period</span>
                        </p>
                    </div>
                  
                </div>

                <div className='my-[30px] relative'>

                    <div className='shadow-custom5 border-[1px] border-white my-[30px] px-[20px] py-[18px] relative z-10'>
                        <p className='flex gap-[15px]'>
                            <img src="https://www.creddinv.in/_next/static/media/starYellowIcon.df017397.svg" alt="" />
                            <span className='text-[white] text-[18px] font-[400]'>Campaign wraps up, and startup secures funds through Venture Loop's streamlined post-closure process</span>
                        </p>
                    </div>
                   

                </div>


                <div className='my-[30px] relative'>

                    <div className='shadow-custom5 border-[1px] border-white my-[30px] px-[20px] py-[18px] relative z-10'>
                        <p className='flex gap-[15px]'>
                            <img src="https://www.creddinv.in/_next/static/media/starYellowIcon.df017397.svg" alt="" />
                            <span className='text-[white] text-[18px] font-[400]'>Investments get reflected on both the investor and startup dashboards, providing real-time updates</span>
                        </p>
                    </div>
                   

                </div>

            </div>
        </div>  */}
        <Hiw/>
    </div>

    <div className='bg-gradient-to-r from-gray-200 via-gray-200 to-lime-500 relative py-[100px] flex flex-col justify-center items-center p-[15px]'>

        <h1 className='text-[56px] font-semibold leading-[84px]'>We Are The Nexus You Need</h1>

        <div className='flex items-center justify-center gap-[30px] p-[40px] mt-[40px] flex-wrap lg3:flex-nowrap'>
            
            <div className="herofiveleft max-w-[26%] min-w-[229px] flex flex-col items-center py-[40px] px-[30px]">
                <div className='w-[100px]'><img src="https://www.creddinv.in/_next/static/media/startupplain_icon.e0576560.svg" alt="" /></div>
                <h3 className='text-[24px] font-medium my-[20px]'>Starup founder</h3>
                <p className='text-[16px] font-[400] text-center'>Fuel your innovations by raising funds through our interactive platform</p>
            </div>

            <div className="herofiveleftarrow lg3:max-w-[100px] w-full flex items-center justify-center">
                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowAnimation.44b7fcad.gif&w=1080&q=75" alt="" className='lg3:w-full lg3:rotate-0 h-auto w-[60px]  rotate-90'/>
            </div>

            <div className='relative  max-w-[65%] min-w-[229px] '>

                <div className="herofivecenter shadow-custom6 hover:shadow-none ease-in duration-150 bg-[#437975] flex flex-col items-center py-[40px] px-[30px] relative z-10">
                    <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'><img src={logo2} alt="logo"  className="w-[80px] h-[auto]"/></div>
                    <h3 className='text-[24px] font-medium my-[20px]'>Venture Loop Platform</h3>
                    <p className='text-[16px] font-[400] text-center'>Bridging ideas with opportunities for startups & investors</p>
                </div>

                {/* <div className='w-[374px] h-[304px] absolute z-0 bg-[#8eaf93] top-[6px] left-[6px]'></div> */}

            </div>

            <div className="herofivecenterrightarrow lg3:max-w-[100px] w-full flex items-center justify-center rotate-180">
                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowAnimation.44b7fcad.gif&w=1080&q=75" alt="" className='lg3:w-full lg3:rotate-0 h-auto w-[60px] rotate-90'/>
            </div>

            <div className="herofivecenterright  max-w-[65%] min-w-[229px] flex flex-col items-center py-[40px] px-[30px]">
                <div className='w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center'><img src="https://www.creddinv.in/_next/static/media/investormen_icon.1e8c148c.svg" alt="logo" /></div>
                <h3 className='text-[24px] font-medium my-[20px]'>Investor</h3>
                <p className='text-[16px] font-[400] text-center'>Unlock the potential & grow your wealth exponentially</p>
            </div>

        </div>

        <div>
            <div className='relative group shadow-custom6 hover:shadow-none ease-in duration-150'>
                <a href="">
                    <button className='text-[16px] font-medium bg-[#222] text-white min-w-[204px] min-h-[56px] relative z-10'>Register Now</button>
                </a>
                {/* <div className='min-w-[204px] min-h-[56px] absolute z-0 bg-[#8eaf93] top-[6px] left-[6px] group-hover:hidden'></div> */}
            </div>
        </div>

    </div>

    <div className='bg-[#f0f0eb] px-[3%] pb-[6%]'>
        <div className='px-[2%] pt-[4%] pb-[2%]'>

            <div className='px-[15px]'>

                <div className='footerfirstrow  mx-auto w-full flex flex-wrap lg2:flex-nowrap'>

                    <div className='footerfirstrowfirstcol flex pr-[15px] flex-col lg2:items-start items-center w-full lg2:w-[41.66666667%] '>
                        {/* <div className='w-[240px] h-[70px] bg-green-100 flex justify-center items-center'> YOUR LOGO</div> */}
                        <img src={logo} alt="" className='w-[240px]'/>
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

export default Landing
