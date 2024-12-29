import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/Logo.png'

const Aboutus = () => {
    
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
                      <div className="relative ">
                        <p>About Us</p>
                        <div className='w-[20px] h-[2px] bg-black mt-[4px]'></div>
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

        <section className="sectionone bg-gradient-to-r from-[#e8e8e0] from-10% via-[#e8e8e0] via-80% to-lime-500 to-90%">
            <div className='p-[40px]'>
                <div className='max-w-[1360px] w-full mx-auto px-[15px] justify-center'>
                    <h1 className='flex items-center justify-center text-[56px] font-[600] text-[#222] mb-[38px]'>Innovate, Invest, Inspire</h1>
                    <div className='flex gap-[40px] w-full md2:flex-nowrap flex-wrap justify-center'>

                        <div className='bg-green-50 border-[1px] border-[#666] w-full md2:w-[50%] min-w-[313px] p-[20px] shadow-custom4'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <p className='text-[23px] font-[400] text-[#666666]'>Our</p>
                                    <h1 className='text-[40px] font-[700] text-[#222]'>Mission</h1>
                                </div>
                                <img src="https://www.creddinv.in/_next/static/media/rocket.64ba77df.svg" alt="" className='max-w-full'/>
                            </div>
                            <hr className='my-[12px] bg-[#666] border-t-[1px] h-[2px] opacity-25'/>
                            <div className='w-full text-[#222]'>
                                <p className='text-[18px] font-[400] text-[#222]'>To empower entrepreneurs and investors through innovative solutions, fostering collaboration, and driving sustainable growth in the investment ecosystem.</p>
                            </div>
                        </div>

                        <div className='bg-green-50 border-[1px] border-[#666] w-full md2:w-[50%] min-w-[313px] p-[20px] shadow-custom4'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <p className='text-[23px] font-[400] text-[#666666]'>Our</p>
                                    <h1 className='text-[40px] font-[700] text-[#222]'>Vision</h1>
                                </div>
                                <img src="https://www.creddinv.in/_next/static/media/target.7622b53a.svg" alt="" className='max-w-full'/>
                            </div>
                            <hr className='my-[12px] bg-[#666] border-t-[1px] h-[2px] opacity-25'/>
                            <div className='w-full text-[#222]'>
                                <p className='text-[18px] font-[400] text-[#222]'>To be the leading catalyst for transformative investment experiences, fuelling success stories and shaping the future of entrepreneurship in India and beyond.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="sectiontwo bg-black relative border-b-[2px] border-green-200 pb-[40px]">
            <div className='p-[40px]'>
                <h1 className='mb-[38px] text-[56px] font-[600] text-white text-center'>We are Venture Loop</h1>
                <div className='relative mb-[20px] px-[20px]'>
                    <img src="https://www.creddinv.in/_next/static/media/second_icon.94926cc5.svg" alt="" className='absolute left-[-5px] top-[-46%] w-[50px] h-[42px] opacity-30'/>
                    <p className='w-full text-left text-white px-[30px] text-[22px] font-[400] leading-[30px]'>At Venture Loop, we’re not just about facilitating investments - we're building a community of forward-thinking investors and founders who shape the future of business and technology.</p>
                </div>
                <div className='relative mb-[20px] px-[20px]'>
                    <p className='w-full text-left text-white px-[30px] text-[22px] font-[400] leading-[30px]'>Venture Loop is a curated investment platform connecting high-net-worth individuals with innovative startups. Our exclusive member-specific service empowers investors to explore handpicked startups with high growth potential, while ensuring a seamless and informed investment journey.</p>
                </div>
                <div className='relative mb-[20px] px-[20px]'>
                    <p className='w-full text-left text-white px-[30px] text-[22px] font-[400] leading-[30px]'>Designed for both novice and experienced investors, Venture Loop simplifies the process of discovering and evaluating promising startups across trending and prospering Indian sectors. We offer a comprehensive set of tools for portfolio management, in-depth analysis and expert insights to help members make informed investment decisions.</p>

                    <img alt="right_icon" loading="lazy" width="50" height="42" decoding="async" data-nimg="1" className='absolute right-[36px] bottom-[6px] w-[50px] h-[42px] opacity-30' src="https://www.creddinv.in/_next/static/media/second_orange_icon.427fe900.svg"/>
                </div>
            </div>
        </section>

        <section className="sectionthree bg-black md2:min-h-[1000px] min-h-[1200px] ">
            <div className='py-[70px] px-[40px]'>
                <h1 className='text-[56px] font-[600] text-center mb-[38px] text-white'>Our Journey So Far</h1>
                <div className='relative'>

                    <div className='one right w-[50%] py-[10px] px-[40px] mb-[20px] text-white relative'>
                        <div className='absolute w-[20px] h-[2px] top-[27px] right-[12px] bg-[#787878] z-10'></div>
                        <div className='text-right text-[#787878] text-[20px] font-[400]'>July 18, 2023</div>
                        <div className='text-right pt-[9px] text-[20px] font-[600]'>The Company Was Registered</div>
                        <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] right-[-14px] rounded-full z-10'></div>
                    </div>

                    <div className='two absolute w-[50%] right-[-3px] top-[100px]'>

                        <div className=' py-[10px] px-[40px] mb-[20px]  text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] left-[12px] bg-[#787878] z-10'></div>
                            <div className='text-left text-[#787878] text-[20px] font-[400]'>November 15 2024</div>
                            <div className='text-left pt-[9px] text-[20px] font-[600]'>Started Operations</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] left-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className='three absolute w-[50%] left-[0] top-[200px]'>

                        <div className='py-[10px] px-[40px] mb-[20px] text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] right-[12px] bg-[#787878] z-10'></div>
                            <div className='text-right text-[#787878] text-[20px] font-[400]'>Coming ahead</div>
                            <div className='text-right pt-[9px] text-[20px] font-[600]'>Coming ahead</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] right-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className='four absolute w-[50%] right-[-3px] top-[300px]'>

                        <div className='right py-[10px] px-[40px] mb-[20px] text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] left-[12px] bg-[#787878] z-10'></div>
                            <div className='text-left text-[#787878] text-[20px] font-[400]'>Coming ahead</div>
                            <div className='text-left pt-[9px] text-[20px] font-[600]'>Coming ahead</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] left-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className='five absolute w-[50%] left-[0] top-[400px]'>

                        <div className='right py-[10px] px-[40px] mb-[20px] text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] right-[12px] bg-[#787878] z-10'></div>
                            <div className='text-right text-[#787878] text-[20px] font-[400]'>Coming ahead</div>
                            <div className='text-right pt-[9px] text-[20px] font-[600]'>Coming ahead</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] right-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className='five absolute w-[50%] right-[-3px] top-[500px]'>

                        <div className='right py-[10px] px-[40px] mb-[20px] text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] left-[12px] bg-[#787878] z-10'></div>
                            <div className='text-left text-[#787878] text-[20px] font-[400]'>Coming ahead</div>
                            <div className='text-left pt-[9px] text-[20px] font-[600]'>Coming ahead</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] left-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className='five absolute w-[50%] left-[0] top-[600px]'>

                        <div className='right py-[10px] px-[40px] mb-[20px] text-white relative'>
                            <div className='absolute w-[20px] h-[2px] top-[27px] right-[12px] bg-[#787878] z-10'></div>
                            <div className='text-right text-[#787878] text-[20px] font-[400]'>Coming ahead</div>
                            <div className='text-right pt-[9px] text-[20px] font-[600]'>Coming Ahead</div>
                            <div className='absolute w-[25px] h-[25px] bg-green-500 top-[15px] right-[-14px] rounded-full z-10'></div>
                        </div>

                    </div>

                    <div className="line absolute w-[1px] h-[600px] bg-[#787878] left-[50%] top-[16px] bottom-[60px]"></div>

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

export default Aboutus
