import React, { useState } from 'react';
import UserNavbar from '../userhome/UserNavbar'

const Bankdetails = () => {

   const host = "http://localhost:5000";
  
      const [formData, setFormData] = useState({
          number: '',
          email: '',
          firstName: '',
          lastName: '',
          gender: '',
          dob: '',
          occupation: '',
          maritalStatus: '',
          annualGrossIncome: '',
          currentResidentialStatus: 'indian',
          addressLine1: '',
          addressLine2: '',
          city: '',
          pincode: '',
          relativesPoliticallyExposed: '',
          fatherFirstName: '',
          fatherLastName: '',
          nomineeName: '',
          nomineeDob: '',
          relationWithNominee: '',
          isEighteenOrOlder: '',
          iAccept: '',
          panCardNumber: '',
          aadharCardNumber: '',
          authorizePAN: '',
          authorizeAadhar: '',
          accountType: '',
          ifscCode: '', 
          accountNumber: '',
          accountHolderName: ''
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

            if (!formData.accountType || formData.accountType.trim().length === 0) {
                formErrors.push("Account type is required.");
            }
            
            // IFSC Code Validation
            if (!formData.ifscCode || !/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/.test(formData.ifscCode)) {
                formErrors.push("Please enter a valid IFSC code.");
            }
            
            // Account Number Validation
            if (!formData.accountNumber || !/^\d{9,18}$/.test(formData.accountNumber)) {
                formErrors.push("Please enter a valid account number (9 to 18 digits).");
            }
        
            return formErrors;
        };

    //   const handleSubmit = async (e) => {
    //       e.preventDefault();
        
    //       console.log("handleSubmit triggered!"); // Log when the function is triggered
        
    //       setErrors([]);
    //       console.log("Form Data Before Validation:", formData); // Log form data before validation
        
    //       const validationErrors = validateForm(formData);
    //       console.log("Validation Errors:", validationErrors); // Log validation errors
        
    //       if (validationErrors.length > 0) {
    //         setErrors(validationErrors);
    //         console.log("Form submission stopped due to validation errors."); // Log if validation fails
    //         return;
    //       }
        
    //       setIsSubmitting(true);
    //       console.log("Form submission started..."); // Log when form submission starts
        
    //       try {
    //         console.log("Sending API request to:", `${host}/api/investor/update/6756b2eacf0ea37ff9bedec6`); // Log API endpoint
    //         console.log("Request Body:", JSON.stringify({
    //           number: formData.number,
    //           email: formData.email,
    //           firstName: formData.firstName,
    //           lastName: formData.lastName,
    //           gender: formData.gender,
    //           dob: formData.dob,
    //           maritalStatus: formData.maritalStatus,
    //           annualGrossIncome: formData.annualGrossIncome,
    //           currentResidentialStatus: formData.currentResidentialStatus,
    //           pincode: formData.pincode,
    //           panCardNumber: formData.panCardNumber,
    //           aadharCardNumber: formData.aadharCardNumber,
    //           ifscCode: formData.ifscCode,
    //           accountNumber: formData.accountNumber,
    //           accountHolderName: formData.accountHolderName,
    //           iAccept: formData.iAccept,
    //           isEighteenOrOlder: formData.isEighteenOrOlder,
    //         }));
        
    //         const response = await fetch(`${host}/api/investor/update/6756b2eacf0ea37ff9bedec6`, {
    //           method: 'PUT',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             number: formData.number,
    //             email: formData.email,
    //             firstName: formData.firstName,
    //             lastName: formData.lastName,
    //             gender: formData.gender,
    //             dob: formData.dob,
    //             maritalStatus: formData.maritalStatus,
    //             annualGrossIncome: formData.annualGrossIncome,
    //             currentResidentialStatus: formData.currentResidentialStatus,
    //             pincode: formData.pincode,
    //             panCardNumber: formData.panCardNumber,
    //             aadharCardNumber: formData.aadharCardNumber,
    //             ifscCode: formData.ifscCode,
    //             accountNumber: formData.accountNumber,
    //             accountHolderName: formData.accountHolderName,
    //             iAccept: formData.iAccept,
    //             isEighteenOrOlder: formData.isEighteenOrOlder,
    //           }),
    //         });
        
    //         const data = await response.json();
    //         console.log("API Response Status:", response.status); // Log response status
    //         console.log("API Response Data:", data); // Log response data
        
    //         if (!response.ok) {
    //           console.error("API Error:", data.errors || data.error); // Log errors if response is not okay
    //           throw new Error(data.errors ? data.errors.join(', ') : data.error);
    //         }
        
    //         console.log("Update successful!"); // Log success
    //         alert("Update successful!");
    //         // Optionally update the frontend state here with the updated investor data
    //       } catch (error) {
    //         console.error("Error during update:", error.message); // Log caught errors
    //         alert("An error occurred during the update.");
    //       } finally {
    //         setIsSubmitting(false);
    //         console.log("Form submission ended."); // Log when submission ends
    //       }
    //     };
    
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
    
        // Get userId from localStorage
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
            console.error("User ID not found in localStorage.");
            alert("User ID not found. Please log in again.");
            return;
        }
    
        try {
            console.log("Sending API request to:", `${host}/api/investor/update/${userId}`); // Log API endpoint with dynamic userId
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
                accountHolderName: formData.accountHolderName,
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
                    accountHolderName: formData.accountHolderName,
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
            alert("Update successful!");
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

                <div className='flex flex-col justify-center items-center mb-[50px] mt-[30px] min-h-[70vh]'>
                    <div className='flex items-center flex-col justify-center w-full'>
                        <h1 className='text-[32px] font-[700] leading-[48px] mt-[12px]'>Bank details</h1>
                        <p className='text-[16px] font-[400] mt-[3px]'>This is where your investments will be debited from</p>
                    </div>
                    <div className='px-[40px] mt-[6px] w-full'>
                        <div className='max-w-full px-[9px] w-full flex justify-center'>

                        <form onSubmit={handleSubmit} className='flex flex-col items-start'>

                            <div className='flex items-center lg3:justify-start justify-start flex-wrap w-full mt-[36px] gap-[12px]'>
                                <span className='text-[16px] font-[500]'>What type of account do you have?</span>
                                <div>
                                    <div className='flex flex-wrap gap-[16px] items-center'>
                                        <label htmlFor="Savings" className='flex items-center gap-[6px]'>
                                            <span className='pt-[5px]'><input 
                                            name="accountType"
                                            type="radio"
                                            value="Savings"
                                            checked={formData.accountType === "Savings"}
                                            onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}/></span>
                                            <span>Savings</span>
                                        </label>

                                        <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                            <span className='pt-[5px]'><input 
                                            name="accountType"
                                            type="radio"
                                            value="Current"
                                            checked={formData.accountType === "Current"}
                                            onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}/></span>
                                            <span>Current</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-center mt-[10px]'>

                            <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                    <label htmlFor="accountHolderName*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Account Holder Name*</label>
                                    <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                        <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                        type="text"
                                        placeholder="Enter Acc. No. Code"
                                        name='accountHolderName'
                                        value={formData.accountHolderName} // Bind to the state value
                                        onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })} />
                                    </div>
                                </div>


                                <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                    <label htmlFor="accountNumber*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Account Number*</label>
                                    <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                        <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                        type="text"
                                        placeholder="Enter Acc. No. Code"
                                        name='accountNumber'
                                        value={formData.accountNumber} // Bind to the state value
                                        onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })} />
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-wrap justify-center mt-[10px]'>
                                <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="ifscCode*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>IFSC Code*</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                            type="text"
                                            placeholder="Enter IFSC Code"
                                            name='ifscCode'
                                            value={formData.ifscCode} // Bind to the state value
                                            onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })} />
                                        </div>
                                </div>
                            </div>

                            <div className='flex w-full justify-center mt-[50px]'>
                                <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                    <button type='submit' className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[180px] py-[12px] px[24px] text-white text-[13px] font-[500] shadow-custom4 p-4'>Update</button>
                                </div>
                            </div>


                        </form>

                        </div>
                    </div>
                </div> 
        </div>
    </div>

    
      
    </>
  )
}

export default Bankdetails
