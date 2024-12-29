import React, { useState, useRef, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from './Logo.png'

const Nvbrforhome = () => {
     const host = "http://localhost:5000"; // Backend host URL
        
            const location = useLocation();  // Get the location object
            const { email } = location.state || {}; 
        
            const [isMenuOpen, setIsMenuOpen] = useState(false);
        
            const [isProfileOpen, setIsProfileOpen] = useState(false);
        
        
            const [activeDiv, setActiveDiv] = useState(1);
        
            const handleClick = useCallback((value) => {
                setActiveDiv(value);
            }, []);
    
             const [isOpen5, setIsOpen5] = useState(false);
            const [isOpen6, setIsOpen6] = useState(false);
            const [isOpen7, setIsOpen7] = useState(false);
            const [isOpen8, setIsOpen8] = useState(false);
            const [isOpen9, setIsOpen9] = useState(false);
            const [isOpen10, setIsOpen10] = useState(false);
            const [isOpen11, setIsOpen11] = useState(false);
            const [isOpen12, setIsOpen12] = useState(false);
            const [isOpen13, setIsOpen13] = useState(false);
        
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
         <nav className='fixed top-0 w-full px-[20px] bg-[#222] h-[85px] text-right z-50'>
                 <div className='flex gap-[24px] h-full items-center justify-between'>
         
                     <div className='flex justify-items-start items-center min-w-[250px]'>
                         <img src="https://investor.creddinv.in/_next/static/media/hamburger_white.3e4a1984.svg" alt="" className='w-[46px] md:hidden block'  onClick={() => setIsMenuOpen(!isMenuOpen)} />
                         <img src={logo} alt="" className='w-[170px]'/>
                     </div>
         
                     {/* <div className='ml-[36px] w-full md:flex justify-start hidden'>
                         <div className='flex flex-col justify-start items-start'>
                             <p className='text-[12.5px] font-[300] text-[#d9d9d9]'>Portfolio Value</p>
                             <p className='text-[#d1f8a1]'>₹0</p>
                         </div>
                         <div className='flex flex-col justify-start items-start ml-[18px]'>
                             <p className='text-[12.5px] font-[300] text-[#d9d9d9]'>Total Invested</p>
                             <p className='text-[#ffd596]'>₹0</p>
                         </div>
                         <div className='flex flex-col justify-start items-start ml-[18px]'>
                             <p className='text-[12.5px] font-[300] text-[#d9d9d9]'>Total gain/loss</p>
                             <div className='flex justify-start items-center'>
                                 <p className='text-white mr-[3px]'> 0</p>
                             </div>
                         </div>
                         <div className='flex flex-col justify-start items-start ml-[18px]'>
                             <p className='text-[12.5px] font-[300] text-[#d9d9d9]'>Campaigns Invested</p>
                             <p className='text-white'>0</p>
                         </div>
                     </div> */}
          
                     <div className='flex items-center justify-start relative'>
                         <div className='relative w-[68px]'  onClick={() => setIsProfileOpen(!isProfileOpen)}>
                             <img src="https://investor.creddinv.in/_next/static/media/profile2.c0a4e450.svg" alt=""  className='w-[68px] h-[40px]'/>
                             <img src="https://investor.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felite_crest.83db2c49.png&w=640&q=75" alt="" className='absolute w-[40px] h-[14px] bottom-[-4px] left-[-2px] mr-[40px]'/>
                         </div>
         
                         <div className={`profiledropdown absolute bg-white z-50 rounded-[8px] top-[50px] left-[-214px]  ${isProfileOpen ? "block" : "hidden"}`} >
                             <div className='w-[271px] min-h-fit'>
                                 <div>
                                     <div className='p-[12px] border-[1px] border-[#d9d9d9] rounded-[8px]'>
                                         <div className='flex items-center mb-[6px] w-full gap-[12px]'>
                                             <div className='relative'>
                                                 <img src="https://investor.creddinv.in/_next/static/media/profile.fb9b3909.svg" alt="" />
                                                 <img src="https://investor.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felite_crest.83db2c49.png&w=640&q=75" alt="" className='w-[40px] h-[14px] absolute left-[-2px] bottom-[-4px]'/>
                                             </div>
                                             <div className="items-start flex flex-col justify-start">
                                             {investorData ? (
                                                     <p className="text-[14px] font-[600]">{investorData.firstName}</p>
                                                 ) : (
                                                     <p>Loading...</p>
                                                 )}
                                                 <p className='text-[12px] font-[300]'>User ID - CI-20241108-902</p>
                                                 {investorData ? (
                                                     
                                                     <p className="text-[14px] font-[600]">{investorData.email.length > 20 ? `${investorData.email.substring(0, 20)}...` : investorData.email}</p>
                                                     
                                                 ) : (
                                                     <p>Loading...</p>
                                                 )}
                                             </div>
                                         </div>
         
                                         <span className='ml-[56px] py-[1px] px-[8px] text-[12px] font-[500] bg-[#ebfff4] text-[#00b654]'>KYC approved</span>
                                     </div>
                                     <div>
                                         <div>
                                             <Link to='/Alldetails' className='p-[10px] pl-[18px] flex items-center hover:bg-green-200 ease-in duration-100' onClick={() => setIsOpen5(!isOpen5)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/persnal_detal.b0983f67.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Start-Up details</p>
                                             </Link>
   
                                             {/* <Link to='/Strtupabtus' className='p-[10px] pl-[18px] flex items-center hover:bg-green-200 ease-in duration-100' onClick={() => setIsOpen5(!isOpen5)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/persnal_detal.b0983f67.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>More details</p>
                                             </Link> */}
         
                                             {/* <Link to='' className='p-[10px] pl-[18px] flex items-center hover:bg-green-100 ease-in duration-100' onClick={() => setIsOpen6(!isOpen6)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/bank_Settings.0ebf63c5.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Bank details</p>
                                             </Link>
         
                                             <Link to='' className='p-[10px] pl-[18px] flex items-center hover:bg-green-100 ease-in duration-100' onClick={() => setIsOpen7(!isOpen7)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/premium_investor_icon.1d6a4a9c.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Private round details</p>
                                             </Link> */}
         
                                             {/* <Link to='/Changepasswod' className='p-[10px] pl-[18px] flex items-center hover:bg-green-100 ease-in duration-100' onClick={() => setIsOpen8(!isOpen8)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/changePass.5f333530.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Change password</p>
                                             </Link> */}
         
                                             {/* <Link to='' className='p-[10px] pl-[18px] flex items-center hover:bg-green-100 ease-in duration-300' onClick={() => setIsOpen9(!isOpen9)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/bookmark_black_outline.a885bb6d.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Bookmarks</p>
                                             </Link>
         
                                             <Link to='' className='p-[10px] pl-[18px] flex items-center hover:bg-green-100 ease-in duration-100' onClick={() => setIsOpen10(!isOpen10)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/notification_black_outline.2e1604f1.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Notifications</p>
                                             </Link> */}
         
                                             <a href="https://wa.me/919892102328" className='p-[10px] pl-[18px] flex items-center hover:bg-green-200 ease-in duration-100' onClick={() => setIsOpen11(!isOpen11)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/support.95fcfec4.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'> Contact support</p>
                                                 {/* <a  target="_blank">Contact support</a> */}
                                            
                                             </a>
         
                                             <Link to='/investorlogin' className='p-[10px] pl-[18px] flex items-center hover:bg-green-200 ease-in duration-100' onClick={() => setIsOpen12(!isOpen12)}>
                                                 <img src="https://investor.creddinv.in/_next/static/media/logout.5439196c.svg" alt="" />
                                                 <p className='text-[14px] font-[400] text-[#444] ml-[12px]'>Logout</p>
                                             </Link>
         
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
         
                 </div>
             </nav>
         
             {/* <div className='flex relative'>
         
                 <div className={`sidebar fixed top-[85px] left-0 md:block h-[100vh] z-[40] w-[306px] ${
                   isMenuOpen ? "block" : "hidden"}`}>
                     <div className='bg-[#222] min-h-screen overflow-hidden px-[40px] py-[10px]'>
                         <p className='text-[12px] font-[500] text-[#b7b7b7] tracking-wider'>INVESTOR DASHBOARD</p>
                         <div className='h-full relative'>
                             <div className='pt-[32px] h-[calc(100vh-76px)]'>
         
                                 <ul className='relative block'>
         
                                     <li onClick={() => setActiveDiv(1)} className="transition-transform transform hover:translate-x-2 ease-in duration-200">
                                         <Link to="/Stprdctofrng" className='p-[16px] mb-[12px] flex items-center justify-start rounded-[2px] text-[#b7b7b7]'>
                                             <img src="https://investor.creddinv.in/_next/static/media/product.33bf0db5.svg" alt="" className='mr-[8px] text-[20px]'/>
                                             <span className='text-[16px] font-[400] ml-[8px]'>Product offerings</span>
                                         </Link>
                                     </li>
         
                                     <li onClick={() => setActiveDiv(2)} className="transition-transform transform hover:translate-x-2 ease-in duration-200">
                                         <Link to="/Stlivecmpgn" className='p-[16px] mb-[12px] flex items-center justify-start rounded-[2px] text-[#b7b7b7]'>
                                             <img src="https://investor.creddinv.in/_next/static/media/campaign.a050f4b7.svg" alt="" className='mr-[8px] text-[20px]'/>
                                             <span className='text-[16px] font-[400] ml-[8px]'>Live campaigns</span>
                                         </Link>
                                     </li>
         
                                     <li onClick={() => setActiveDiv(3)} className="transition-transform transform hover:translate-x-2 ease-in duration-200">
                                         <Link to="/Stmyprot" className='p-[16px] mb-[12px] flex items-center justify-start rounded-[2px] text-[#b7b7b7]'>
                                             <img src="https://investor.creddinv.in/_next/static/media/graph.fb24ba6a.svg" alt="" className='mr-[8px] text-[20px]'/>
                                             <span className='text-[16px] font-[400] ml-[8px]'>My Portfolio</span>
                                         </Link>
                                     </li>
         
                                     <li onClick={() => setActiveDiv(4)} className="transition-transform transform hover:translate-x-2 ease-in duration-200">
                                         <Link to="/Stknldgecntr" className='p-[16px] mb-[12px] flex items-center justify-start rounded-[2px] text-[#b7b7b7]'>
                                             <img src="https://investor.creddinv.in/_next/static/media/news.e1f0d70b.svg" alt="" className='mr-[8px] text-[20px]'/>
                                             <span className='text-[16px] font-[400] ml-[8px]'>Knowledge center</span>
                                         </Link>
                                     </li>
         
                                     <li onClick={() => setActiveDiv(5)} className="transition-transform transform hover:translate-x-2 ease-in duration-200">
                                         <Link to="/Stfaq" className='p-[16px] mb-[12px] flex items-center justify-start rounded-[2px] text-[#b7b7b7]'>
                                             <img src="https://investor.creddinv.in/_next/static/media/QuestionMark.645d5c10.svg" alt="" className='mr-[8px] text-[20px]'/>
                                             <span className='text-[16px] font-[400] ml-[8px]'>FAQs</span>
                                         </Link>
                                     </li>
         
                                 </ul>
         
                             </div>
                         </div>
                     </div>
                 </div>
         
                 <div className="md:ml-[306px] mt-[85px] w-full h-full">
         
                     <div className="maincont">
                         <>
                              <Productoffering investorData={investorData} /> 
                             <Livecampaigns investorData={investorData} />
                             <Myportfolioi investorData={investorData} />
                             <Knowledgecenter investorData={investorData} />
                             <Blogpage investorData={investorData} /> 
                             <FAQ investorData={investorData} />
                             <Personaldetails investorData={investorData} />
                             <Bankdetails investorData={investorData} />
                             <Privaterounddetails investorData={investorData} />
                             <Changepasswod investorData={investorData} />
                         </>
                     </div>
         
                     
                     
                 </div>
             </div> */}
       </>
  )
}

export default Nvbrforhome
