import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';
import logo from './Logo.png'

const investorsignupthree = () => {
  const navigate = useNavigate()
    const host = "http://localhost:5000";
    const [formData, setFormData] = useState({
        panCardNumber: '',
        aadharCardNumber: '',
        authorizePAN: '',
        authorizeAadhar: '',
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

      const validateForm = (formData) => {
        let formErrors = [];

        if (!formData.authorizePAN) {
            formErrors.push("You must authorize the use of your PAN card.");
        }
        
        // Validate Aadhar Card Authorization
        if (!formData.authorizeAadhar) {
        formErrors.push("You must authorize the use of your Aadhar card.");
        }
        return formErrors;
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log("handleSubmit triggered!"); // Log when the function is triggered
      
        setErrors([]);
        console.log("Form Data Before Validation:", formData); // Log form data before validation
      
        const validationErrors = validateForm(formData);
        console.log("Validation Errors:", validationErrors); // Log validation errors
      
        if (validationErrors.length > 0) {
          setErrors(validationErrors);
          console.log("Form submission stopped due to validation errors."); // Log if validation fails
          return;
        }
      
        setIsSubmitting(true);
        console.log("Form submission started..."); // Log when form submission starts

        const userId = localStorage.getItem('userId');
            
            if (!userId) {
                console.error("User ID not found in localStorage.");
                alert("User ID not found. Please log in again.");
                return;
            }
      
        try {
          console.log("Sending API request to:", `${host}/api/investor/update/${userId}`); // Log API endpoint
          console.log("Request Body:", JSON.stringify({
            number: formData.number,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            gender: formData.gender,
            dob: formData.dob,
            maritalStatus: formData.maritalStatus,
            annualGrossIncome: formData.annualGrossIncome,
            currentResidentialStatus: formData.currentResidentialStatus,
            pincode: formData.pincode,
            panCardNumber: formData.panCardNumber,
            aadharCardNumber: formData.aadharCardNumber,
            ifscCode: formData.ifscCode,
            accountNumber: formData.accountNumber,
            iAccept: formData.iAccept,
            isEighteenOrOlder: formData.isEighteenOrOlder,
          }));
      
          const response = await fetch(`${host}/api/investor/update/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              number: formData.number,
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
              gender: formData.gender,
              dob: formData.dob,
              maritalStatus: formData.maritalStatus,
              annualGrossIncome: formData.annualGrossIncome,
              currentResidentialStatus: formData.currentResidentialStatus,
              pincode: formData.pincode,
              panCardNumber: formData.panCardNumber,
              aadharCardNumber: formData.aadharCardNumber,
              ifscCode: formData.ifscCode,
              accountNumber: formData.accountNumber,
              iAccept: formData.iAccept,
              isEighteenOrOlder: formData.isEighteenOrOlder,
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
          // alert("Update successful!");
          navigate('/inverstorsignupfive');
          // Optionally update the frontend state here with the updated investor data
        } catch (error) {
          console.error("Error during update:", error.message); // Log caught errors
          alert("An error occurred during the update.");
        } finally {
          setIsSubmitting(false);
          console.log("Form submission ended."); // Log when submission ends
        }
      };
  
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
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Hey <span className='font-[500]'> User! </span></h1>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Let's get you KYC done</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <p className='text-[15px] font-[400]'>Please share PAN and Adhaar Number</p>
                                <div className='mt-[3rem]'>

                                    <div className='max-w-[380px] w-full sm3:w-[380px] mb-[20px]'>

                                        <label htmlFor="panCardNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>PAN Number</label>

                                        <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                            <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' 
                                            placeholder="PAN" 
                                            type="text"
                                            id="panCardNumber"
                                            name="panCardNumber" 
                                            value={formData.panCardNumber}  
                                            onChange={handleInputChange}/>

                                        </div>

                                        <div className='mt-[38px] text-[0.875rem] font-[500] text-green-600 text-center flex justify-start gap-[6px]'>
                                            <input 
                                             type="checkbox"
                                             name="authorizePAN"
                                             className="accent-green-600"
                                             checked={formData.authorizePAN}
                                             onChange={handleInputChange}/>
                                            <p className='text-[12px] font-[400] text-[black]'>I authorize Venture Loop....</p>
                                        </div>

                                    </div>

                                </div>

                                {/* <div className='flex flex-col w-full justify-center items-center'>

                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-white text-[14px] font-[500] shadow-custom4'>Verify PAN</button>
                                    </div>

                                </div> */}

                                <div className='mt-[3rem]'>

                                    <div className='max-w-[380px] w-full sm3:w-[380px] mb-[20px]'>

                                        <label htmlFor="aadharCardNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Aadhar Number</label>

                                        <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                            <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' 
                                            placeholder="Adhaar no." 
                                            type="text"
                                            id="aadharCardNumber"
                                            name="aadharCardNumber" 
                                            value={formData.aadharCardNumber}  
                                            onChange={handleInputChange}/>

                                        </div>

                                        <div className='mt-[38px] text-[0.875rem] font-[500] text-green-600 text-center flex justify-start gap-[6px]'>
                                            <input 
                                             type="checkbox"
                                             name="authorizeAadhar"
                                             className="accent-green-600"
                                             checked={formData.authorizeAadhar}
                                             onChange={handleInputChange}/>
                                            <p className='text-[12px] font-[400] text-[black]'>I authorize Venture Loop....</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex flex-col w-full justify-center items-center'>

                                    <div type='submit' className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-white text-[14px] font-[500] shadow-custom4'>Next</button>
                                    </div>

                                </div>
                            </div>

                            </form>

                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>  
    </>
  )
}

export default investorsignupthree
