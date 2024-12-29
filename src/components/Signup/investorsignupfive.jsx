import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './Logo.png'

const investorsignupfive = () => {
  return (
    <>
        <div className='font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] pb-[80px]'>
        <div className='h-full flex items-center justify-center'>
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
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'><span className='font-[500]'>Congrutulations!</span> You have successfully completed KYC and registeed as an investor with Venture Loop</h1>

                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <div className='mt-[3rem]'>

                                <div className='flex w-full justify-center mt-[50px]'>
                                    <Link to='/investorlogin' className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[180px] py-[12px] px[24px] text-white text-[13px] font-[500] shadow-custom4 p-4'>Go To Login</button>
                                    </Link>
                                </div>

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

export default investorsignupfive
