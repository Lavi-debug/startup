import React, { useState, useRef, useCallback, useEffect } from "react";
import Stnavbar from '../startuphome/Nvbrforhome'
import logo from './Logo.png'

const Startupmainhomepage = () => {
     const host = "http://localhost:5000";
    
        const [investorData, setInvestorData] = useState(null);
        async function getInvestorById(id) {
            try {
                // Make a request to the endpoint using the provided ID
                const response = await fetch(`${host}/api/startup/getStartupById/${id}`);
        
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
            const investorId = localStorage.getItem('registeredId');
        
            if (investorId) {
                getInvestorById(investorId); // Call the function with the retrieved ID
            } else {
                console.error('No investor ID found in localStorage');
            }
        }, []); // Empty dependency array to run the effect only once
  return (
    <>
    <Stnavbar/>
    <div className='font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] pb-[80px] pt-[160px]'>
        <div className='h-full flex items-center justify-center '>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[300px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>
    
                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src={logo} alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>
    
                        <div>
                            <div className='px-[9px] mt-[95px] flex flex-col items-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'><span className='font-[500]'>Thank your</span> You have successfully completed KYC and registered as a Startup with Venture Loop. We will contact you soon</h1>
    
                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <div className='mt-[3rem]'>
    
                                {/* <div className='flex w-full justify-center mt-[50px]'>
                                    <Link to='/investorlogin' className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[180px] py-[12px] px[24px] text-white text-[13px] font-[500] shadow-custom4 p-4'>Go To Login</button>
                                    </Link>
                                </div> */}
    
                                </div>
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

export default Startupmainhomepage
