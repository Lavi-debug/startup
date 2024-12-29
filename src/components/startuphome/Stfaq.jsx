import React from 'react'
import Stnavbar from '../startuphome/Stnavbar'


const Stfaq = () => {
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

                        <div>
                            <h1 className='text-[32px] font-[700]'>Frequently Asked Questions</h1>
                            <div>
                                <div className='flex flex-col justify-center items-center mt-[38px]'>
                                    <img src="https://investor.creddinv.in/_next/static/media/NoResultFound.7eb41ba5.svg" alt="" className='w-[240px]'/>
                                    <h5 className='text-[24px] font-[700]'>No results found</h5>
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

export default Stfaq
