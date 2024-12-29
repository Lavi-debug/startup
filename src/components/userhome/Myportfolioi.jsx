import React from 'react'
import UserNavbar from '../userhome/UserNavbar'

const Myportfolioi = () => {
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
            <div className='mb-[36px] px-[42px] flex items-center w-full h-[100vh] justify-center'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <img src="https://investor.creddinv.in/_next/static/media/noinvestment.0121873c.svg" alt="" className='align-middle'/>
                    <h1 className='text-[40px] font-[700]'>You have no investments!</h1>
                    <p className='mb-[36px]'></p>
                    <a href="" className='py-[15px] px-[24px] bg-[#222] text-[white]'>See our offerings</a>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Myportfolioi
