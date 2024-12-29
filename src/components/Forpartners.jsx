import React, { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/Logo.png'
import person2 from './person2.jpg'
import person3 from './person3.jpg'
import person4 from './person4.jpg'


const Forpartners = () => {

    
      const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };

    const host = "http://localhost:5000";

    const [isdropdownOpen, setIsdropdownOpen] = useState(false);
    const toggleDropdown = () => setIsdropdownOpen(!isdropdownOpen);

    const [isclientOpen, setIsclientOpen] = useState(false);

    const toggleclientDropdown = () => {
        setIsclientOpen(!isclientOpen);
    };

    const images = [
        person2,
        person3,
        person4
    ];
      
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Step 2: Change the image index automatically every 1.5 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 1.5 seconds
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
    
      // Step 3: Handle changing images based on dot click
      const goToImage = (index) => {
        setCurrentIndex(index);
      };




      

      const elementRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              setIsVisible(true); // Element is in the viewport
            } else {
              setIsVisible(false); // Element is out of the viewport
            }
          },
          {
            threshold: 0.5, // Trigger when 50% of the element is visible
          }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);


      const [formData, setFormData] = React.useState({
        name: "",
        occupation: "",
        email: "",
        phone: "",
        authorization: false,
      });

      const [responseMessage, setResponseMessage] = useState('');

      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
      

      const handleDropdownSelect = (occupation) => {
        setFormData((prevState) => ({
          ...prevState,
          occupation,
        }));
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch(`${host}/api/partner`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            const data = await response.json();
            // Optionally reset form state
            setFormData({
              name : "",
              occupation: "",
              email: "",
              phone: "",
              authorization: false,
            });
          } else {
            const errorData = await response.json();
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Something went wrong!");
        }
      };
    
      

    return (
        < >
            <nav className="bg-[#000000] border-b-[1px] border-black md4:pl-[60px] md4:pr-[60px] pl-[20px] pr-[20px] py-[10px] sticky top-0 z-[100]">
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
                        <div className="relative text-[#8c8c8c]">
                        <p>Home</p>
                        {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                        )}
                        </div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/forpartners" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#fbfbfb]">
                        <p>For Partners</p>
                        <div className='w-[20px] h-[2px] bg-[#fbfbfb] -text-[#fbfbfb] mt-[4px]'></div>
                        </div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/forstartups" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#8c8c8c]">
                        <p>For Startups</p>
                        {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                        )}
                        </div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/forinvestors" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#8c8c8c]">
                        <p>For Investors</p>
                        {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                        )}
                        </div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/aboutus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#8c8c8c]">
                        <p>About Us</p>
                        {({ isActive }) => (
                            <div className={`underline ${isActive ? 'visible' : 'hidden'} w-[50%] h-[2px] bg-green-500 absolute bottom-[-2px]`}></div>
                        )}
                        </div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contactus" className={({ isActive }) => isActive ? 'active-nav-link' : ''}>
                        <div className="relative text-[#8c8c8c]">
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

                <p onClick={toggleMenu} className="absolute text-white h-[30px] w-[26px] right-[-10px] block md4:hidden">
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
                        <div className="relative ">
                        <p className="text-[#fbfbfb]">For Partners</p>
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

            <section className="sectionone bg-black px-[9%] pb-[9%] pt-[3%] flex gap-[16px] m-auto flex-wrap sm:flex-nowrap">

                <div className='sm:w-[50%] w-full flex flex-col justify-center'>

                    <h1 className="text-clamp-lg font-semibold text-white leading-normal">Fuel Success, <span className='block'>Profit through Partnership!</span></h1>

                    <p className='text-clamp-lg2 text-white font-normal mt-[14px]'>Unlock the new earning potential - Partner with Creddinv and earn Profit sharing for every investor you bring.</p>

                    <div className='mt-[100px]'>
                        <div className='relative group'>

                            <button className='text-[16px] font-medium leading-[20px] py-[12px] px-[20px] bg-lime-600 relative z-10'>Register as a Partner</button>

                            <div className='w-[188px] h-[44px] absolute z-0 left-[6px] top-[6px] bg-[#404040] group-hover:hidden'></div>
                        </div>
                    </div>

                </div>

                <div className="sm:w-[50%] w-full min-w-[267px]">
                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpartners_hero_section.d9fd9342.webp&w=3840&q=75" alt="" className='w-full h-auto' />
                </div>
                

            </section>

            <section className="sectiontwo bg-black pt-[20px] p-[9%]">
                <h1 className='text-[36px] font-normal text-white'>Capitalise on a Growing Market</h1>

                <div className='flex gap-[22px] mt-[60px] flex-wrap'>

                    <div className=' border-[2px] border-[#444444] rounded-[8px] lg4:w-[31.33%] w-full relative min-w-[282px]'>

                        <div className='p-[30px]'>
                            <p className='text-[30px] font-semibold text-white'>23% CAGR</p>
                            <p className='text-[24px] font-normal mt-[20px] text-[white]'>Startup Investment Growth</p>
                        </div>

                        <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0s' }}></div>

                    </div>

                    <div className=' border-[2px] border-[#444444] rounded-[8px] lg4:w-[31.33%] w-full relative min-w-[282px]'>

                        <div className='p-[30px]'>
                            <p className='text-[30px] font-semibold text-white'>₹1.27 lakh crore+</p>
                            <p className='text-[24px] font-normal mt-[20px] text-[white]'>Startup Investments - India</p>
                        </div>

                        <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0s' }}></div>

                    </div>

                    <div className=' border-[2px] border-[#444444] rounded-[8px] lg4:w-[31.33%] w-full relative min-w-[282px]'>

                        <div className='p-[30px]'>
                            <p className='text-[30px] font-semibold text-white'><span className='text-[20px] font-normal block leading-[32px]'>No.1 in the world - </span>8.5% CAGR</p>
                            <p className='text-[24px] font-normal mt-[20px] text-[white]'>UHNI Growth - India</p>
                        </div>

                        <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0s' }}></div>

                    </div>

                </div>
            </section>

            <section className="sectiontwo bg-black pt-[20px] p-[9%] flex gap-[30px] items-center sm:flex-nowrap flex-wrap">
                <div className='sm:w-[62%] w-full'>
                    <h1 className='text-clamp-lg3 font-normal mt-[20px] text-white'>Industry Growth Story</h1>
                    <p className='text-clamp-lg4 font-normal mt-clamp-top text-[white] max-w-[700px] leading-[30px]'>With the number of tech startups projected to grow by 2.6x to reach 1.8 lakh by 2030, the startup ecosystem shows incredible potential for growth and success. Grab the golden opportunity - invest and grow with startups in India!</p>
                </div>

                <div className="sm:w-[35%] w-full min-w-[187px]">
                    <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgraph_gif.a06941b8.gif&w=1080&q=75" alt="" className='w-full h-auto' />
                </div>
            </section>

            <section className="sectionthree bg-black pt-[20px] p-[9%] flex gap-[30px]">

                <div className='flex gap-[80px] max-w-[1272px] flex-wrap lg5:flex-nowrap'>

                    <div className='lg5:w-[50%] w-full'>

                        <div className="relative overflow-hidden rounded-xl">

                            <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                            >
                            {images.map((image, index) => (
                                <img
                                key={index}
                                src={image}
                                alt={`carousel-image-${index}`}
                                className="w-full object-cover"
                                />
                            ))}
                            </div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center">
                                {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                                    currentIndex === index
                                        ? 'bg-[#180d05] h-4 w-4'
                                        : 'bg-[#4ba126]'
                                    }`}
                                ></button>
                                ))}
                            </div>

                        </div>

                    </div>

                    <div className='lg5:w-[50%] w-full flex flex-col justify-center'>
                        <h1 className='text-[36px] font-medium mb-[30px] text-[white]'>Be a part of Venture Loop</h1>
                        <p className='text-[11.5px] text-[white] font-normal mb-[18px]'>Let us know more about you - register now and we will get back to you with curated opportunities.</p>

                        <div className='flex flex-col justify-center'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid sm:grid-cols-2 gap-4 grid-cols-1'>
                                    <label htmlFor="name" className='text-[#959595]'>
                                        Your name*
                                        <input
                                            type="text"
                                            placeholder='Enter your full name here'
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className='px-[18px] py-[12px] outline-none text-[14px] w-[100%] text-black mt-[6px]' />
                                    </label>

                                    <label htmlFor="occupation" className='text-[#959595]'>
                                        Occupation*

                                        <div className='bg-[white] flex justify-center items-center mt-[6px] min-h-[45px] pl-[8px] pr-[18px] py-[12px] relative h-[43px]' onClick={toggleDropdown}>

                                            <input 
                                            type="text" 
                                            placeholder='Select occupation' 
                                            name="occupation"
                                            value={formData.occupation}
                                            onChange={handleInputChange}
                                            readOnly
                                            className='border-none focus:outline-none focus:ring-0 outline-none text-[14px] w-[100%] text-black pr-[18px]' />

                                            <div className='w-[19px] h-[19px] flex justify-center items-center'>

                                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>

                                            </div>

                                            {isdropdownOpen && (
                                            <div className="absolute w-full left-0 top-[45px] bg-white border border-gray-300  shadow-lg z-10">
                                                <ul className="py-2">
                                                {['Salaried', 'Self Employed', 'Business', 'Retired', 'Homemaker', 'Student', 'Unemployed'].map(
                                                    (occupation) => (
                                                    <li
                                                        key={occupation}
                                                        onClick={() => handleDropdownSelect(occupation)}
                                                        className="px-4 py-[8px] hover:bg-gray-100 cursor-pointer font-semibold text-[13px] text-black"
                                                    >
                                                        {occupation}
                                                    </li>
                                                    )
                                                )}
                                                </ul>
                                            </div>
                                            )}

                                        </div>
                                        

                                    </label>

                                    <label htmlFor="emailid" className='text-[#959595]'>
                                        Your email ID*
                                        <input 
                                        type="email" 
                                        placeholder='Enter your email here' 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className='px-[18px] py-[12px] outline-none text-[14px] w-[100%] text-black mt-[6px]' />
                                    </label>

                                    <label htmlFor="name" className='text-[#959595]'>
                                        Your phone number*
                                        <div className='pr-[18px] pl-[8px] py-[12px] bg-[white] flex justify-center items-center mt-[6px]'>
                                            <h1 className='text-[14px] text-black font-semibold'>+91</h1>
                                            <input 
                                              name="phone"
                                              inputMode="numeric"
                                              pattern="[0-9]*"
                                              placeholder="Enter your phone number here"
                                              value={formData.phone}
                                              onChange={handleInputChange}
                                            className=' pl-[6px] outline-none text-[14px] w-[100%] text-black' />
                                        </div>
                                    </label>
                                </div>

                                <label htmlFor="policy consent" className='flex items-center gap-[4px] mt-[16px] text-[13px] text-[#999]'>
                                    <input 
                                    type="checkbox" 
                                    name="authorization"
                                    checked={formData.authorization}
                                    onChange={handleInputChange}
                                    className='w-[14px] h-[14px] accent-green-600 mr-[6px]' />
                                    By clicking on register now, you authorise Venture Loop to contact you regarding the partnership program.
                                </label>

                                <div className='relative group'>

                                    <button type="submit" className='text-[16px] text-[#222] font-medium bg-green-600 rounded-[1px] py-[12px] px-[20px] mt-[18px] relative z-10'>Register now</button>

                                    <div className='w-[134px] h-[48px] z-0 absolute bg-[#404040] top-[23px] left-[5px] group-hover:hidden'></div>

                                </div>
                                {responseMessage && <p className="mt-4 text-red-500">{responseMessage}</p>}
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-black p-[9%] pt-[20px]'>
                <div className='relative z-50 bg-black'>
                    <h1 className='text-clamp-lg5 text-white font-[400] '>How This Works</h1>
                    <p className='text-clamp-lg6 text-white font-normal mt-[20px] max-w-[870px] leading-[32px]'>Our streamlined process connects partners with clients, facilitating seamless investments and rewarding partnerships.</p>
                </div>

                <div className='mt-[40px] flex flex-col gap-[30px]'>

                    <div className='sm:w-[84%] w-full'>
                        <div className='flex gap-[30px] relative overflow-hidden flex-wrap sm:flex-nowrap'>

                            <div className={"relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down "}  style={{ animationDelay: "0s" }}>
                           
                                <div className='p-[26px] text-white'>
                                    <p className='text-clamp-lg7 font-normal relative z-10'>1</p>
                                    <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Partner Registers with Venture Loop</p>
                                </div>
                                <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0s' }}></div>
                            </div>

                            <div className="relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down"  style={{ animationDelay: "0.25s" }}>

                                <div className='p-[26px] text-white'>
                                    <p className='text-clamp-lg7 font-normal relative z-10'>2</p>
                                    <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Partner adds a Client</p>
                                </div>
                                <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0.5s' }}></div>
                            </div>

                            <div className="relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down"  style={{ animationDelay: "0.5s" }}>

                                <div className='p-[26px] text-white'>
                                    <p className='text-clamp-lg7 font-normal relative z-10'>3</p>
                                    <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Client registers with Venture Loop</p>
                                </div>
                                <div className='absolute bg-gradient-to-r from-green-700 from-20% via-green-700 via-50% to-black to-90% opacity-50 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '1s' }}></div>
                            </div>

                        </div>
                    </div>

                    <div className='flex sm:justify-end justify-center w-full'>
                        <div className='sm:w-[84%] flex md2:justify-end justify-center'>

                            <div className='flex gap-[30px] relative flex-wrap sm:flex-nowrap overflow-hidden '>

                                {/* <div className='relative w-[33.33%] border-[1px] border-[#990] rounded-[6px] '> */}


                                {/* <div className="relative w-[33.33%] overflow-hidden "> */}
                                <div className="relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down"  style={{ animationDelay: "1s" }}>

                                    <div className='p-[26px] text-white  '>
                                        <p className='text-clamp-lg7 font-normal relative z-10'>4</p>
                                        <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Partner submits the Lead</p>
                                    </div>
                                    <div className='absolute bg-gradient-to-r from-black from-20% via-green-700 via-50% to-green-700 to-90% opacity-25 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0.25s' }}></div>
                                </div>
                                {/* </div> */}

                                <div className="relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down"  style={{ animationDelay: "1.25s" }}>

                                    <div className='p-[26px] text-white  '>
                                        <p className='text-clamp-lg7 font-normal relative z-10'>5</p>
                                        <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Client makes an Investment</p>
                                    </div>
                                    <div className='absolute bg-gradient-to-r from-black from-20% via-green-700 via-50% to-green-700 to-90% opacity-25 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '0.75s' }}></div>
                                </div>

                                <div className="relative sm:w-[33.33%] w-full border-[1px] border-[#990] rounded-[6px] animate-slide-down"  style={{ animationDelay: "1.5s" }}>

                                    <div className='p-[26px] text-white  '>
                                        <p className='text-clamp-lg7 font-normal relative z-10'>6</p>
                                        <p className='text-clamp-lg8 font-normal mt-[40px] relative z-10'>Partner bags the Incentive</p>
                                    </div>
                                    <div className='absolute bg-gradient-to-r from-black from-20% via-green-700 via-50% to-green-700 to-90% opacity-25 w-full h-full z-0 top-0 rounded-[6px] animate-shine' style={{ animationDelay: '1.25s' }}></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='bg-black p-[9%] pt-[20px] flex flex-col items-center'>
                <h1 className='text-clamp-lg9 font-medium text-white'>Earning Opportunity</h1>

               <p className='text-clamp-lg10 text-white font-normal leading-clamp-lg max-w-[1100px] text-center mt-[60px]'>You as a <span className='text-[#72B37E]'>Venture Loop</span> partner with <span className='text-[#72B37E] underline'>1-10 clients</span> investing <span className='text-[#72B37E] underline'>5Lakh</span> can each earn upto <span className='text-[#72B37E] underline'> 50,000/ </span> month.</p>
            </section>

            <div className='bg-[#1c1c1c] px-[3%] pb-[6%]'>
                <div className='px-[2%] pt-[4%] pb-[2%]'>

                    <div className='px-[15px]'>

                        <div className='footerfirstrow  mx-auto w-full flex flex-wrap lg2:flex-nowrap'>

                            <div className='footerfirstrowfirstcol flex pr-[15px] flex-col lg2:items-start items-center w-full lg2:w-[41.66666667%] '>

                                {/* <div className='w-[240px] h-[70px] bg-green-100 flex justify-center items-center'> YOUR LOGO</div> */}
                                <img src={logo} alt="" className="logo sm3:w-[220px] w-[160px] my-[16px]"/>

                                <div className='lg:w-[85%] w-full mt-[1rem] lg2:flex-none lg2:items-start flex flex-col items-center text-[#989898]'>
                                    <p className='text-[0.875rem] font-semibold mb-[8px] text-center lg2:text-left text-white'>Venture Loop Technologies Pvt Ltd.</p>
                                    <h6 className='text-[14px] font-normal w-[67%] text-[#989898] leading-[16px] text-center lg2:text-left'>12, Palm crest, Main Avenue road, Santacruz w, Mumbai- 400050</h6>
                                    <p className='text-[14px] font-normal w-[67%] text-[#989898] pt-[6px] text-center lg2:text-left'></p>
                                </div>

                                <div className='mt-[1rem]'>
                                    <p className='text-[1rem] font-semibold text-center lg2:text-left text-white'>App launching shortly</p>
                                    <div className='flex gap-[0.5rem] mt-2'>
                                        <img src="https://www.creddinv.in/_next/static/media/google_play_store.c2fbe9b6.svg " alt="" />
                                        <img src=" https://www.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fimages%2Fdownload-on-the-app-store.png&w=128&q=75" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="footerfirstrowsecndcol flex flex-col lg2:items-start items-center px-[15px] w-full lg2:w-[33.33333333%] text-white lg2:mt-[0px] mt-[40px]">
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
                                    <p className='text-[16px] font-semibold leading-[20.16px] text-left text-white'>Contact with Us</p>
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
                                    <p className='text-[16px] font-semibold leading-[20.16px] text-left text-white'>Certified By</p>
                                    <div className='flex items-center gap-[20px]'>
                                        <img src="https://www.creddinv.in/_next/static/media/ISO_certified_logo.8aadd954.svg" alt="" />
                                        <img src="https://www.creddinv.in/_next/static/media/footerstartup.2ffdf8d3.svg" alt="" />
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>

                        <p className="footersecond row mt-[36px] mb-[8px] text-[11.5px] text-[#8e8e8e] font-normal leading-[26px]"><strong className="text-dark"> Disclaimer: </strong> VentureLoop Technologies Private Limited (VentureLoop) owns and operates its website <a href="/" className='text-[#016ee1]'> www.VentureLoopv.in </a>&nbsp;(Platform), which is neither a registered stock exchange, an investment advisor nor a funding portal and is not registered with the Securities Exchange Board of India (SEBI). Nothing contained on this Platform shall be construed as an authorization by the SEBI to solicit investments nor should the Platform be construed as a SEBI authorized crowdfunding platform or a stock exchange, or their equivalent. The securities offered by any company registered on Platform are not traded on any stock exchange recognised by SEBI. VentureLoop does not allow any secondary market trading of securities on the Platform. By accessing this Platform and any pages thereof, you agree to be bound by the <a href="/termsofuse" className='text-[#016ee1]'>&nbsp;Terms of Use </a>&nbsp;and <a href="/privacypolicy" className='text-[#016ee1]'>&nbsp;Privacy Policy.</a> Investing in start-ups and early-stage businesses involves risks, including illiquidity, lack of dividends, loss of investment and dilution, and it should be done only as part of a diversified portfolio. VentureLoop is targeted exclusively at investors who are sufficiently sophisticated to understand these risks and make their own investment decisions. Please read our <a href="/riskpolicy" className='text-[#016ee1]'>&nbsp;Risk Policy </a> for more information.</p>

                        <p className="footer_disclaimer mt-[36px] mb-[8px] text-[11.5px] font-normal leading-[26px] text-[#8e8e8e]">Mutual Fund distribution services are offered through VentureLoop Technologies Pvt. Limited. AMFI Registration No.: <strong className='font-medium text-[white]'>ARN -310253. </strong>Mutual fund investments are subject to market risks, read all scheme related documents carefully. Terms and conditions of the website are applicable. Privacy policy of the website is applicable.</p>

                        <div className='w-full border-t-[1px] border-t-[#bdbdb9] mt-[18px] mb-[12px]'></div>

                        <div className='flex justify-between items-baseline text-[white] flex-wrap sm:flex-nowrap'>
                            <p className='text-[11.5px] font-light text-center w-full sm:max-w-fit'>©2024 VentureLoop Technologies. All rights reserved.</p>
                            <div className='flex items-center justify-center w-full sm:max-w-fit'>
                                <p className='text-[12px] font-normal mt-[3px]'>Check us out on</p>
                                <img src="https://www.creddinv.in/_next/static/media/transction.a3989d2f.svg" alt="" className=''  style={{ filter: "invert(1)" }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Forpartners
