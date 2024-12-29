import React, { useState } from 'react';
import Stnavbar from '../startuphome/Stnavbar'

const Stknldgecntr = () => {

    
    const [activeButton, setActiveButton] = useState('News & articles');
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
         <Stnavbar/>

        <div className='relative'>
            <div className='md:absolute md:top-0 md:right-0 md:pl-[306px] w-full'>
                <div className='incompleteKYC py-[20px] pl-[42px] pr-[40px] flex items-center justify-between flex-wrap bg-[#f7d8d7]'>
                        <p className='text-[16px] font-[400] text-[#222] flex'>
                            <img alt="alertred2" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" className="mr-[8px]" src="https://investor.creddinv.in/_next/static/media/alertred2.1cebdb24.svg"/>
                            <span className='font-[500]'>KYC Pending:</span> 
                            Please complete your KYC immediately to start investing in campaigns
                        </p>

                        <div>
                            <button className='py-[9px] px-[16px] bg-[#222] text-white text-[12px] font-[500] rounded-[4px]'>Complete KYC</button>
                        </div>
                </div>

                <div className='w-full min-h-[100vh] pb-[60px] pl-[40px] pr-[42px] relative'>

                <div className='pt-[12px] mb-[20px] w-full'>

                    <div className='lg3:flex justify-start items-center mb-[16px] pt-[12px] border-b-[1px] border-b-[#b7b7b7] relative hidden'>

                        <button onClick={() => setActiveButton('News & articles')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${ activeButton === 'News & articles' ? 'border-b-[3px] border-black' : ''}`}>News & articles</button>

                        <button onClick={() => setActiveButton('Blogs')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${activeButton === 'Blogs' ? 'border-b-[3px] border-black' : ''}`}>Blogs</button>

                        <button onClick={() => setActiveButton('Videos')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${activeButton === 'Videos' ? 'border-b-[3px] border-black' : ''}`}>Videos</button>

                        <button onClick={() => setActiveButton('Sector snaps')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${activeButton === 'Sector snaps' ? 'border-b-[3px] border-black' : ''}`}>Sector snaps</button>

                    </div>

                    <div className='mt-[18px]'>

                        {activeButton === 'News & articles' && (
                            <div>
                                <h1 className='text-[32px] font-[700]'>News & Articles</h1>
                                <div>
                                    <div className='flex flex-col justify-center items-center mt-[38px]'>
                                        <img src="https://investor.creddinv.in/_next/static/media/NoResultFound.7eb41ba5.svg" alt="" className='w-[240px]'/>
                                        <h5 className='text-[24px] font-[700]'>No results found</h5>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeButton === 'Blogs' && (
                            <div>
                                <h1 className='text-[32px] font-[700]'>Blogs</h1>
                                {/* <div className='flex flex-wrap gap-[20px]'>

                                    <a href="" className='max-w-[357px]'>
                                        <div className='h-[370px] w-full py-[24px] px-[16px] border-[1px] border-[#b7b7b7] rounded-[4px] relative shadow-custom3 hover:shadow-none ease-in duration-150'>
                                            <div className='h-[165px] w-full relative mt-[10px] mb-[15px] rounded-[2px] border-[1px] border-[#b7b7b7]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732506596.png&w=1200&q=75" alt="" className='h-full w-full'/>
                                                <p className='absolute right-[12px] top-[12px] bg-green-200 text-[12px] font-[500] py-[9px] px-[16px] text-black rounded-[20px]'>Blog</p>
                                            </div>

                                            <div className='text-[32px] font-[700] w-full'>
                                                <h5 data-toggle="tooltip" data-placement="top" title="Why Invest in Startups Apart from Traditional Investments" className='text-[17px] font-[700] leading-[20px] break-words whitespace-normal h-[40px] w-full text-[#222]'>Why Invest in Startups Apart from Traditional Investments</h5>

                                                <h5 className="h-[55px] leading-[20px] text-[14px] font-[400] text-[#666] mt-[10px]" data-toggle="tooltip" data-placement="top" title="The Smart Investor’s Guide to Startup Investments">The Smart Investor’s Guide to Startup Investments</h5>

                                                <p className="text-[14px] font-[400] text-[#666] mt-[14px]">Creddinv | Nov 25, 2024</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className='max-w-[357px]'>
                                        <div className='h-[370px] w-full py-[24px] px-[16px] border-[1px] border-[#b7b7b7] rounded-[4px] relative shadow-custom3 hover:shadow-none ease-in duration-150'>
                                            <div className='h-[165px] w-full relative mt-[10px] mb-[15px] rounded-[2px] border-[1px] border-[#b7b7b7]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732269871.png&w=1080&q=75" alt="" className='h-full w-full'/>
                                                <p className='absolute right-[12px] top-[12px] bg-green-200 text-[12px] font-[500] py-[9px] px-[16px] text-black rounded-[20px]'>Blog</p>
                                            </div>

                                            <div className='text-[32px] font-[700] w-full'>
                                                <h5 data-toggle="tooltip" data-placement="top" title="Why Invest in Startups Apart from Traditional Investments" className='text-[17px] font-[700] leading-[20px] break-words whitespace-normal h-[40px] w-full text-[#222]'>Unicorn Status and The Power of Investing in Indian Startups</h5>

                                                <h5 className="h-[55px] leading-[20px] text-[14px] font-[400] text-[#666] mt-[10px]" data-toggle="tooltip" data-placement="top" title="The Smart Investor’s Guide to Startup Investments">The Soonicorn-Unicorn Trajectory in India</h5>

                                                <p className="text-[14px] font-[400] text-[#666] mt-[14px]">Creddinv | Nov 22, 2024</p>
                                            </div>
                                        </div>
                                    </a>
                                    
                                </div> */}
                                <div>
                                <div className='flex flex-col justify-center items-center mt-[38px]'>
                                    <img src="https://investor.creddinv.in/_next/static/media/NoResultFound.7eb41ba5.svg" alt="" className='w-[240px]'/>
                                    <h5 className='text-[24px] font-[700]'>No results found</h5>
                                </div>
                                
                            </div>
                            </div>
                        )}

                        {activeButton === 'Videos' && (
                            <div>
                                <h1 className='text-[32px] font-[700]'>Videos</h1>

                                {currentPage === 1 && (
                                <div>   
                                    <div>
                                        <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1 w-full gap-6'>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>

                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>
                                            
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between'>

                                        <div>Showing <strong>1</strong> of <strong>2</strong> pages</div>
                                        <div className='flex items-center'>
                                            <button onClick={() => setCurrentPage(1)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 1 ? "bg-gray-300" : "bg-white"}`} disabled=""><img alt="leftarrow" loading="lazy" width="6" height="10" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/leftarrow.541680cd.svg"/></button>

                                            <button onClick={() => setCurrentPage(1)}  className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 1 ? "bg-blue-400 text-white" : "bg-white"}`}>1</button>

                                            <button onClick={() => setCurrentPage(2)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 2 ? "bg-blue-400 text-white" : "bg-white"}`}>2</button>

                                            <button onClick={() => setCurrentPage(2)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 2 ? "bg-gray-300" : "bg-white"}`}><img alt="leftarrow" loading="lazy" width="6" height="10" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/rightarrow.ac3052fb.svg"/></button></div>
                                    </div>
                                </div>
                                )}

                                {currentPage === 2 && (
                                <div>   
                                    <div>
                                        <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 grid grid-cols-1 w-full gap-6'>
                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="" className='mb-[18px]'>
                                                <div className='py-[24px] px-[16px] flex flex-col items-start justify-center w-full h-[280px] rounded-[4px] border-[1px] border-[#b7b7b7] shadow-custom3'>
                                                    <div className='w-full h-[143px] bg-gray-400'></div>
                                                    <h5 className='text-[16px] font-[700] text-[#222] mt-[10px] leading-[20px] break-words'>Video Title Goes Here</h5>
                                                    <div className='flex items-center justify-start mt-[22px]'>
                                                        <img src="https://investor.creddinv.in/_next/static/media/youtube.35eb1250.svg" alt="" />
                                                        <p className='text-[16px] font-[400] text-[#666] ml-[6px] underline'>Watch it on youtube</p>
                                                    </div>
                                                </div>
                                            </a>                        
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between'>

                                        <div>Showing <strong>1</strong> of <strong>2</strong> pages</div>
                                        <div className='flex items-center'>
                                            <button onClick={() => setCurrentPage(1)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 1 ? "bg-gray-300" : "bg-white"}`} disabled=""><img alt="leftarrow" loading="lazy" width="6" height="10" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/leftarrow.541680cd.svg"/></button>

                                            <button onClick={() => setCurrentPage(1)}  className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 1 ? "bg-blue-400 text-white" : "bg-white"}`}>1</button>

                                            <button onClick={() => setCurrentPage(2)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 2 ? "bg-blue-400 text-white" : "bg-white"}`}>2</button>

                                            <button onClick={() => setCurrentPage(2)} className={`mx-[2px] px-[10px] py-[5px] border-[1px] border-[#ccc] w-[32px] h-[30px] text-[14px] font-[400] rounded-[2px] ${currentPage === 2 ? "bg-gray-300" : "bg-white"}`}><img alt="leftarrow" loading="lazy" width="6" height="10" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/rightarrow.ac3052fb.svg"/></button></div>
                                    </div>
                                </div>
                                )}

                            </div>
                            
                        )}

                        {activeButton === 'Sector snaps' && (

                            <div>
                                <h1 className='text-[32px] font-[700]'>Sector Snaps</h1>
                                <div className='flex flex-wrap -mt-0 -mr-[1.5rem] -ml-[.5*1.5rem]'>

                                    <a href="" className='mb-[18px] px-[9px] w-full lg5:w-[375px] max-w-full'>
                                        <div className='w-full h-[140px] rounded-[4px] border-[1px] border-[#b7b7b7] py-[24px] px-[16px] shadow-custom3 flex items-center justify-start'>
                                            <div className='border-[1px] border-[#b7b7b7] rounded-[4px]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732505926.png&w=96&q=75" alt="" className='rounded-[4px] w-[85px]'/>
                                            </div>
                                            <div className='flex flex-col w-[200px] ml-[10px] text-[32px] font-[700]'>
                                                <p className='text-[16px] font-[500] h-[38px] leading-[20px] text-[#222]'>Startup Sector: Gaming Tech</p>
                                                <span className='text-[12px] font-[500] text-[#666] h-[45px] leading-[15.5px] mt-[5px]'>A quick investor's guide to understand the landscape of gaming tech startups in India...</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className='mb-[18px] px-[9px] w-full lg5:w-[375px] max-w-full'>
                                        <div className='w-full h-[140px] rounded-[4px] border-[1px] border-[#b7b7b7] py-[24px] px-[16px] shadow-custom3 flex items-center justify-start'>
                                            <div className='border-[1px] border-[#b7b7b7] rounded-[4px]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732505909.png&w=96&q=75" alt="" className='rounded-[4px] w-[85px]'/>
                                            </div>
                                            <div className='flex flex-col w-[200px] ml-[10px] text-[32px] font-[700]'>
                                                <p className='text-[16px] font-[500] h-[38px] leading-[20px] text-[#222]'>Startup Sector: Health Tech</p>
                                                <span className='text-[12px] font-[500] text-[#666] h-[45px] leading-[15.5px] mt-[5px]'>A quick investor's guide to understand the landscape of health tech startups in India...</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className='mb-[18px] px-[9px] w-full lg5:w-[375px] max-w-full'>
                                        <div className='w-full h-[140px] rounded-[4px] border-[1px] border-[#b7b7b7] py-[24px] px-[16px] shadow-custom3 flex items-center justify-start'>
                                            <div className='border-[1px] border-[#b7b7b7] rounded-[4px]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732272181.png&w=256&q=75" alt="" className='rounded-[4px] w-[85px]'/>
                                            </div>
                                            <div className='flex flex-col w-[200px] ml-[10px] text-[32px] font-[700]'>
                                                <p className='text-[16px] font-[500] h-[38px] leading-[20px] text-[#222]'>Startup Sector: EV</p>
                                                <span className='text-[12px] font-[500] text-[#666] h-[45px] leading-[15.5px] mt-[5px]'>A quick investor's guide to understand the landscape of electric vehicle startups in India...</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className='mb-[18px] px-[9px] w-full lg5:w-[375px] max-w-full'>
                                        <div className='w-full h-[140px] rounded-[4px] border-[1px] border-[#b7b7b7] py-[24px] px-[16px] shadow-custom3 flex items-center justify-start'>
                                            <div className='border-[1px] border-[#b7b7b7] rounded-[4px]'>
                                                <img src="https://investor.creddinv.in/_next/image?url=https%3A%2F%2Fcreddinv.s3.ap-south-1.amazonaws.com%2Fuploads%2Fproduction%2FKNOWLEDGE_CENTER_IMAGE_1732270956.png&w=256&q=75" alt="" className='rounded-[4px] w-[85px]'/>
                                            </div>
                                            <div className='flex flex-col w-[200px] ml-[10px] text-[32px] font-[700]'>
                                                <p className='text-[16px] font-[500] h-[38px] leading-[20px] text-[#222]'>Startup Sector: Agri-Tech</p>
                                                <span className='text-[12px] font-[500] text-[#666] h-[45px] leading-[15.5px] mt-[5px]'>A quick investor's guide to understand the landscape of agri-tech startups in India...</span>
                                            </div>
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                        )}

                    </div>

                    
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Stknldgecntr
