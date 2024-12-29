import React, { useState, useRef, useCallback, useEffect } from "react";
import UserNavbar from '../userhome/UserNavbar'
import logo from './Logo.png'

const Productoffering = () => {
    const host = "http://localhost:5000"; // Backend host URL
    
      const [investorData, setInvestorData] = useState(null);
    
        async function getInvestorById(id) {
            try {
                // Make a request to the endpoint using the provided ID
                const response = await fetch(`${host}/api/investor/getInvestorById/${id}`);
    
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
    
                // Parse the response JSON
                const data = await response.json();
    
                // Set the retrieved data in state
                setInvestorData(data);
    
                // Log the response data
                console.log('Investor Data:', data);
            } catch (error) {
                console.error('Error fetching investor data:', error);
            }
        }
    
        useEffect(() => {
            // Retrieve the investor ID from localStorage
            const investorId = localStorage.getItem('userId');
    
            if (investorId) {
                getInvestorById(investorId); // Call the function with the retrieved ID
            } else {
                console.error('No investor ID found in localStorage');
            }
        }, []); // Empty dependency array to run the effect only once
  return (
    <>

    <UserNavbar/>

    <div className='relative'>
            <div className='md:absolute md:top-0 md:right-0 md:pl-[306px] w-full'>
                {/* <div className='incompleteKYC py-[20px] pl-[42px] pr-[40px] flex items-center justify-center sm:justify-between flex-wrap bg-[#f7d8d7] sm:flex-nowrap'>
                    <p className='text-[16px] font-[400] text-[#222] flex items-center sm:items-start'>
                        <img alt="alertred2" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" className="mr-[8px]" src="https://investor.creddinv.in/_next/static/media/alertred2.1cebdb24.svg"/>

                        <div>
                            <span className='font-[500]'>KYC Pending:</span> 
                            Please complete your KYC immediately to start investing in campaigns
                        </div>
                    </p>

                    <div className='mt-[16px] sm:mt-0'>
                        <button className='py-[9px] px-[16px] bg-[#222] text-white text-[12px] font-[500] rounded-[4px]'>Complete KYC</button>
                    </div>
                </div> */}

                <div>
                    <div className='pl-[42px] pr-[40px] mt-[10px]'>

                        <p className="personName text-[20px] font-[400] text-[#666] pt-[18px]">Welcome back,  
                            {investorData ? (
                                <span className='font-[600] ml-[4px] text-[22px]'>{investorData.firstName}</span>
                            ) : (
                                <p>Loading...</p>
                            )}</p>

                        <h1 className='text-[32px] font-[700]'>Check out what Venture Loop offers you</h1>

                        <div className='my-[36px]'>
                            <h1 className='text-[18px] font-[700]'>Third Party offerings</h1>

                            <div className='grid grid-cols-[repeat(auto-fit,minmax(auto,245px))] gap-5 mt-4'>
                                <a href="">
                                    <div className='flex gap-[8px] items-center p-[10px] rounded-[6px] border-[2px] border-[#b7b7b7]'>
                                        <img src="https://investor.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthirdparty-thumb-placeholder.0d6489a5.webp&w=256&q=75" alt="" className='w-[42px] h-[42px]'/>
                                        <p className='text-[16px] font-[500]'>Loan against Securities</p>
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex gap-[8px] items-center p-[10px] rounded-[6px] border-[2px] border-[#b7b7b7]'>
                                        <img src="https://investor.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthirdparty-thumb-placeholder.0d6489a5.webp&w=256&q=75" alt="" className='w-[42px] h-[42px]'/>
                                        <p className='text-[16px] font-[500]'>Bands</p>
                                    </div>
                                </a>
                            </div>

                            <h1 className='text-[18px] font-[600] mt-[36px]'>Our product offerings</h1>

                            <div className='mt-[16px] max-w-[1054px] border-[1px] border-[#b7b7b7] rounded-[4px] shadow-custom1 p-[24px] relative bg-[#fffdf5]'>
                                <img src="https://investor.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew_tag.89d90b46.gif&w=640&q=75" alt="" className='absolute top-[-24px] left-[-16px] w-[78px] h-[64px] z-10'/>
                                <div className='flex justify-between items-center gap-[16px] flex-wrap'>
                                    <div className='text-[#222] mb-[110px]'>
                                        <img src={logo} alt="" className="w-[120px]"/>
                                        <p className='text-[24px] font-[700]'>Private Round Investments</p>
                                       
                                    </div>
                                    <div className='text-right w-[280px] max-w-[90vw]'>
                                        <p className='text-[20px] font-[700]'>₹0 <span className='text-[14px] font-[400]'>invested</span></p>
                                        <div className='success my-[4px] h-[8px] w-[240px] sm4:w-[280px] bg-green-100'></div>  {/*width: calc(100% - var(--success-percent)) */}
                                        <p className='text-[14px] font-[700]'><span className='text-[14px] font-[400]'>You have committed for </span>₹5Cr &amp; above</p>
                                    </div>
                                    <div className='flex flex-col gap-[16px] mt-[16px]'>
                                        <p className='text-[14px] font-[300]'>Venture Loop's Premium Series offers HNIs/UHNIs exclusive access to curated, high-growth startup investments. It offers access to pre-vetted startups, comprehensive market analysis and personalised investment strategies tailored to each investor's risk appetite.</p>

                                        <a href="/">
                                            <button className="py-[12px] px-[40px] bg-[#222] text-[14px] font-[500] text-white shadow-custom-black2 hover:shadow-none ease-in duration-150 p-4 flex items-center">View private round campaigns
                                                <img alt="arrow" loading="lazy" width="17" height="16" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/white_arrow.4699ea61.svg" className='w-[17px] h-[16px] ml-[10px] align-middle'/>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-[16px] mt-[12px] max-w-[1054px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>

                                <div className='flex items-center justify-between p-[24px] border-[1px] border-[#b7b7b7] shadow-custom-black2  hover:shadow-custom-hover ease-in duration-150 bg-[#f4ffe6]'>

                                    <div >
                                        <h5 className='text-[24px] font-[700]'>AIF</h5><span className="text-[16px] font-[400] text-[#666]">Alternative Investment Fund- Cat 1</span>
                                        <p className="text-[16px] text-[#666] font-[300] text-justify leading-[20px] mt-[12px]">Alternative Investment Fund- Cat 1 (AIFs) at Venture Loop is a distinct investment category of privately pooled funds, primarily attracting institutions and high net worth individuals due to substantial investment requirements. Governed by SEBI (Alternative Investment Fund- Cat 1) Regulations, 2012, AIFs in Venture Loop fall under Category 1 which includes venture capital funds, angel funds, infrastructure funds, and social venture funds.</p>
                                    </div>

                                    <br />

                                </div>

                                <div className='flex items-center justify-between p-[24px] border-[1px] border-[#b7b7b7] shadow-custom-black2  hover:shadow-custom-hover ease-in duration-150 bg-[#fff1dc]'>

                                    <div>
                                        <h5>Venture debt</h5>
                                        <span className="mt-2"></span>
                                        <p className="text-[16px] text-[#666] font-[300] text-justify leading-[20px] mt-[12px]">Venture Loop offers investors the opportunity to participate in Venture Debt, a strategic investment vehicle targeting high-growth startups. Unlike traditional equity investments, Venture Debt involves providing loans to emerging companies, offering investors a fixed income stream with competitive interest rates. With lower risk compared to equity investments, Venture Debt allows investors to diversify their portfolios while still capturing the potential upside of startup growth.</p>
                                    </div>

                                    <br />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
      
    </>
  )
}

export default Productoffering
