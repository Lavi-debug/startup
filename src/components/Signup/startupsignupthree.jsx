import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';
import logo from './Logo.png'
import page from './pageimg.svg'
import pdf from './pdfimg.svg'
import download from './downloadimg.svg'
import alert from './alertimg.svg'
import pitch from './pitch.pdf'

const startupsignupthree = () => {
    const navigate = useNavigate()
    
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
            interestedInPrivateRound: 'yes',
            pdf: null,        
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

        const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
    
        if (file) {
            if (file.type !== "application/pdf") {
                alert("Only PDF files are allowed.");
                return;
            }
    
            if (file.size > 16 * 1024 * 1024) { // 25MB limit
                alert("File size must be less than 16MB.");
                return;
            }
    
            // Process the file (e.g., upload to the server or display a preview)
            
            setFormData((prevFormData) => ({
                ...prevFormData,
                pdf: file, // Update the pdf field
            }));

            console.log("File selected:", file.name);
        }
        };
    
        // const handleSubmit = async (e) => {
        // e.preventDefault();
        
        // console.log("handleSubmit triggered!"); // Log when the function is triggered
        
        // setErrors([]);
        // console.log("Form Data Before Validation:", formData); // Log form data before validation
        
        // setIsSubmitting(true);
        // console.log("Form submission started..."); // Log when form submission starts

        // const userId = localStorage.getItem('registeredId');
        
    
        // if (!userId) {
        //     console.error("User ID not found in localStorage.");
        //     alert("User ID not found. Please log in again.");
        //     return;
        // }
        
        // try {
        //     console.log("Sending API request to:", `${host}/api/startup/updateStartup/${userId}`); // Log API endpoint
        //     console.log("Request Body:", JSON.stringify({

        //     firstName: formData.firstName,                   
        //     lastName: formData.lastName,                    
        //     email: formData.password,                       
        //     password: formData.password,                    
        //     number: formData.number,                      
        //     founderLinkedIn: formData.founderLinkedIn,             
        //     companyName: formData.companyName,                 
        //     companyWebsite: formData.companyWebsite,                 
        //     companyLinkedIn: formData.companyLinkedIn,             
        //     sizeOfTeam: formData.sizeOfTeam,                   
        //     revenue: formData.revenue,                     
        //     describeProduct: formData.describeProduct,             
        //     describePreviousFundingRound: formData.describePreviousFundingRound,
        //     describeFraction: formData.describeFraction,            
        //     whyCommunityRound: formData.whyCommunityRound,           
        //     whyVentureLoop: formData.whyVentureLoop,              
        //     existingCommitments: formData.existingCommitments,         
        //     interestedInPrivateRound: formData.interestedInPrivateRound,  
            
        //     }));
        
        //     const response = await fetch(`${host}/api/startup/updateStartup/${userId}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstName: formData.firstName,                   
        //         lastName: formData.lastName,                    
        //         email: formData.password,                       
        //         password: formData.password,                    
        //         number: formData.number,                      
        //         founderLinkedIn: formData.founderLinkedIn,             
        //         companyName: formData.companyName,                 
        //         companyWebsite: formData.companyWebsite,                 
        //         companyLinkedIn: formData.companyLinkedIn,             
        //         sizeOfTeam: formData.sizeOfTeam,                   
        //         revenue: formData.revenue,                     
        //         describeProduct: formData.describeProduct,             
        //         describePreviousFundingRound: formData.describePreviousFundingRound,
        //         describeFraction: formData.describeFraction,            
        //         whyCommunityRound: formData.whyCommunityRound,           
        //         whyVentureLoop: formData.whyVentureLoop,              
        //         existingCommitments: formData.existingCommitments,   
        //         interestedInPrivateRound: formData.interestedInPrivateRound,   
        //     }),
        //     });
        
        //     const data = await response.json();
        //     console.log("API Response Status:", response.status); // Log response status
        //     console.log("API Response Data:", data); // Log response data
        
        //     if (!response.ok) {
        //     console.error("API Error:", data.errors || data.error); // Log errors if response is not okay
        //     throw new Error(data.errors ? data.errors.join(', ') : data.error);
        //     }
        
        //     console.log("Update successful!"); // Log success
        //     navigate('/startupsignupfour');
        // //   alert("Update successful!");
        //     // Optionally update the frontend state here with the updated investor data
        // } catch (error) {
        //     console.error("Error during update:", error.message); // Log caught errors
        //     alert("An error occurred during the update.");
        // } finally {
        //     setIsSubmitting(false);
        //     console.log("Form submission ended."); // Log when submission ends
        // }
        // };
    
        const handlePdfSubmit = async (pdfFile) => {
            if (!pdfFile) {
                console.error('No PDF file provided.');
                return null;  // Return null if no file is provided
            }
        
            try {
                const formDataPdf = new FormData();
                formDataPdf.append('pdf', pdfFile);
        
                // Send the file to the server using POST
                const responsePdf = await fetch(`${host}/api/startup/uploadPdf`, {
                    method: 'POST',
                    body: formDataPdf,
                });
        
                const dataPdf = await responsePdf.json();
                if (!responsePdf.ok) {
                    throw new Error(dataPdf.message || 'Error uploading PDF');
                }
        
                console.log('PDF uploaded successfully:', dataPdf.fileUrl);
                return dataPdf.fileUrl;  // Return the file URL where the PDF is saved on the server
            } catch (error) {
                console.error('Error uploading PDF:', error.message);
                return null;
            }
        };
        
        

        const handleSubmit = async (formData, pdfPath) => {
            console.log("handleSubmit triggered!");
          
            setErrors([]);
            console.log("Form Data Before Validation:", formData);
          
            setIsSubmitting(true);
            console.log("Form submission started...");
          
            const userId = localStorage.getItem('registeredId');
          
            if (!userId) {
              console.error("User ID not found in localStorage.");
              return;
            }
          
            try {
              // Submit the rest of the form data
              const response = await fetch(`${host}/api/startup/updateStartup/${userId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  email: formData.email,
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
                  interestedInPrivateRound: formData.interestedInPrivateRound,
                  pdf: pdfPath, // Attach the uploaded PDF file path
                }),
              });
          
              const data = await response.json();
              console.log('API Response Status:', response.status);
              console.log('API Response Data:', data);
          
              if (!response.ok) {
                console.error('API Error:', data.errors || data.error);
                throw new Error(data.errors ? data.errors.join(', ') : data.error);
              }
          
              console.log('Update successful!');
              navigate('/startupsignupfour');
            } catch (error) {
              console.error('Error during update:', error.message);
             
            } finally {
              setIsSubmitting(false);
              console.log('Form submission ended.');
            }
        };
                  
        const onSubmit = async (e) => {
            e.preventDefault();
        
            console.log("Form submission started!");
        
            setIsSubmitting(true);  // Indicate the form is submitting
        
            // Step 1: Upload PDF first
            const pdfPath = await handlePdfSubmit(formData.pdf);  // Call handlePdfSubmit and get PDF path
        
            if (!pdfPath) {
                // If PDF upload fails, stop the form submission process
                alert("PDF upload failed.");
                setIsSubmitting(false);
                return;
            }
        
            // Step 2: Submit the rest of the form data
            await handleSubmit(formData, pdfPath);  // Call handleSubmit with the form data and the PDF path
        
            console.log("Form submission completed.");
            setIsSubmitting(false);  // Reset submitting state
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
                            <div className='px-[9px] mt-[95px] flex flex-col justify-center items-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[300] text-center'>Hello,<span className=''><strong> </strong></span></h1>
                                <h1 className='max-w-[560px] text-[26px] font-[300] text-center'>Help Venture Loop undestand you better</h1>

                            </div>
                            
                            <div className='mt-[32px] flex justify-center items-center flex-col w-[80vw]'>
                                <p className='text-[12px] font-[400]'>Please enter the below details and verify your info</p>
                                <div className='mt-[3rem] w-full'>
                                <form onSubmit={onSubmit} className='flex flex-col items-start w-full'>

 
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

                                    <div className='flex flex-wrap justify-center items-center w-full mt-[12px]'>

                                        <div className='mt-[22px] px-[9px] w-full h-[81px] justify-center flex flex-col'>
                                            <label htmlFor="" className='text-[15px] text-center font-[500] text-[black] leading-[17.46px]'>Upload your pitch deck*</label>

                                            <div className='flex-wrap lg4:flex gap-[20px] justify-center mt-[12px]'>
                                           
                                                <div onClick={() => document.getElementById('uploadPitchDeck').click()} className='flex cursor-pointer items-center gap-[12px] bg-gray-200 py-[6px] pl-[10px] pr-[22px] border-[2px] border-dashed border-gray-500 lg4:max-w-fit max-w-full mt-[8px]'>
                                                <div className='pdfimg'>
                                                    <img src={page} alt="" />
                                                </div>
                                                <div className="pdftxt">
                                                    <h1 className='text-[12px] text-black text-left' >Click Here or drag & drop to upload</h1>
                                                    <p className='text-[10px] text-gray-400  text-left'>PDF only | Max length: 16mb</p>
                                                </div>
                                                </div>

                                                <a href={pitch} download="pitch-deck-template.pdf" className='flex cursor-pointer items-center gap-[12px] bg-gray-200 py-[6px] pl-[10px] pr-[22px] border-[2px] border-dashed border-gray-500 lg4:max-w-fit max-w-full mt-[8px]'>
                                                <div className='pdfimg'>
                                                    <img src={pdf} alt="" />
                                                </div>
                                                <div className="pdftxt">
                                                    <h1 className='text-[12px] text-black text-left' >Download pitch deck template</h1>
                                                    <p className='text-[10px] text-gray-400  text-left'>Recommended</p>
                                                </div>
                                                <div className='dwldimg'>
                                                    <img src={download} alt="" />
                                                </div>
                                                </a>

                                                <input
                                                    type="file"
                                                    id="uploadPitchDeck"
                                                    accept="application/pdf" // Restrict to PDF files
                                                    style={{ display: 'none' }} // Hide the input
                                                    onChange={handleFileChange} // Handle file selection
                                                />

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
                    </div>
                </div>
            </div> 
        </div>
        </div> 
    </>
  )
}

export default startupsignupthree
