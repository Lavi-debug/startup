import React, { useState, useEffect } from 'react';
import Stnavbar from '../startuphome/Stnavbar'
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';

const strtupabtus = () => {
     const host = "http://localhost:5000";
    
        const [formData, setFormData] = useState({
            firstName: '',                   
            lastName: '',                    
            email: '',                       
            password: '',                    
            number: '',                      
            founderLinkedIn: '',             
            companyName: '',                 
            companyWebsite: '',                 
            companyLinkedIn: '',             
            sizeOfTeam: '',                   
            revenue: '',                     
            describeProduct: '',             
            describePreviousFundingRound: '',
            describeFraction: '',            
            whyCommunityRound: '',           
            whyVentureLoop: '',              
            existingCommitments: '',          
        });
    
        const [errors, setErrors] = useState([]);
        const [isSubmitting, setIsSubmitting] = useState(false);
        
    
        const handleInputChange = (e) => {
            const { name, value } = e.target; // Get the name and value of the changed input
            setFormData({
              ...formData, // Spread the previous state
              [name]: value, // Dynamically update the value of the field
            });
          };
    
          const handleSubmit = async (e) => {
            e.preventDefault();
          
            console.log("handleSubmit triggered!"); // Log when the function is triggered
          
            setErrors([]);
            console.log("Form Data Before Validation:", formData); // Log form data before validation
          
            setIsSubmitting(true);
            console.log("Form submission started..."); // Log when form submission starts
    
            const userId = localStorage.getItem('registeredId');
            
        
            if (!userId) {
                console.error("User ID not found in localStorage.");
                alert("User ID not found. Please log in again.");
                return;
            }
          
            try {
              console.log("Sending API request to:", `${host}/api/startup/updateStartup/${userId}`); // Log API endpoint
              console.log("Request Body:", JSON.stringify({
    
                firstName: formData.firstName,                   
                lastName: formData.lastName,                    
                email: formData.password,                       
                password: formData.password,                    
                number: formData.number,                      
                founderLinkedIn: formData.founderLinkedIn,             
                companyName: formData.companyName,                 
                companyWebsite: formData.companyWebsite,                 
                companyLinkedIn: formData.companyLinkedIn,             
                sizeOfTeam: formData.sizeOfTeam,                   
                revenue: formData.revenue,                     
                describeProduct: formData.describeProduct,             
                describePreviousFundingRound: formData.describePreviousFundingRound,
                describeFraction: formData.describeFraction,            
                whyCommunityRound: formData.whyCommunityRound,           
                whyVentureLoop: formData.whyVentureLoop,              
                existingCommitments: formData.existingCommitments,         
                
              }));
          
              const response = await fetch(`${host}/api/startup/updateStartup/${userId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,                   
                    lastName: formData.lastName,                    
                    email: formData.password,                       
                    password: formData.password,                    
                    number: formData.number,                      
                    founderLinkedIn: formData.founderLinkedIn,             
                    companyName: formData.companyName,                 
                    companyWebsite: formData.companyWebsite,                 
                    companyLinkedIn: formData.companyLinkedIn,             
                    sizeOfTeam: formData.sizeOfTeam,                   
                    revenue: formData.revenue,                     
                    describeProduct: formData.describeProduct,             
                    describePreviousFundingRound: formData.describePreviousFundingRound,
                    describeFraction: formData.describeFraction,            
                    whyCommunityRound: formData.whyCommunityRound,           
                    whyVentureLoop: formData.whyVentureLoop,              
                    existingCommitments: formData.existingCommitments,   
                }),
              });
          
              const data = await response.json();
              console.log("API Response Status:", response.status); // Log response status
              console.log("API Response Data:", data); // Log response data
          
              if (!response.ok) {
                console.error("API Error:", data.errors || data.error); // Log errors if response is not okay
                throw new Error(data.errors ? data.errors.join(', ') : data.error);
              }
          
              console.log("Update successful!"); // Log success
            //   alert("Update successful!");
              // Optionally update the frontend state here with the updated investor data
            } catch (error) {
              console.error("Error during update:", error.message); // Log caught errors
              alert("An error occurred during the update.");
            } finally {
              setIsSubmitting(false);
              console.log("Form submission ended."); // Log when submission ends
            }
          };
    
        const [startupData, setStartupData] = useState({ 
            firstName: '',                   
            lastName: '',                    
            email: '',                       
            password: '',                    
            number: '',                      
            founderLinkedIn: '',             
            companyName: '',                 
            companyWebsite: '',                 
            companyLinkedIn: '',             
            sizeOfTeam: '',                   
            revenue: '',                     
            describeProduct: '',             
            describePreviousFundingRound: '',
            describeFraction: '',            
            whyCommunityRound: '',           
            whyVentureLoop: '',              
            existingCommitments: '',         
        
        }); 
    
    
        const fetchStartupid = async () => {
        // Get the email from localStorage
        const email = localStorage.getItem('registeredEmail');
        
        if (!email) {
            console.error('Email not found in localStorage');
            return;
        }
        
        try {
            // Make the GET request to fetch startup data using the email
            const response = await fetch(`${host}/api/startup/getbyemailstartup/${email}`);
        
            // Check if the response is successful
            if (!response.ok) {
            throw new Error('Startup not found or error fetching data');
            }
        
            // Parse the response data
            const data = await response.json();
        
            // Check if startup data exists
            if (data && data.startup) {
            const startupId = data.startup._id; // Assuming the _id field is the startup's ID
        
            // Save the startup's id in localStorage
            localStorage.setItem('registeredId', startupId);
            
            console.log('Startup data fetched and ID saved in localStorage');
            console.log('Startup ID:', startupId);
            console.log(data)
            } else {
            console.error('No startup data found');
            }
        } catch (error) {
            console.error('Error fetching startup data:', error.message);
        }
        };
    
        const fetchstartupData = async () => {
            try {
                const id = localStorage.getItem('registeredId'); // Get ID from localStorage
                if (!id) {
                    console.error('Investor ID not found in local storage');
                    return;
                }
    
                const response = await fetch(`${host}/api/startup/getStartupById/${id}`); // API call using fetch
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
    
                const data = await response.json(); // Parse JSON response
                setStartupData({
                    number: data.number || 'N/A', // Set number or default to 'N/A'
                    email: data.email || 'N/A',
                });
            } catch (error) {
                console.error('Error fetching investor data:', error);
            }
        };
          
          // Call the function to fetch startup data and save the ID
        useEffect(() => {
            fetchStartupid();
            fetchstartupData()
        }, []); 
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

                                    <form onSubmit={handleSubmit} className='flex flex-col items-start w-full'>
                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="describeProduct" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your product</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Describe Your Product" 
                                                    type="text" 
                                                    value={formData.describeProduct}
                                                    onChange={handleInputChange}
                                                    id="describeProduct"
                                                    name="describeProduct"/>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="describePreviousFundingRound" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your previous round</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Describe Your Previous Funding Round" 
                                                    type="text" 
                                                    value={formData.describePreviousFundingRound}
                                                    onChange={handleInputChange}
                                                    id="describePreviousFundingRound"
                                                    name="describePreviousFundingRound"/>
                                                </div>
                                            
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="describeFraction" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your fraction</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Describe Your Fraction" 
                                                    type="text" 
                                                    value={formData.describeFraction}
                                                    onChange={handleInputChange}
                                                    id="describeFraction"
                                                    name="describeFraction"/>
                                                </div>
                                            
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="whyCommunityRound" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Why do you want to raise a community round</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Why Community Round?" 
                                                    type="text" 
                                                    value={formData.whyCommunityRound}
                                                    onChange={handleInputChange}
                                                    id="whyCommunityRound"
                                                    name="whyCommunityRound"/>
                                                </div>
                                            
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="whyVentureLoop" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>What makes you think Venture Loop is right fo you</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Why Venture Loop?" 
                                                    type="text" 
                                                    value={formData.whyVentureLoop}
                                                    onChange={handleInputChange}
                                                    id="whyVentureLoop"
                                                    name="whyVentureLoop"/>
                                                </div>
                                            
                                            </div>
                                            
                                        </div>

                                        <div className='flex flex-wrap items-center justify-center w-full'>

                                            <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                                <label htmlFor="existingCommitments" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Do you have any existing commitement?</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Existing Commitments?" 
                                                    type="text" 
                                                    value={formData.existingCommitments}
                                                    onChange={handleInputChange}
                                                    id="existingCommitments"
                                                    name="existingCommitments"/>
                                                </div>
                                            
                                            </div>
                                            
                                        </div>

                                        <div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px] px-[15px]'>
                                            <span className='text-[16px] font-[500]'>Would you be interested in raising a private round</span>
                                            <div>
                                                <div className='flex flex-wrap gap-[16px] items-center'>
                                                    <label htmlFor="interestedInPrivateRoundyes" className='flex items-center gap-[6px]'>
                                                        <span className='pt-[5px]'>
                                                            <input 
                                                            id="interestedInPrivateRoundyes"
                                                            name="interestedInPrivateRound"
                                                            type="radio"
                                                            value='yes'
                                                            checked={formData.interestedInPrivateRound === 'yes'}  // Check if the value matches the form data
                                                            onChange={handleInputChange}
                                                            className=''/></span>
                                                        <span>Yes</span>
                                                    </label>
                                                    <label htmlFor="interestedInPrivateRoundno" className='flex items-center gap-[6px]'>
                                                        <span className='pt-[5px]'>
                                                            <input 
                                                            id="interestedInPrivateRoundno"
                                                            name="interestedInPrivateRound"
                                                            type="radio"
                                                            value='no'
                                                            checked={formData.interestedInPrivateRound === 'no'}  // Check if the value matches the form data
                                                            onChange={handleInputChange}
                                                            className=''/></span>
                                                        <span>No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex w-full flex-col items-center justify-center mt-[18px] mb-[40px]'>
                                            <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                                <button type="submit" className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Submit</button>
                                            </div>
                                            <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                                <button className=' w-[170px] py-[15px] px[24px] text-black text-[10px] font-[500] p-4'>Go back</button>
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

export default strtupabtus
