import React from 'react'
import flag from '../Profileopt/flag.svg'
import arrow from '../Profileopt/arrow (2).svg'
import Stnavbar from '../startuphome/Stnavbar'


const Startupdetails = () => {
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

                {/* <div>
                <h2>Product Offering</h2>
                <p>Investor Name: {investorData ? investorData.firstName : 'Loading...'}</p>
                </div> */}
                
                <div className='flex flex-col justify-center items-center mb-[50px] mt-[30px] min-h-[70vh]'>
                    <div className='flex items-center justify-center w-full'>
                        <h1 className='text-[32px] font-[700] leading-[48px] mt-[12px]'>Personal details</h1>
                    </div>
                    <div className='px-[40px] mt-[6px] w-full'>
                        <div className='max-w-full px-[9px] w-full flex justify-center'>

                            <form action="" className='flex flex-col items-start'>

                                    <p className='text-[14px] font-[500] mb-[0px] px-[9px]'>Founder Details</p>
 
                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="First name" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>First name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter First name here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Last name" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Last name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Last namel here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center mt-[10px]'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Email ID" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px'>Email ID</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Email ID here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>password is Required</div>

                                            
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>

                                            <label htmlFor="PhoneNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>

                                            <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                                <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                    <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                    <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                                </div>

                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="" fdprocessedid="t70vb"/>

                                            </div>

                                            <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div>

                                        </div>

                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[26px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Founder's Linkedin URL" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Founder's Linkedin URL</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Link here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                    </div>

                                    <p className='text-[14px] font-[500] mb-[0px] px-[9px] mt-[26px]'>Startup Details</p>
 
                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Registered company name" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Registered company name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Your company name here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Company website" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company website</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Your company's website here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="Company Linked URL" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company Linked URL</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter link here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="team" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>How big is your team(mention in numbers)</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Your team here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="revenue" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Your revenue(mention in numbers)</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="revenue" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex w-full justify-center mt-[18px]'>
                                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                            <button className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Next</button>
                                        </div>
                                    </div>


                            </form>
                        
                        </div>
                    </div>
                </div> 

                <div className="footer flex items-center justify-between py-[20px] px-[40px] mt-[60px] bg-[#222] ">
                    <p className="text-[16px] text-[#999] font-[400]">©2024 Creddinv Technologies. All rights reserved.</p>
                    
                    <div className="links flex justify-between">
                        <a target="_blank" href="" className="text-[16px] font-[500] text-white">Terms &amp; conditions</a>
                        <a target="_blank" href="" className="text-[16px] font-[500] text-white ml-[18px]">Privacy Policy</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Startupdetails
