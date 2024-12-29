import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';
import logo from './Logo.png'

const startupsignup = () => {

    const navigate = useNavigate()
     const location = useLocation();

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
          navigate('/startupsignupthree');
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
    }, [location]); 
      

  return (
    <>

    {/* first slide */}

    <div className='font-[400] text-black text-[12px] bg-green-100 h-full'>
        <div className='h-full flex items-center justify-center'>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[1000px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src={logo} alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className='px-[9px] mt-[95px] flex justify-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[300] text-center'>I want to <span className=''><strong> signup </strong> as </span><span className=''> <strong>Start Up</strong></span></h1>
                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <p className='text-[12px] font-[400]'>Please enter the below details and verify your info</p>
                                <div className='mt-[3rem]'>

                                {/* <form onSubmit={handleSubmit} className='flex flex-col items-start'>

                                    <p className='text-[14px] font-[500] mb-[0px] px-[9px]'>Founder Details</p>
 
                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="firstName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>First name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="First Name" 
                                                type="text" 
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                id="firstName"
                                                name="firstName"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="lastName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Last name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                                placeholder="text" 
                                                type="lastName" 
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                id="lastName"
                                                name="lastName"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center mt-[10px]'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="email" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px'>Email ID</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                                 placeholder="1 (702) 123-4567" 
                                                 type="email" 
                                                 value={startupData.email}
                                                 onChange={handleInputChange}
                                                 id="email"
                                                 name="email"
                                                 readOnly/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>password is Required</div>

                                            
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>

                                            <label htmlFor="number" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>

                                            <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                                <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                    <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                    <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                                </div>

                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]'
                                                placeholder="1 (702) 123-4567" 
                                                type="tel" 
                                                value={startupData.number}
                                                onChange={handleInputChange}
                                                id="number"
                                                name="number"
                                                readOnly/>

                                            </div>

                                            <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div>

                                        </div>

                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[26px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="founderLinkedIn" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Founder's Linkedin URL</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                 placeholder="Founder LinkedIn" 
                                                 type="text" 
                                                 value={formData.founderLinkedIn}
                                                 onChange={handleInputChange}
                                                 id="founderLinkedIn"
                                                 name="founderLinkedIn"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                    </div>

                                    <p className='text-[14px] font-[500] mb-[0px] px-[9px] mt-[26px]'>Startup Details</p>
 
                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="companyName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Registered company name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Company Name" 
                                                type="text" 
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                id="companyName"
                                                name="companyName"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="companyWebsite" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company website</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Company Website" 
                                                type="text" 
                                                value={formData.companyWebsite}
                                                onChange={handleInputChange}
                                                id="companyWebsite"
                                                name="companyWebsite"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="companyLinkedIn" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company Linked URL</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Company LinkedIn" 
                                                type="text" 
                                                value={formData.companyLinkedIn}
                                                onChange={handleInputChange}
                                                id="companyLinkedIn"
                                                name="companyLinkedIn"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="sizeOfTeam" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>How big is your team ( mention in numbers )</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Size of Team in No." 
                                                type="text" 
                                                value={formData.sizeOfTeam}
                                                onChange={handleInputChange}
                                                id="sizeOfTeam"
                                                name="sizeOfTeam"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                            <label htmlFor="revenue" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Your revenue ( mention in numbers )</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Revenue in No." 
                                                type="text" 
                                                value={formData.revenue}
                                                onChange={handleInputChange}
                                                id="revenue"
                                                name="revenue"/>
                                            </div>
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current email is Required</div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex w-full justify-center mt-[18px]'>
                                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                            <button type="submit" className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Next</button>
                                        </div>
                                    </div>


                                </form> */}

                                 <form onSubmit={handleSubmit} className='flex flex-col items-start'>
                                                                   
                                        <p className='text-[14px] font-[500] mb-[0px] px-[9px]'>Founder Details</p>
    
                                        <div className='flex flex-wrap justify-center'>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="firstName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>First name</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="First Name" 
                                                    type="text" 
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    id="firstName"
                                                    name="firstName"/>
                                                </div>
                                                {formData.firstName.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        First Name is required
                                                    </div>
                                                )}
                                            </div>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="lastName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Last name</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                                    placeholder="Last name" 
                                                    type="lastName" 
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    id="lastName"
                                                    name="lastName"/>
                                                </div>
                                                {formData.lastName.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Last Name is required
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
    
                                        <div className='flex flex-wrap justify-center mt-[10px]'>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="email" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px'>Email ID</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                                    placeholder="1 (702) 123-4567" 
                                                    type="email" 
                                                    value={startupData.email}
                                                    onChange={handleInputChange}
                                                    id="email"
                                                    name="email"
                                                    readOnly/>
                                                </div>
                                                {/* <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>password is Required</div> */}
                                                <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verified email <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
    
                                                
                                            </div>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
    
                                                <label htmlFor="number" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>
    
                                                <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>
    
                                                    <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                        <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                        <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                                    </div>
    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]'
                                                    placeholder="1 (702) 123-4567" 
                                                    type="tel" 
                                                    value={startupData.number}
                                                    onChange={handleInputChange}
                                                    id="number"
                                                    name="number"
                                                    readOnly/>
    
                                                </div>
    
                                                {/* <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div> */}
                                                <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verified number <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
    
                                            </div>
    
                                        </div>
    
                                        <div className='flex flex-wrap justify-center'>
    
                                            <div className='mt-[26px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="founderLinkedIn" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Founder's Linkedin URL</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Founder LinkedIn" 
                                                    type="text" 
                                                    value={formData.founderLinkedIn}
                                                    onChange={handleInputChange}
                                                    id="founderLinkedIn"
                                                    name="founderLinkedIn"/>
                                                </div>
                                                {formData.founderLinkedIn.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Founder Linkedin is required
                                                    </div>
                                                )}
                                            </div>
    
                                        </div>
    
                                        <p className='text-[14px] font-[500] mb-[0px] px-[9px] mt-[26px]'>Startup Details</p>
    
                                        <div className='flex flex-wrap justify-center'>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="companyName" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Registered company name</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Company Name" 
                                                    type="text" 
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    id="companyName"
                                                    name="companyName"/>
                                                </div>
                                                {formData.companyName.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Company is required
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
    
                                        <div className='flex flex-wrap justify-center'>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="companyWebsite" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company website</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Company Website" 
                                                    type="text" 
                                                    value={formData.companyWebsite}
                                                    onChange={handleInputChange}
                                                    id="companyWebsite"
                                                    name="companyWebsite"/>
                                                </div>
                                                {formData.companyWebsite.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Company Website is required
                                                    </div>
                                                )}
                                            </div>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="companyLinkedIn" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Company Linked URL</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Company LinkedIn" 
                                                    type="text" 
                                                    value={formData.companyLinkedIn}
                                                    onChange={handleInputChange}
                                                    id="companyLinkedIn"
                                                    name="companyLinkedIn"/>
                                                </div>
                                                {formData.companyLinkedIn.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Company Linked is required
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
    
                                        <div className='flex flex-wrap justify-center'>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="sizeOfTeam" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>How big is your team ( mention in numbers )</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Size of Team in No." 
                                                    type="text" 
                                                    value={formData.sizeOfTeam}
                                                    onChange={handleInputChange}
                                                    id="sizeOfTeam"
                                                    name="sizeOfTeam"/>
                                                </div>
                                                {formData.sizeOfTeam.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Team is required
                                                    </div>
                                                )}
                                            </div>
    
                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                                <label htmlFor="revenue" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Your revenue ( mention in numbers )</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    
                                                    <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                    placeholder="Revenue in No." 
                                                    type="text" 
                                                    value={formData.revenue}
                                                    onChange={handleInputChange}
                                                    id="revenue"
                                                    name="revenue"/>
                                                </div>
                                                {formData.revenue.trim().length === 0 && (
                                                    <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                        Revenue is required
                                                    </div>
                                                )}
                                            </div>
                                            
                                        </div>
    
                                        <div className='flex w-full justify-center mt-[18px]'>
                                            <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                                <button type="submit" className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Next</button>
                                            </div>
                                        </div>
    
    
                                    </form>

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    {/* second slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100 h-full'>
        <div className='h-full flex items-center justify-center'>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[1000px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className='px-[9px] mt-[95px] flex flex-col justify-center items-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[300] text-center'>Hello<span className=''><strong> Company name </strong></span></h1>
                                <h1 className='max-w-[560px] text-[26px] font-[300] text-center'>Help Venture Loop undestand you better</h1>

                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col w-[80vw]'>
                                <p className='text-[12px] font-[400]'>Please enter the below details and verify your info</p>
                                <div className='mt-[3rem] w-full'>
                                <form action="" className='flex flex-col items-start w-full'>

 
                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="product" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your product</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="pre funding round" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your previous round</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                           
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="fraction" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Describe your fraction</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                          
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="whycommunity" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Why do you want to raise a community round</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                           
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="whyventureloop" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>What makes you think Venture Loop is right fo you</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                           
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap items-center justify-center w-full'>

                                        <div className='mt-[18px] px-[9px] w-full h-[81px]'>
                                            <label htmlFor="commitement" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Do you have any existing commitement?</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                
                                                <textarea className='bg-white w-full h-[58px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Type here" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                            </div>
                                           
                                        </div>
                                        
                                    </div>

                                    <div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px] px-[15px]'>
                                        <span className='text-[16px] font-[500]'>Would you be interested in raising a private round</span>
                                        <div>
                                            <div className='flex flex-wrap gap-[16px] items-center'>
                                                <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                    <span className='pt-[5px]'><input name='yesno' type="radio" className=''/></span>
                                                    <span>Yes</span>
                                                </label>
                                                <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                    <span className='pt-[5px]'><input name='yesno' type="radio" className=''/></span>
                                                    <span>No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex w-full flex-col items-center justify-center mt-[18px] mb-[40px]'>
                                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                            <button className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Submit</button>
                                        </div>
                                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                            <button className=' w-[170px] py-[15px] px[24px] text-black text-[10px] font-[500] p-4'>Go back</button>
                                        </div>
                                    </div>


                                </form>

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>  */}
      
    </>
  )
}

export default startupsignup
