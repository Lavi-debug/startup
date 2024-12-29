import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/Logo.png'

const Forinvestors = () => {

    
      const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };

    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 9; // Total number of slides
    const slideWidth = 743; // Width of each slide in pixels

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    };



    // const [isTranslated, setIsTranslated] = useState(false);

    // const handleToggle = () => {
    //   setIsTranslated((prev) => !prev);
    // };

    const [translateX, setTranslateX] = useState(0);
    const contentRef = useRef(null);
  
    const handleNext = () => {
      if (contentRef.current) {
        const containerWidth = contentRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
  
        // Calculate the maximum translation to prevent overflowing
        const maxTranslate = contentWidth - containerWidth;
        if (translateX < maxTranslate) {
          setTranslateX((prev) => Math.min(prev + 200, maxTranslate));
        }
      }
    };
  
    const handlePrev = () => {
      if (translateX > 0) {
        setTranslateX((prev) => Math.max(prev - 200, 0));
      }
    };

    const [activeDiv, setActiveDiv] = useState(1);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);




    const content = {
        1: `<p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Creddinv's Premium Series offers HNIs/UHNIs exclusive access to curated, high-growth startup investments. It offers access to pre-vetted startups, comprehensive market analysis and personalised investment strategies tailored to each investor’s risk appetite.</p>
                    
                    <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Private Placements are offered as a part of Creddinv’s Premium Series, which comes with the most significant opportunity of sharing the cap table of startups in the growth stage.</p>
                    
                    Benefits:
                    <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Enjoy a waiver on<span> platform </span>and<span> exit fees </span>according to the program you choose.</p>
                    
                    <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Receive<span> curated investment ideas </span>from our expert banking team.</p>
                    
                    <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Access a<span> personalised dashboard </span>tailored to your investments.</p>
                    
                    <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Join the<span> cap-table </span>alongside top investors and connect with founders.</p>
                    
                    <p>Attend<span> exclusive Creddinv events </span>- sponsored just for you!</p>`,
        2: "<h1 style='color: green;'>This is content for Div 2</h1><p>Here is some more text for Div 2.</p>",
        3: "<h1 style='color: blue;'>This is content for Div 3</h1><p>Here is some more text for Div 3.</p>",
        4: "<h1 style='color: orange;'>This is content for Div 4</h1><p>Here is some more text for Div 4.</p>",
      };



      const parentRef = useRef(null); // Ref for the parent div
      const [parentWidth, setParentWidth] = useState(0);

      useEffect(() => {
        if (parentRef.current) {
          // Set initial width
          setParentWidth(parentRef.current.offsetWidth);
    
          // Update width on window resize
          const handleResize = () => {
            setParentWidth(parentRef.current.offsetWidth);
          };
    
          window.addEventListener('resize', handleResize);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, []);





  return (
    <>

        {/* <Navbar/> */}
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
                        <div className="relative ">
                            <p>For Investors</p>
                            <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div>
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

        <section className="sectionone bg-green-500 flex flex-col justify-center items-center text-center  min-h-[400px] relative overflow-hidden p-[15px]">
            <h1 className='text-[52px] leading-[93px] font-[600] relative z-10'>Investing Made Simple</h1>
            <h1 className='text-[24px] font-[400] text-[#444]  relative z-10'>Welcome to VENTURE LOOP, your gateway to a world of investment opportunities</h1>

            <img src="https://www.creddinv.in/_next/static/media/icon-rupee.ba780f5c.svg" alt="" className='absolute z-0 animate-slide-up-rightcoin w-[56px]'/>
            <img src="https://www.creddinv.in/_next/static/media/icon-rupee.ba780f5c.svg" alt="" className='absolute z-0 animate-slide-up-rightcoin1 w-[56px]'/>
            <img src="https://www.creddinv.in/_next/static/media/icon-rupee.ba780f5c.svg" alt="" className='absolute z-0 animate-slide-up-rightcoin2 w-[56px]'/>
        </section>

        <section className="sectiontwo py-[120px] bg-[#e8e8e0]">
            <div className='mx-[25px] px-[15px]'>
                <div>
                    <div className='justify-center'>
                        <div className='flex lg3:mb-[55px] mb-[70px] lg3:justify-between justify-center flex-wrap lg3:flex-nowrap '>
                            <h2 className='text-[40px] text-[#222] font-[600] text-center lg3:text-left'>Unique Advantages for Investors</h2>

                            <div className='relative w-[238px] h-[56px] group mt-[50px] lg3:mt-[0px] '>
                                <button className='bg-[#222222] px-[24px] py-[18px] flex justify-center items-center w-[238px] h-[56px] text-[12px] font-[700] text-[white] relative z-10 ease-in duration-300 shadow-custom7 hover:shadow-none'>
                                    <a href="" className=''>Register Now</a>
                                </button>

                                {/* <div className='w-[238px] h-[56px] absolute z-0 bg-[#404040] top-[6px] left-[6px] group-hover:hidden ease-in duration-300'></div> */}

                            </div>
                        </div>

                        <div className='flex w-full mx-[15px] relative justify-center'>
                            <div className='flex flex-wrap items-center justify-center gap-[24px]'>

                                <div className='h-[95px] lg3:w-[420px] w-full relative group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                    <div className='h-[95px] lg3:w-[420px] w-full py-[18px] px-[25px] flex items-center justify-between bg-white border-[1px] border-black relative z-10 group-hover:bg-green-500 ease-in duration-300'>

                                        <div><img src="https://www.creddinv.in/_next/static/media/icon-transparency.cdef810d.svg" alt="" /></div>

                                        <div className='flex items-center justify-center lg3:w-[323px] w-full'><h1 className='text-[16px] font-[600] text-[#222] '>Complete Digital Process</h1></div>

                                    </div>

                                    {/* <div className='h-[95px] w-[420px] absolute z-0 bg-[#aeaea8] left-[6px] top-[6px]'></div> */}

                                </div>

                                <div className='h-[95px] lg3:w-[420px] w-full relative group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                    <div className='h-[95px] lg3:w-[420px] w-full py-[18px] px-[25px] flex items-center justify-between bg-white border-[1px] border-black relative z-10 group-hover:bg-green-500 ease-in duration-300'>

                                        <div><img src="https://www.creddinv.in/_next/static/media/icon-community.14c760a5.svg" alt="" /></div>

                                        <div className='flex items-center justify-center lg3:w-[323px] w-full'><h1 className='text-[16px] font-[600] text-[#222] '>Lower Ticket Size</h1></div>

                                    </div>

                                    {/* <div className='h-[95px] w-[420px] absolute z-0 bg-[#aeaea8] left-[6px] top-[6px]'></div> */}

                                </div>

                                <div className='h-[95px] lg3:w-[420px] w-full relative group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                    <div className='h-[95px] lg3:w-[420px] w-full py-[18px] px-[25px] flex items-center justify-between bg-white border-[1px] border-black relative z-10 group-hover:bg-green-500 ease-in duration-300'>

                                        <div><img src="https://www.creddinv.in/_next/static/media/icon-advice.4b7c009d.svg" alt="" /></div>

                                        <div className='flex items-center justify-center lg3:w-[323px] w-full'><h1 className='text-[16px] font-[600] text-[#222] '>Diversification</h1></div>

                                    </div>

                                    {/* <div className='h-[95px] w-[420px] absolute z-0 bg-[#aeaea8] left-[6px] top-[6px]'></div> */}

                                </div>

                                <div className='h-[95px] lg3:w-[420px] w-full relative group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                    <div className='h-[95px] lg3:w-[420px] w-full py-[18px] px-[25px] flex items-center justify-between bg-white border-[1px] border-black relative z-10 group-hover:bg-green-500 ease-in duration-300'>

                                        <div><img src="https://www.creddinv.in/_next/static/media/icon-stats.e026ce07.svg" alt="" /></div>

                                        <div className='flex items-center justify-center lg3:w-[323px] w-full'><h1 className='text-[16px] font-[600] text-[#222] '>Customised Dashboard</h1></div>

                                    </div>

                                    {/* <div className='h-[95px] w-[420px] absolute z-0 bg-[#aeaea8] left-[6px] top-[6px]'></div> */}

                                </div>

                                <div className='h-[95px] lg3:w-[420px] w-full relative group shadow-custom4 hover:shadow-none ease-in duration-150'>

                                    <div className='h-[95px] lg3:w-[420px] w-full py-[18px] px-[25px] flex items-center justify-between bg-white border-[1px] border-black relative z-10 group-hover:bg-green-500 ease-in duration-300'>

                                        <div><img src="https://www.creddinv.in/_next/static/media/icon-pitch.d7075a37.svg" alt="" /></div>

                                        <div className='flex items-center justify-center lg3:w-[323px] w-full'><h1 className='text-[16px] font-[600] text-[#222] '>Timely Update and Reviews</h1></div>

                                    </div>

                                    {/* <div className='h-[95px] w-[420px] absolute z-0 bg-[#aeaea8] left-[6px] top-[6px]'></div> */}

                                </div>

                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>

        <section className="sectionthreee py-[120px] bg-black">
            <h1 className='w-full text-clamp-lg font-[600] text-green-500 text-center'>Wealth Calculator</h1>

            <div className='slider flex justify-center items-center mx-[30px] mt-[40px] mb-[24px]'>

                <div className="slider-container relative overflow-hidden md:mx-[100px] w-full mx-auto" ref={parentRef}>

                    {/* <div
                        className="slider-content flex transition-transform duration-500 ease-in-out"
                        style={{
                        transform: `translateX(-${currentSlide * slideWidth}px)`,
                        width: `${totalSlides * slideWidth}px`,
                        }}
                    > */}
                    <div
                        className="slider-content flex gap-[40px] overflow-x-scroll duration-500 ease-in-out">

                        <div className="swiggy flex flex-col items-center ml-[20px]"  style={{ width: `${parentWidth}px` }}
                        >
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/swiggy_logo.70633358.svg"
                                    alt=""
                                    className="h-[55px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/swiggy_logo.70633358.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since Feb 15
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                Swiggy
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An app-based platform for on-demand food and grocery delivery,
                                allowing users to discover restaurants, order essentials and
                                support corporate deliveries.
                                </p>
                            </div>
                        </div>

                        <div className="phonepe w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/PhonePe_logo.a8c83713.svg"
                                    alt=""
                                    className="h-[55px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/PhonePe_logo.a8c83713.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since Mar 15
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                PhonePe
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                A card-linked digital wallet solution for customers, offering UPI-based bill payments, online shopping, utility payments, recharges, money transfers, QR code transactions and online payment options for merchants.
                                </p>
                            </div>
                        </div>

                        <div className="ola w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-red-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/Ola_logo.3fda5392.svg"
                                    alt=""
                                    className="h-[36px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/Ola_logo.3fda5392.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Downhill valuation since Mar 15
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdown_arrow_graph.a053e13a.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px] rotate-180 transform scale-x-[-1]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                OLA
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An app-based platform for booking ride services, including cars, auto-rickshaws, two-wheels and more.
                                </p>
                            </div>
                        </div>

                        <div className="pocketfm w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPocketfm_logo.50a499b9.png&w=1920&q=75"
                                    alt=""
                                    className="h-[55px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPocketfm_logo.50a499b9.png&w=828&q=75"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since Jan 19
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                Pocket FM
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An online platform for streaming podcasts, audiobooks and radio featuring multiple trending genres.
                                </p>
                            </div>
                        </div>

                        <div className="blusmart w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/Blusmart_logo.caca52aa.svg"
                                    alt=""
                                    className="h-[32px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/Blusmart_logo.caca52aa.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since May 19
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                BlueSmart
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An app-based EV ride hailing platform for booking rides and receiving payment details. 
                                </p>
                            </div>
                        </div>

                        <div className="cred w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/Cred_logo.8d58965c.svg"
                                    alt=""
                                    className="h-[55px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/Cred_logo.8d58965c.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since May 18
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                CRED
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                A reward-enabled payment platform for credit card bills, offering app-based solutions to earn redeemable CRED coins, manage cards, monitor credit scores and access financial calculators.
                                </p>
                            </div>
                        </div>

                        <div className="groww w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-green-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=1920&q=75"
                                    alt=""
                                    className="h-[55px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGroww_logo.06ea3201.png&w=750&q=75"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since Dec 16
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frising_arrow_graph.13319318.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                GROWW
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An app-based trading and investment platform for stocks, futures, mutual funds and more, featuring analysis of technical charts, a screener with advanced filters and stock news.
                                </p>
                            </div>
                        </div>

                        <div className="practo w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-red-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/Practo_logo.f2b45031.svg"
                                    alt=""
                                    className="h-[36px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/Practo_logo.f2b45031.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                Downhill valuation since Aug 15
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdown_arrow_graph.a053e13a.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px] rotate-180 transform scale-x-[-1]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                                PRACTO
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An online platform for appointment-booking, telemedicine and practice management, connecting patients with doctors for appointments, teleconsultations and medical data management.
                                </p>
                            </div>
                        </div>
                        
                        <div className="phonepe w-[743px] flex flex-col items-center" style={{ width: `${parentWidth}px` }}>
                            <div className="logo mb-[24px] w-[280px] h-[128px] rounded-[2px] border-[1px] border-white relative group hover:border-red-400">
                                <div className="flex justify-center items-center rounded-[4px] bg-[#191919] w-full h-full absolute z-50 transition-opacity duration-200 ease-out group-hover:hidden">
                                <img
                                    src="https://www.creddinv.in/_next/static/media/Byjus_logo.6a3599e7.svg"
                                    alt=""
                                    className="h-[36px]"
                                />
                                </div>
                                <div className="hoverlogo grid grid-cols-[70%_30%] bg-black p-[16px] w-full h-full items-center justify-items-start">
                                <div className="flex flex-col justify-start text-left">
                                    <img
                                    src="https://www.creddinv.in/_next/static/media/Byjus_logo.6a3599e7.svg"
                                    alt=""
                                    className="h-[36px] w-[75%]"
                                    />
                                    <p className="text-[12px] font-[300] mt-[4px] text-white">
                                    Uphill valuation since Feb 16
                                    </p>
                                </div>
                                <img
                                    src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdown_arrow_graph.a053e13a.gif&w=1080&q=75"
                                    alt=""
                                    className="w-[295px] h-[166px] absolute left-[84px] rotate-180 transform scale-x-[-1]"
                                />
                                </div>
                            </div>
                            <div className="body w-full flex flex-col justify-center">
                                <h4 className="w-full text-[1.5rem] font-[600] text-[white] text-center">
                            BYJU's
                                </h4>
                                <p className="text-[18px] font-[400] mt-[12px] mb-[40px] text-white text-center">
                                An online platform providing multi-disciplinary learning solutions for competitive exams alongside school-based courses.
                                </p>
                            </div>
                        </div>
                        {/* Repeat similar blocks for other slides */}
                    </div>
                
                    {/* <button
                        onClick={prevSlide}
                        className="absolute left-0 top-[20%] transform -translate-y-[50%] flex justify-center items-center p-[8px] border-[#666] border-[2px] rounded-[50%] bg-black"
                    >
                        <img src="https://www.creddinv.in/_next/static/media/Arrow_Up_LG.466e5696.svg" alt="" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-[20%] transform -translate-y-[50%] flex justify-center items-center p-[8px] border-[#666] border-[2px] rounded-[50%] bg-black"
                    >
                       <img src="https://www.creddinv.in/_next/static/media/Arrow_Up_LG.466e5696.svg" alt="" className="rotate-180"/>
                    </button> */}

                </div>

            </div>
        </section>

        <section className="sectionfour py-[91px] pl-[18px] pr-[46px] bg-[#e8e8e0]">

            <h2 className="text-[40px] font-[600] text-center mb-[38px]">Check Out Our Live Campaigns
                
                <div className="flex justify-center mt-[38px]">
                    <button   onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--iconamoon navigation-icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="9"></circle><path d="m13 9l-3 3l3 3"></path></g></svg>
                    </button>

                    <button  onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--iconamoon navigation-icon" width="1em" height="1em" viewBox="0 0 24 24" ><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="9"></circle><path d="m11 15l3-3l-3-3"></path></g></svg>
                    </button>
                </div>
                
            </h2>

            <div className="flex w-[90vw] m-auto justify-start pb-[30px] pr-[20px] overflow-x-hidden relative">

                <div ref={contentRef} className="w-full h-full flex relative transition-transform duration-500" style={{ transform: `translateX(-${translateX}px)` }}>

                    <div className="relative z-0">
                        <div className="w-[370px] rounded-[12px]">

                            <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fillRule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clipRule="evenodd"></path></svg>
                                NEW
                                </p>

                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                                premium serious
                                </p>
                            </div>

                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreendrive-thumb.01b7474b.webp&w=3840&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                            <div className="relative bg-white rounded-b-[12px]">
                                <div className="p-[20px] pb-0">
                                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreendrive-logo.d851aed8.webp&w=384&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                    <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Green Drive EV</h1>

                                    <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">An EV company providing 4-wheeler, 3-wheeler and 2-wheeler vehicles for transportation and delivery services.</p>
                                </div>
                                <div className="relative h-[129px] group ">
                                    <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                        <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Bengaluru, India</p>
                                        <div className="flex mt-[4px] justify-start">
                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">EV - logistics </p>
                                        </div>
                                        <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Creddinv Technologies : Premium Series</p>
                                    </div>

                                    <div className="pt-[30px] absolute z-0 w-full top-0">
                                        <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                        </div>

                                        <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                            <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                            <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://calendly.com/investors-creddinv/30min" target="_blank">Talk</a></span> to IB Team</p>

                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="relative z-10 ml-[30px]">
                        <div className="w-[370px] rounded-[12px]">

                            <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fillRule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clipRule="evenodd"></path></svg>
                                NEW
                                </p>

                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                                premium serious
                                </p>
                            </div>

                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreenday-thumb.35ed08bf.webp&w=3840&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                            <div className="relative bg-white rounded-b-[12px]">
                                <div className="p-[20px] pb-0">
                                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreenday-logo.e084394b.webp&w=256&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                    <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Better Nutrition</h1>

                                    <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">Leading India’s first line of Biofortified Food Products, including rice, atta, noodles, daliya, and broken wheat.</p>
                                </div>
                                <div className="relative h-[129px] group ">
                                    <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                        <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Lucknow, India</p>
                                        <div className="flex mt-[4px] justify-start gap-[10px]">
                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">Food TECHNOLOGY </p>

                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">FMCG</p>
                                        </div>
                                        <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Creddinv Technologies : Premium Series</p>
                                    </div>

                                    <div className="pt-[30px] absolute z-0 w-full top-0">
                                        <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                        </div>

                                        <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                            <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                            <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://calendly.com/investors-creddinv/30min" target="_blank">Talk</a></span> to IB Team</p>

                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="relative z-20 ml-[30px]">
                        <div className="w-[370px] rounded-[12px]">

                            <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fillRule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clipRule="evenodd"></path></svg>
                                NEW
                                </p>

                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                                premium serious
                                </p>
                            </div>

                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanarchy-thumb.54ec3008.webp&w=1920&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                            <div className="relative bg-white rounded-b-[12px]">
                                <div className="p-[20px] pb-0">
                                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanarchy-logo.8201c458.webp&w=384&q=75" alt="" className="bg-[black] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                    <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Anarchy Warzone</h1>

                                    <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">A game development company launching India's first and Web 3 first's battle royale game, "Anarchy Warzone".</p>
                                </div>
                                <div className="relative h-[129px] group ">
                                    <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                        <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Bengaluru, India</p>
                                        <div className="flex mt-[4px] justify-start gap-[10px]">
                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">Gaming </p>

                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">TECHNOLOGY</p>
                                        </div>
                                        <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Creddinv Technologies : Premium Series</p>
                                    </div>

                                    <div className="pt-[30px] absolute z-0 w-full top-0">
                                        <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                        </div>

                                        <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                            <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                            <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://calendly.com/investors-creddinv/30min" target="_blank">Talk</a></span> to IB Team</p>

                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="relative z-30 ml-[30px]">
                        <div className="w-[370px] rounded-[12px]">

                            <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fillRule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clipRule="evenodd"></path></svg>
                                NEW
                                </p>

                                <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                                premium serious
                                </p>
                            </div>

                            <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhobbyTribe_thumb.f679d3ad.webp&w=1920&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                            <div className="relative bg-white rounded-b-[12px]">
                                <div className="p-[20px] pb-0">
                                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhobbyTribe_logo.5d5634fe.webp&w=640&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                    <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">The Hobby Tribe</h1>

                                    <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">India’s first FREE app that connects people through their favourite hobbies like guitar, cooking, sports.</p>
                                </div>
                                <div className="relative h-[129px] group ">
                                    
                                    <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                        <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Mumbai, India</p>
                                        <div className="flex mt-[4px] justify-start">
                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">ED - TECH </p>
                                            
                                            <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">CONSUMER TECH</p>
                                        </div>
                                        <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Creddinv Technologies : Premium Series</p>
                                    </div>

                                    <div className="pt-[30px] absolute z-0 w-full top-0">
                                        <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                        </div>

                                        <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                            <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                            <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://calendly.com/investors-creddinv/30min" target="_blank">Talk</a></span> to IB Team</p>

                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center">

                <div className="relative w-[238px] h-[56px] group">

                    <a href="" className="flex justify-center items-center gap-[8px] font-[500] py-[18px] pl-[34px] pr-[45px] bg-[#222] w-[238px] h-[56px] text-white relative z-10">
                    See campaigns
                    <img src="https://www.creddinv.in/_next/static/media/Arrow_Up_LG.466e5696.svg" alt="" className="rotate-180 w-[22px]" />
                    </a>

                    <div className="w-full h-full absolute z-0 bg-[#aeaea8] top-[6px] left-[6px] group-hover:hidden"></div>

                </div>


            </div>

        </section>

        <section className="sectionfive py-[120px] bg-black">
            <div className="mx-[85px] px-[15px]">
                <div className=" px-[15px]">
                    <h2 className="text-[40px] font-[600] text-white text-center mb-[38px]">Pathway to Back <span className="text-green-500">Innovative Startups</span></h2>

                    <div className="flex flex-wrap gap-y-[50px] justify-center items-center pt-[24px] pb-[70px] relative">

                        <div className="py-[24px] w-[333px] flex flex-col items-center gap-[24px] group">

                            <div className="flex justify-center items-center w-[92px] h-[92px] bg-[#fff1dc] border-[1px] border-[#fff1dc] rounded-full group-hover:bg-green-500 ease-in duration-300">
                                <img src="https://www.creddinv.in/_next/static/media/step1-investor.ed259204.svg" alt="" className="group-hover:scale-[140%] ease-in duration-300"/>
                            </div>

                            <div className="w-[60%] flex flex-col group-hover:scale-[110%] ease-in duration-300">
                                <h1 className="text-[16px] font-[400] uppercase text-center text-white">Step 1</h1>
                                <p className="text-[12px] font-[600] text-center text-white mt-[8px]">Digital KYC for Registration</p>
                            </div>

                        </div>

                        <div className="py-[24px] w-[333px] flex flex-col items-center gap-[24px] group">

                            <div className="flex justify-center items-center w-[92px] h-[92px] bg-[#fff1dc] border-[1px] border-[#fff1dc] rounded-full group-hover:bg-green-500  ease-in duration-300">
                                <img src="https://www.creddinv.in/_next/static/media/step2-investor.e11985e7.svg" alt="" className="group-hover:scale-[140%]  ease-in duration-300"/>
                            </div>

                            <div className="w-[60%] flex flex-col group-hover:scale-[110%]  ease-in duration-300">
                                <h1 className="text-[16px] font-[400] uppercase text-center text-white">Step 2</h1>
                                <p className="text-[12px] font-[600] text-center text-white mt-[8px]">Access to Live Campaigns</p>
                            </div>

                        </div>

                        <div className="py-[24px] w-[333px] flex flex-col items-center gap-[24px] group">

                            <div className="flex justify-center items-center w-[92px] h-[92px] bg-[#fff1dc] border-[1px] border-[#fff1dc] rounded-full group-hover:bg-green-500  ease-in duration-300">
                                <img src="https://www.creddinv.in/_next/static/media/step3-investor.153eac5e.svg" alt="" className="group-hover:scale-[140%]  ease-in duration-300"/>
                            </div>

                            <div className="w-[60%] flex flex-col group-hover:scale-[110%]  ease-in duration-300">
                                <h1 className="text-[16px] font-[400] uppercase text-center text-white">Step 3</h1>
                                <p className="text-[12px] font-[600] text-center text-white mt-[8px]">Participate in Campaigns</p>
                            </div>

                        </div>

                        <div className="py-[24px] w-[333px] flex flex-col items-center gap-[24px] group">

                            <div className="flex justify-center items-center w-[92px] h-[92px] bg-[#fff1dc] border-[1px] border-[#fff1dc] rounded-full group-hover:bg-green-500  ease-in duration-300">
                                <img src="https://www.creddinv.in/_next/static/media/step4-investor.aa81a244.svg" alt="" className="group-hover:scale-[140%]  ease-in duration-300"/>
                            </div>

                            <div className="w-[60%] flex flex-col group-hover:scale-[110%]  ease-in duration-300">
                                <h1 className="text-[16px] font-[400] uppercase text-center text-white">Step 4</h1>
                                <p className="text-[12px] font-[600] text-center text-white mt-[8px]">Sign Agreement Digitally</p>
                            </div>

                        </div>

                        <div className="py-[24px] w-[333px] flex flex-col items-center gap-[24px] group">

                            <div className="flex justify-center items-center w-[92px] h-[92px] bg-[#fff1dc] border-[1px] border-[#fff1dc] rounded-full group-hover:bg-green-500  ease-in duration-300">
                                <img src="https://www.creddinv.in/_next/static/media/step5-investor.e6a107c4.svg" alt="" className="group-hover:scale-[140%]  ease-in duration-300"/>
                            </div>

                            <div className="w-[60%] flex flex-col group-hover:scale-[110%]  ease-in duration-300">
                                <h1 className="text-[16px] font-[400] uppercase text-center text-white">Step 5</h1>
                                <p className="text-[12px] font-[600] text-center text-white mt-[8px]">Access to Updated Startup Profiles</p>
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center items-centers">

                        <div className="w-[238px] relative group">

                            <button className="py-[18px] px-[24px] bg-green-500 text-[#222] w-[238px] text-[12px] font-[700] border-[1px] border-[#222] text-center relative z-10">
                                <a href="">Invest Now</a>
                            </button>

                            <div className="absolute z-0 bg-[#404040] w-full h-full left-[6px] top-[6px] group-hover:hidden"></div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="sectionsix bg-[#e8e8e0]">
            <div className="mx-auto px-[40px] py-[120px] max-w-[1122px]">
                <h1 className="text-[44px] text-[#222] font-[700] mb-[50px] text-center">Our Product Offerings</h1>

                <div className="relative">

                    <div className="flex justify-center gap-6 flex-wrap">
                        <p className={`min-w-[282px] p-[24px] text-[20px] font-[600] mb-[4px] border-[1px] ${activeDiv === 1 ? "bg-green-300 border-[1px] border-black" : "border-[1px] border-[#b7b7b7] bg-[white]"}`} onClick={() => setActiveDiv(1)}>Premium Series</p>
                        <p className={`min-w-[282px] p-[24px] text-[20px] font-[600] mb-[4px] border-[1px] ${activeDiv === 2 ? "bg-green-300 border-[1px] border-black" : "border-[1px] border-[#b7b7b7] bg-[white]"}`} onClick={() => setActiveDiv(2)}>AIF <span className="text-[14px] font-[400] text-[#666] ml-[6px]"> (Alternative Investment Funds)</span></p>
                        <p className={`min-w-[282px] p-[24px] text-[20px] font-[600] mb-[4px] border-[1px] ${activeDiv === 3 ? "bg-green-300 border-[1px] border-black" : "border-[1px] border-[#b7b7b7] bg-[white]"}`} onClick={() => setActiveDiv(3)}>Venure Debt</p>
                    </div>

                    <div className="flex items-center justify-center my-[20px]">
                        <p className={`min-w-[282px] p-[24px] text-[20px] font-[600] mb-[4px] border-[1px] relative w-[32%] ${activeDiv === 4 ? "bg-green-300 border-[1px] border-black" : "border-[1px] border-[#b7b7b7] bg-[white]"}`} onClick={() => setActiveDiv(4)}>Mutual Funds
                            <img src="https://www.creddinv.in/_next/static/media/NewEventTag.63e024d9.svg" alt="" className="absolute top-[-24px] left-[-16px] "/>
                        </p>
                    </div>

                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowAnimation.44b7fcad.gif&w=96&q=75" alt="" className="absolute right-[-20px] top-[calc(25%-22px)] rounded-[50%] w-[40px] backdrop-blur-sm md:hidden block"/>
                </div>

                {activeDiv === 1 && (

                    <div className="mt-[24px] w-full p-[24px] border-[1px] border-[#444] rounded-[4px] bg-white">

                        <div className="flex flex-wrap justify-between items-center mb-[24px]">
                            <div><h4 className="text-[1.5rem] font-[600] text-[#222]">Premium Series</h4></div>
                        </div>

                        <div className="body text-[4px] font-[300]">
     
                            <div>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">
                                Venture Loop's Premium Series offers HNIs/UHNIs exclusive access to curated, high-growth startup investments. It offers access to pre-vetted startups, comprehensive market analysis, and personalized investment strategies tailored to each investor’s risk appetite.
                                </p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">
                                Private Placements are offered as a part of Venture Loop’s Premium Series, which comes with the most significant opportunity of sharing the cap table of startups in the growth stage.
                                </p>
                                <p className=" leading-[18px] font-[400] text-[14px]">Benefits:</p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">
                                Enjoy a waiver on <span className="font-[500]">platform</span> and <span className="font-[500]">exit fees</span> according to the program you choose.
                                </p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">
                                Receive <span className="font-[500]">curated investment ideas</span> from our expert banking team.
                                </p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">
                                Access a <span>personalized dashboard</span> tailored to your investments.
                                </p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">
                                Join the <span className="font-[500]">cap-table</span> alongside top investors and connect with founders.
                                </p>
                                <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">Attend <span className="font-[500]">exclusive Venture Loop events</span> - sponsored just for you!</p>
                            </div>          

                            <a href=""><button className="bg-green-500 text-black py-[7px] px-[18px] mt-[20px] text-[12px] font-[600]">Register Now</button></a>

                        
                        
                        </div>
                        
                    </div>

                )}

                {activeDiv === 2 && (
                    <div className="mt-[24px] w-full p-[24px] border-[1px] border-[#444] rounded-[4px] bg-white">

                    <div className="flex flex-wrap justify-between items-center mb-[24px]">
                        <div>
                            <h4 className="text-[1.5rem] font-[600] text-[#222]">AIF</h4>
                            <p className="text-[16px] font-[400] mt-[4px] text-[#666]">Alternative Investment Funds</p>
                        </div>
                    </div>

                    <div className="body text-[4px] font-[300]">

                        <div>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Alternative Investment Funds (AIFs) at Venture Loop is a distinct investment category of privately pooled funds, primarily attracting institutions and high net worth individuals due to substantial investment requirements.</p>

                            <p className="mb-[18px] leading-[18px] font-[400] text-[13px]">Governed by the Securities and Exchange Board of India's, SEBI (Alternative Investment Funds) Regulations, 2012, AIFs in Venture Loop fall under Category 1 which includes venture capital funds, angel funds, infrastructure funds, and social venture funds.</p>

                            <p className=" leading-[18px] font-[400] text-[14px]">Benefits:</p>

                            <p className="mb-[18px] leading-[18px] font-[400] text-[13px]"><span className="font-[500]">Regulatory Support in Exits: </span>These funds typically have structured exit strategies such as IPOs, mergers or acquisitions, which help ensure investors receive fair returns. SEBI provides regulatory frameworks that protect investors' interests and ensure fair exit opportunities.</p>

                            <p className="mb-[18px] leading-[18px] font-[400] text-[13px]"><span className="font-[500]">Staggered Cash Settlements: </span>These funds can structure cash settlements in a way that ensures continuous liquidity, reducing the risk of capital being locked for extended periods.</p>

                            <p className="mb-[18px] leading-[18px] font-[400] text-[13px]"><span className="font-[500]">Non-Correlated Returns: </span>Unlike public equity indices that move with broader market sentiments, AIF-CAT 1 funds can offer non-correlated returns. This means their performance may not mirror that of the stock market, providing diversification benefits to investors.</p>
                        </div>

                        <a href=""><button className="bg-green-500 text-black py-[7px] px-[18px] mt-[20px] text-[12px] font-[600]">Register Now</button></a>

                    </div>

                </div>
                )}

                {activeDiv === 3 && (
                <div className="mt-[24px] w-full p-[24px] border-[1px] border-[#444] rounded-[4px] bg-white">

                    <div className="flex flex-wrap justify-between items-center mb-[24px]">
                        <div>
                            <h4 className="text-[1.5rem] font-[600] text-[#222]">Venture Debt</h4>
                        </div>
                    </div>

                    <div className="body text-[4px] font-[300]">

                        <div className="">
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">Venture Loop offers investors the opportunity to participate in Venture Debt, a strategic investment vehicle targeting high-growth startups. Unlike traditional equity investments, Venture Debt involves providing loans to emerging companies, offering investors a fixed income stream with competitive interest rates.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">With lower risk compared to equity investments, Venture Debt allows investors to diversify their portfolios while still capturing the potential upside of startup growth.</p>
                            <p className=" leading-[18px] font-[400] text-[14px]">Benefits:</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Predictable Exit Timelines: </span>Unlike equity investments that rely on liquidity events like IPOs or acquisitions, venture debt typically has fixed repayment schedules. This allows investors to predict when they will receive principal repayment and interest.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Regular Interest Payments: </span>Investors receive regular interest payments throughout the loan tenure, providing a steady income stream.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Risk-Adjusted Returns: </span>Compared to equity investments, venture debt typically carries lower risk. Investors earn fixed interest payments and may also benefit from equity kickers or warrants, offering additional upside potential.</p>
                        </div>

                        <a href=""><button className="bg-green-500 text-black py-[7px] px-[18px] mt-[20px] text-[12px] font-[600]">Register Now</button></a>

                    </div>

                </div>
                )}

                {activeDiv === 4 && (
                    <div className="mt-[24px] w-full p-[24px] border-[1px] border-[#444] rounded-[4px] bg-white">

                    <div className="flex flex-wrap justify-between items-center mb-[24px]">
                        <div>
                            <h4 className="text-[1.5rem] font-[600] text-[#222]">Mutual Funds</h4>
                        </div>
                    </div>

                    <div className="body text-[4px] font-[300]">

                        <div className="">
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">Mutual Funds in Venture Loop operate under the regulatory framework of the Securities and Exchange Board of India (SEBI) through its Mutual Fund Regulations, 1996. Mutual funds pool money from a large number of investors to invest in a diversified portfolio of stocks, bonds or other securities managed by professional fund managers.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]">Venture Loop proudly partners with AssetPlus for this venture.</p>
                            <p className=" leading-[18px] font-[400] text-[14px]">Benefits:</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Liquidity and Easy Exit: </span>Mutual funds offer high liquidity, allowing investors to redeem their units at the prevailing net asset value (NAV) at any time. Mutual funds do not have a lock-in period (except in cases like ELSS), ensuring easy exit and access to funds when needed.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Diversification Across Asset Classes: </span>By investing in a wide range of asset classes such as equities, debt and money market instruments, mutual funds provide diversification, minimising risk and enhancing potential returns through balanced exposure.</p>
                            <p className="mb-[18px] leading-[18px] font-[400] text-[14px]"><span className="font-[500]">Cost-Effective Investing: </span>With relatively lower entry points and systematic investment plans (SIPs), mutual funds offer a cost-effective way for investors to build wealth over time.</p>
                        </div>

                        <a href=""><button className="bg-green-500 text-black py-[7px] px-[18px] mt-[20px] text-[12px] font-[600]">Register Now</button></a>
        
                    </div>

                </div>
                )}

               
            </div>
        </section>

        <section className="sectionseven relative min-h-[300px] bg-[#e8e8e0]">
            <div className="h-[504px] w-full absolute z-0 top-0">
                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-register-now.fb9832a1.jpg&w=3840&q=75" alt=""  className="w-full h-full object-cover brightness-50"/>
            </div>

            <div className="bg-black h-[504px] w-full absolute z-10 top-0 opacity-25"></div>

            <div className="max-w-[1360px] h-full px-[15px] mx-auto relative z-50">

                <div className="flex flex-wrap mx-[-15px] justify-between relative items-center ">
                    
                    <div className="relative px-[25px] mt-[26px] justify-center lg3:justify-center w-full lg3:w-[661px]">
                        <h2 className="text-[40px] text-white font-[600] text-center lg3:text-left">Exciting News!</h2>
                        <h3 className="text-[40px] text-white font-[600] text-center lg3:text-left">Our <span className="text-green-500">Investor App </span>is Coming Soon.</h3>
                        <div className="pt-[40px] justify-center lg3:justify-normal">
                            <h1 className="text-[24px] font-[300] text-[white] text-center lg3:text-left">Stay Tuned for Seamless Investment. Access on -</h1>

                            <div className="pt-[20px] flex gap-[30px] justify-center lg3:justify-normal">
                                <a href=""><img src="https://www.creddinv.in/_next/static/media/icon-google-play.0d890c31.svg" alt="" /></a>
                                <a href=""><img src="https://www.creddinv.in/_next/static/media/icon-apple-store.a3712607.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                   
                    <div className=" flex items-center pt-[20px] w-full lg3:w-[271px] justify-center">
                        {/* <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-app-mockup.d13abd32.png&w=750&q=75" alt="" className="h-[550px]"/> */}
                        {/* <div className='h-[550px]'></div> */}
                    </div>
                   
                </div>
                
            </div>
        </section>

        <section className='sectioneight pt-[120px] mt-[90px] pb-[60px] min-h-[300px] bg-[#e8e8e0]'>

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

                                <p className='mb-[8px]'>Certainly. We’re committed to helping our partnered startups grow. Venture Loop’s planned expansion into Premium Series and other funding options like AIF Category 1 and Venture Debt next year will create further opportunities for startups seeking capital beyond initial rounds.</p>

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

export default Forinvestors
