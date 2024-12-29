import React, { useState } from 'react';
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Contactus = () => {
    
      const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    
      const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
      };
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
                      <div className="relative ">
                        <p>Contact</p>
                        <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div>
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

        <section className="sectionone flex flex-col bg-[#e8e8e0] gap-[6px]">
            <div className='flex flex-col items-center gap-[20px] mt-[80px] w-full relative'>
                <h1 className='text-[40px] font-[600] leading-[93px]'>Contact Us</h1>
                <h6 className='text-[20px] font-[400] text-[#666] text-center leading-[25.2px] w-[75%]'>At VENTURE LOOP, we're dedicated to providing exceptional support and assistance to our users. Whether you have questions, feedback, or inquiries, our team is here to help.</h6>
            </div>

            <div className='px-[15px] mx-auto w-full'>
               
                <div className='py-[36px] flex justify-between flex-wrap md2:flex-nowrap'>

                    <div className='flex flex-col items-center gap-[12px] relative w-full my-[40px] md2:my-[0px] md2:w-[50%] min-w-[247px]'>
                        <img src="https://www.creddinv.in/_next/static/media/registered__.459dd047.svg" alt="" className='max-w-full h-auto'/>
                        <h1 className='text-[1.25rem] font-[700] text-[#222]'>Registered Address</h1>
                        <p className='text-[16px] font-[400] text-[#222] w-[60%] text-center leading-[20px]'>12, Palm crest, Main Avenue road, Santacruz w, Mumbai- 400050</p>
                        
                    </div>
                    
                    <div className='flex flex-col items-center gap-[12px] relative w-full my-[40px] md2:my-[0px] md2:w-[50%] min-w-[247px]'>
                        <img src="https://www.creddinv.in/_next/static/media/correspondence__.45757b4a.svg" alt="" className='max-w-full h-auto'/>
                        <h1 className='text-[1.25rem] font-[700] text-[#222]'>Correspondence Address</h1>
                        <p className='text-[16px] font-[400] text-[#222] w-[60%] text-center leading-[20px]'>12, Palm crest, Main Avenue road, Santacruz w, Mumbai- 400050</p>
                        
                    </div>

                    <div className='flex flex-col items-center gap-[12px] relative w-full my-[40px] md2:my-[0px] md2:w-[50%] min-w-[247px]'>
                        <img src="https://www.creddinv.in/_next/static/media/contactinfo__.b4809f93.svg" alt="" className='max-w-full h-auto'/>
                        <h1 className='text-[1.25rem] font-[700] text-[#222]'>Contact Info</h1>
                        <p className='text-[16px] font-[400] text-[#222] w-[60%] text-center leading-[20px]'>Email us: <a href="mailto:transcendconsultancy12@gmail.com">transcendconsultancy12@gmail.com </a><br/> Phone no.: +91 98921 02328</p>
                    </div>

                </div>
            </div>

            <div className='flex flex-col mb-[12px] gap-[12px] px-[20px]'>
                <h6 className="text-[20px] font-[300] text-[#666] text-center leading-[25.2px]"> For general inquiries, please email us at <a className="font-[700] leading-[30.4px]" href="mailto:transcendconsultancy12@gmail.com">transcendconsultancy12@gmail.com</a> or fill out the contact form below.</h6>
                
                <h6 className="text-[20px] font-[300] text-[#666] text-center leading-[25.2px]">If you are a Premium Series investor, you can email us at <a className="font-[700] leading-[30.4px]" href="mailto:premiumseries@venturelooop.in">premiumseries@ventureloop.in</a> with your inquiry.</h6>
            </div>

            <div className='mx-[30px] py-[36px] px-[12px] bg-[#f4f4f4] border-[1px] border-black shadow-custom4 flex flex-wrap lg3:flex-nowrap'>
                <div className='px-[15px] py-[6px] lg3:max-w-[50%] min-h-[300px] lg3:w-[50%] w-full  bg-slate-200'></div>

                <div className='px-[15px] py-[6px] lg3:max-w-[50%] lg3:w-[50%] w-full flex flex-col'>
                    <h1 className='text-[28px] font-[600] text-[#222] leadng-[42px] text-left'>Have questions or inquiries? We're here to help!</h1>

                    <div>
                        <p className='text-[12px] font-[400] text-[#666] text-left mb-[8px]'>What are you?</p>
                        <div className="flex mb-[3px] flex-wrap sm2:flex-nowrap">

                            <div className='sm2:w-[50%] w-full sm2:my-0 my-[15px] h-[50px] border-[1px] border-[#b7b7b7] text-center bg-white px-[12px] mr-[12px] flex justify-between items-center gap-[6px]'>
                                <div className='flex items-center gap-[6px]'>
                                    <input id="startup" type="radio" value="startup" name="CredUser"></input>
                                    <span className='text-[12px] font-[400] text-[#666] text-left'>Startup</span>
                                </div>
                                <div><img src="https://www.creddinv.in/_next/static/media/startUp_icon.33608d21.svg" alt="" className='w-full h-auto'/></div>
                            </div>

                            <div className='sm2:w-[50%] w-full sm2:my-0 my-[15px] h-[50px] border-[1px] border-[#b7b7b7] text-center bg-white px-[12px] mr-[12px] flex justify-between items-center gap-[6px]'>
                                <div className='flex items-center gap-[6px]'>
                                    <input id="startup" type="radio" value="Investor" name="CredUser"></input>
                                    <span className='text-[12px] font-[400] text-[#666] text-left'>Investor</span>
                                </div>
                                <div><img src="https://www.creddinv.in/_next/static/media/investor_icon.86675e2b.svg" alt="" className='w-full h-auto'/></div>
                            </div>

                        </div>
                    </div>

                    <form action="">
                        <div className='flex mb-[12px] w-full flex-wrap sm2:flex-nowrap'>

                            <div className='mr-[12px] sm2:w-[50%] w-full sm2:my-0 my-[15px]'>
                                <p className='text-[12px] font-[400] text-left text-[#666] mb-[8px]'>Your name*</p>
                                <input placeholder='enter your name here' type="text" className='w-full h-[50px] text-black border-[1px] border-[#b7b7b7] text-[14px] font-[500] py-[5px] px-[9px]'/>
                            </div>

                            <div className='mr-[12px] sm2:w-[50%] w-full sm2:my-0 my-[15px]'>
                                <p className='text-[12px] font-[400] text-left text-[#666] mb-[8px]'>Your city*</p>
                                <input placeholder='enter your city here' type="text" className='w-full h-[50px] text-black border-[1px] border-[#b7b7b7] text-[14px] font-[500] py-[5px] px-[9px]'/>
                            </div>

                        </div>

                        <div className='flex mb-[12px] flex-wrap sm2:flex-nowrap'>

                            <div className='mr-[12px] sm2:w-[50%] w-full sm2:my-0 my-[15px]'>
                                <p className='text-[12px] font-[400] text-left text-[#666] mb-[8px]'>Your Email*</p>
                                <input placeholder='enter your Email here' type="text" className='w-full h-[50px] text-black border-[1px] border-[#b7b7b7] text-[14px] font-[500] py-[5px] px-[9px]'/>
                            </div>
                            
                            <div className='mr-[12px] sm2:w-[50%] w-full sm2:my-0 my-[15px]'>
                                <p className='text-[12px] font-[400] text-left text-[#666] mb-[8px]'>Your Phone Number*</p>
                                <input className='w-full h-[50px] text-black border-[1px] border-[#b7b7b7] text-[14px] font-[500] py-[5px] px-[9px]' placeholder="Enter your phone number" inputMode="numeric" pattern="[0-9]*" type="number" value="" name="phoneNumber" fdprocessedid="4jylq6"/>
                            </div>

                        </div>

                        <div className='mt-[18px] mb-[12px]'>
                            <div>
                                <p placeholder="Type a brief summary about your requirements" className='text-[12px] font-[400] text-[#666] text-left mb-[8px]'>Your Message*</p>
                                <textarea name="" id="" className='w-full text-[14px] font-[400] text-black border-[1px] border-[#b7b7b7] py-[12px] px-[9px]'></textarea>
                            </div>
                        </div>

                        <div className='flex justify-center lg3:justify-normal'>
                            <button className='w-[204px] h-[48px] flex items-center justify-center text-[12px] font-[500] text-white shadow-custom4 bg-[#222] hover:shadow-none'>Submit</button>
                        </div>

                    </form> 
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

export default Contactus
