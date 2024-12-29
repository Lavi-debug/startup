import React from 'react'
import UserNavbar from '../userhome/UserNavbar'

const Privaterounddetails = ({ investorData }) => {
  return (
    <>

    <UserNavbar/>

    <div className='relative'>
        <div className='md:absolute md:top-0 md:right-0 md:pl-[306px] w-full'>
            {/* <div className='incompleteKYC py-[20px] pl-[42px] pr-[40px] flex items-center justify-between flex-wrap bg-[#f7d8d7]'>
                    <p className='text-[16px] font-[400] text-[#222] flex'>
                        <img alt="alertred2" loading="lazy" width="24" height="25" decoding="async" data-nimg="1" className="mr-[8px]" src="https://investor.creddinv.in/_next/static/media/alertred2.1cebdb24.svg"/>
                        <span className='font-[500]'>KYC Pending:</span> 
                        Please complete your KYC immediately to start investing in campaigns
                    </p>

                    <div>
                        <button className='py-[9px] px-[16px] bg-[#222] text-white text-[12px] font-[500] rounded-[4px]'>Complete KYC</button>
                    </div>
            </div> */}

            <div className='mt-[60px] text-center relative flex flex-col items-center'>
                <h1 className='text-[34px] font-[700] leading-[48px] mt-[12px]'>Private round details</h1>
                <p className='text-[16px] font-[400] mt-[3px]'>View what plan you’ve opted for, make changes if required</p>
                <div className='mt-[40px] mx-auto p-[24px] border-[1px] border-[#666] w-[420px] max-w-[92vw] rounded-[4px] bg-green-100 text-left'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <img src="https://investor.creddinv.in/_next/static/media/creddinv_elite_logo.ec420d8a.svg" alt="" />
                            <p className='uppercase text-[14px] font-light leading-[17.64px] tracking-[0.2em]'>ELITE</p>
                        </div>
                        <div className='text-left w-[280px] max-w-[90vw] mt-[16px] mb-[28px]'>
                            <p className='text-[20px] font-[600]'>₹0 <span className='text-[14px] font-[400]'>invested</span></p>
                            <div className='success my-[4px] w-[280px] h-[8px] bg-green-500'></div>
                            <p className='text-[14px] font-[600]'><span className='text-[14px] font-[400]'>You have committed for </span>₹5Cr &amp; above</p>
                        </div>
                        <button className='bg-[#222] border-0 rounded-none shadow-custom4 text-white text-[14px] py-[14px] px-[30px] font-medium hover:shadow-none ease-in duration-150'>Change my plan</button>
                    </div>
                </div>
                <p className='text-[14px] font-semibold leading-[17.64px] w-[420px] max-w-[92vw] mx-auto mt-[16px] mb-0 border border-[#444] p-[6px] rounded-[4px] bg-green-100'>Moderate<span> risk appetite of </span>56%</p>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Privaterounddetails
