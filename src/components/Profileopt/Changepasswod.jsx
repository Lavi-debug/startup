import React, { useState, useEffect } from 'react';
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';
import UserNavbar from '../userhome/UserNavbar'
import bcrypt from 'bcryptjs';

const Changepasswod = () => {

        const host = "http://localhost:5000";
        
        const [formData, setFormData] = useState({
            number: '',
            email: '',
            firstName: '',
            currentPassword: '',
            confirmPassword: '',
            password: '',
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
    
        // const validateForm = (formData) => {
        // let formErrors = [];
        
        // // Phone Number Validation
        // if (!formData.number || !/^\d{10}$/.test(formData.number)) {
        //     formErrors.push("Please enter a valid 10-digit phone number.");
        // }
        
        // // Email Validation
        // if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        //     formErrors.push("Please enter a valid email address.");
        // }
        
        // // First Name Validation
        // if (!formData.firstName || formData.firstName.trim().length === 0) {
        //     formErrors.push("First name cannot be empty.");
        // }
        
        // // Last Name Validation
        // if (!formData.lastName || formData.lastName.trim().length === 0) {
        //     formErrors.push("Last name cannot be empty.");
        // }
        
        // // Gender Validation
        // if (!formData.gender || !["Male", "Female", "Other"].includes(formData.gender)) {
        //     formErrors.push("Please select a valid gender.");
        // }
        
        // // Date of Birth Validation
        // // if (!formData.dateOfBirth || !/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dateOfBirth)) {
        // //   formErrors.push("Please enter a valid date of birth (MM/DD/YYYY).");
        // // }
        
        // // Marital Status Validation
        // if (
        //     !formData.maritalStatus ||
        //     !["Single", "Married", "Divorced", "Widowed"].includes(formData.maritalStatus)
        // ) {
        //     formErrors.push("Please select a valid marital status.");
        // }

        // if (!formData.residence) {
        //     errors.residence = "Please select your residential status.";
        // }
    
        // // Validate Address Line 1
        // if (!formData.addressLine1 || formData.addressLine1.trim() === "") {
        //     errors.addressLine1 = "Address Line 1 is required.";
        // }
    
        // // Validate Address Line 2
        // if (!formData.addressLine2 || formData.addressLine2.trim() === "") {
        //     errors.addressLine2 = "Address Line 2 is required.";
        // }
    
        // // Validate City
        // if (!formData.city || formData.city.trim() === "") {
        //     errors.city = "City is required.";
        // }
    
        // // Validate Pincode
        // if (!formData.pincode || formData.pincode.trim() === "") {
        //     errors.pincode = "Pincode is required.";
        // } else if (!/^\d{6}$/.test(formData.pincode)) {
        //     errors.pincode = "Pincode must be a 6-digit number.";
        // }
    
        // // Validate Politically Exposed Status
        // if (!formData.politicallyExposed) {
        //     errors.politicallyExposed = "Please specify if you or your relatives are politically exposed.";
        // }
    
        // // Validate Father's First Name
        // if (!formData.fatherFirstName || formData.fatherFirstName.trim() === "") {
        //     errors.fatherFirstName = "Father's First Name is required.";
        // }
    
        // // Validate Father's Last Name
        // if (!formData.fatherLastName || formData.fatherLastName.trim() === "") {
        //     errors.fatherLastName = "Father's Last Name is required.";
        // }
        
        // // Validate Nominee Name
        // if (!formData.nomineeName || formData.nomineeName.trim() === "") {
        //     errors.nomineeName = "Nominee name is required.";
        // }
    
        // // Validate Nominee Date of Birth
        // if (!formData.nomineeDob || formData.nomineeDob.trim() === "") {
        //     errors.nomineeDob = "Nominee Date of Birth is required.";
        // } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.nomineeDob)) {
        //     errors.nomineeDob = "Nominee Date of Birth must be in DD/MM/YYYY format.";
        // }
    
        // // Validate Relationship with Nominee
        // if (!formData.relationshipWithNominee || formData.relationshipWithNominee.trim() === "") {
        //     errors.relationshipWithNominee = "Relationship with nominee is required.";
        // }
        
        // return formErrors;
        // }     
    
        // const handleSubmit = async (e) => {
        //     e.preventDefault();
        
        //     console.log("handleSubmit triggered!"); // Log when the function is triggered
        
        //     setErrors([]);
        //     console.log("Form Data Before Validation:", formData); // Log form data before validation
        
        //     const validationErrors = validateForm(formData);
        //     console.log("Validation Errors:", validationErrors); // Log validation errors
        
        //     if (validationErrors.length > 0) {
        //     setErrors(validationErrors);
        //     console.log("Form submission stopped due to validation errors."); // Log if validation fails
        //     return;
        //     }
        
        //     setIsSubmitting(true);
        //     console.log("Form submission started..."); // Log when form submission starts

        //     const userId = localStorage.getItem('userId');
        
        //     if (!userId) {
        //         console.error("User ID not found in localStorage.");
        //         alert("User ID not found. Please log in again.");
        //         return;
        //     }
        
        //     try {
        //     console.log("Sending API request to:", `${host}/api/investor/updatehome/${userId}`); // Log API endpoint
        //     console.log("Request Body:", JSON.stringify({
        //         number: formData.number,
        //         email: formData.email,
        //         password: formData.password,
        //         firstName: formData.firstName,
        //         lastName: formData.lastName,
        //         gender: formData.gender,
        //         dob: formData.dob,
        //         maritalStatus: formData.maritalStatus,
        //         annualGrossIncome: formData.annualGrossIncome,
        //         currentResidentialStatus: formData.currentResidentialStatus,
        //         pincode: formData.pincode,
        //         panCardNumber: formData.panCardNumber,
        //         aadharCardNumber: formData.aadharCardNumber,
        //         ifscCode: formData.ifscCode,
        //         accountNumber: formData.accountNumber,
        //         iAccept: formData.iAccept,
        //         isEighteenOrOlder: formData.isEighteenOrOlder,
        //     }));
        
        //     const response = await fetch(`${host}/api/investor/update/${userId}`, {
        //         method: 'PUT',
        //         headers: {
        //         'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //         number: formData.number,
        //         email: formData.email,
        //         password: formData.password,
        //         firstName: formData.firstName,
        //         lastName: formData.lastName,
        //         gender: formData.gender,
        //         dob: formData.dob,
        //         maritalStatus: formData.maritalStatus,
        //         annualGrossIncome: formData.annualGrossIncome,
        //         currentResidentialStatus: formData.currentResidentialStatus,
        //         pincode: formData.pincode,
        //         panCardNumber: formData.panCardNumber,
        //         aadharCardNumber: formData.aadharCardNumber,
        //         ifscCode: formData.ifscCode,
        //         accountNumber: formData.accountNumber,
        //         iAccept: formData.iAccept,
        //         isEighteenOrOlder: formData.isEighteenOrOlder,
        //         }),
        //     });
        
        //     const data = await response.json();
        //     console.log("API Response Status:", response.status); // Log response status
        //     console.log("API Response Data:", data); // Log response data
        
        //     if (!response.ok) {
        //         console.error("API Error:", data.errors || data.error); // Log errors if response is not okay
        //         throw new Error(data.errors ? data.errors.join(', ') : data.error);
        //     }
        
        //     console.log("Update successful!"); // Log success
        //     alert("Update successful!");
        //     // Optionally update the frontend state here with the updated investor data
        //     } catch (error) {
        //     console.error("Error during update:", error.message); // Log caught errors
        //     alert("An error occurred during the update.");
        //     } finally {
        //     setIsSubmitting(false);
        //     console.log("Form submission ended."); // Log when submission ends
        //     }
        // };


        // const handlePasswordUpdate = async (e) => {
        //     e.preventDefault();
            
        //     // Check if currentPassword matches hashed password
        //     const isMatch = await bcrypt.compare(formData.currentPassword, investorData.password);
        
        //     if (!isMatch) {
        //     setErrors(["Current password is incorrect"]);
        //     return;
        //     }
        
        //     // Proceed with updating the password if matched
        //     handleSubmit();
        // };

        const handlePasswordUpdate = async (e) => {
            e.preventDefault(); // Prevent default form submission
            const { currentPassword, password, confirmPassword } = formData;
        
            // Basic validations
            if (!currentPassword) {
                alert("Current password is required");
                return;
            }
            if (!password || password.length < 8) {
                alert("New password must be at least 8 characters long");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const userId = localStorage.getItem('userId');
        
            if (!userId) {
                console.error("User ID not found in localStorage.");
                alert("User ID not found. Please log in again.");
                return;
            }
        
            try {
                
                const response = await fetch(`${host}/api/investor/updatepassword/${userId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        currentPassword,
                        password,
                    }),
                });
        
                if (response.ok) {
                    const data = await response.json();
                    alert("Password updated successfully!");
                    console.log("Updated user:", data);
                } else {
                    const error = await response.json();
                    alert(error.error || "Failed to update password. Please try again.");
                }
            } catch (err) {
                console.error("Error updating password:", err);
                alert("An error occurred. Please try again later.");
            }
        };
        


        // const handlePasswordUpdate = (e) => {
        //     e.preventDefault(); // Prevent default form submission
        //     const { currentPassword, password, confirmPassword } = formData;
        
        //     // Basic validations
        //     if (!currentPassword) {
        //         alert("Current password is required");
        //         return;
        //     }
        //     if (!password || password.length < 8) {
        //         alert("New password must be at least 8 characters long");
        //         return;
        //     }
        //     if (password !== confirmPassword) {
        //         alert("Passwords do not match");
        //         return;
        //     }
        
        //     // Submit the form data (e.g., via API)
        //     console.log("Form submitted:", formData);
        // };
        
        const [investorData, setInvestorData] = useState({ 
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
        }); 

        // Function to fetch investor data by ID
        const fetchInvestorData = async () => {
            try {
                const id = localStorage.getItem('userId'); // Get ID from localStorage
                if (!id) {
                    console.error('Investor ID not found in local storage');
                    return;
                }
    
                const response = await fetch(`${host}/api/investor/getInvestorById/${id}`); // API call using fetch
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }

                const data = await response.json(); // Parse JSON response
                setInvestorData({
                    number: data.number || 'N/A', // Set number or default to 'N/A'
                    email: data.email || 'N/A',
                    firstName: data.firstName || 'NA', // Set email or default to 'N/A'
                    lastName: data.lastName || 'NA', // Set email or default to 'N/A'
                    gender: data.gender || 'NA', // Set email or default to 'N/A'
                    dob: data.dob || 'NA', // Set email or default to 'N/A'
                    fatherFirstName: data.fatherFirstName || 'NA', // Set email or default to 'N/A'
                    fatherLastName: data.fatherLastName || 'NA', // Set email or default to 'N/A'
                });
            } catch (error) {
                console.error('Error fetching investor data:', error);
            }
        };
    
        // Call fetchInvestorData on component mount
        useEffect(() => {
            fetchInvestorData();
        }, []);
              
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

            <div className='flex justify-center items-center flex-col mt-[30px] mb-[50px] min-h-[70vh]'>
                <div className='flex items-center justify-center w-full'>
                    <h1 className='text-[34px] font-[700] leading-[48px] mt-[12px]'>Password Management</h1>
                </div>
                <p className='text-[14px] font-[600]'>Here, you can change the password</p>
                <div className='flex items-center flex-col mt-[16px]'>

                <form onSubmit={handlePasswordUpdate} className='flex flex-col items-start'>

                    <div className='flex flex-wrap justify-center'>

                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                            <label htmlFor="email" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>EmailID</label>
                            <div>
                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                placeholder="Your Email" 
                                type="email"
                                id="email"
                                name="email"
                                value={investorData.email}
                                onChange={handleInputChange}
                                readOnly/>
                            </div>
                            <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verified email <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
                        </div>

                        {/* <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                            <label htmlFor="currentPassword*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Current Password*</label>
                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'   placeholder="Enter current password"
                                type="text"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleInputChange} // Ensure this updates the state correctly
                                required/>
                            </div>
                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Current password is Required</div>
                        </div> */}

                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                        <label htmlFor="currentPassword*" className='text-[14px] font-[500] text-[#666] leading-[17.46px]'>
                            Current Password*
                        </label>
                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                            {/* <div className='w-[47px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                            <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                            <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                            </div> */}
                            <input 
                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'   
                            placeholder="Enter current password"
                            type="text"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleInputChange} // Ensure this updates the state correctly
                            required
                            />
                        </div>
                        {/* Show the error message only if the currentPassword is empty */}
                        {formData.currentPassword.length === 0 && (
                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                            Current password is Required
                            </div>
                        )}
                        </div>
                        
                    </div>

                    <div className='flex flex-wrap justify-center mt-[10px]'>

                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[195px]'>
                            <label htmlFor="password*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>New Password*</label>
                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'   placeholder="Enter new password"
                                type="text"
                                id="password"
                                name="password"
                                value={formData.password || ""}
                                onChange={handleInputChange}/>
                            </div>
                            {formData.password.length === 0 && (
                                <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                Confirm password is Required
                                </div>
                            )}

                            <div className='mt-[6px]'>
                                <span>Password must contain -</span>
                                <div className='w-[310px] flex flex-wrap gap-[12px] mt-[6px]'>

                                {!formData.password || formData.password.length < 8 ? (
                                    <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>Minimum 8 characters</span>
                                    </div>
                                ) : 
                                <div className='flex'>
                                    <img src="https://investor.creddinv.in/_next/static/media/success.58a3d699.svg" alt="" />
                                    <span className='text-left text-green-600 text-[13px] font-[500]'>Minimum 8 characters</span>
                                </div> }

                                {!/[A-Z]/.test(formData.password) ? (
                                    <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 upper case letter</span>
                                    </div>
                                ) : 
                                <div className='flex'>
                                    <img src="https://investor.creddinv.in/_next/static/media/success.58a3d699.svg" alt="" />
                                    <span className='text-left text-green-600 text-[13px] font-[500]'>1 upper case letter</span>
                                </div>}

                                {!/\d/.test(formData.password) ? (
                                    <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 numerical character</span>
                                    </div>
                                ) : 
                                <div className='flex'>
                                    <img src="https://investor.creddinv.in/_next/static/media/success.58a3d699.svg" alt="" />
                                    <span className='text-left text-green-600 text-[13px] font-[500]'>1 numerical character</span>
                                </div>}

                                {!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? (
                                    <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 special character</span>
                                    </div>
                                ) :
                                <div className='flex'>
                                    <img src="https://investor.creddinv.in/_next/static/media/success.58a3d699.svg" alt="" />
                                    <span className='text-left text-green-600 text-[13px] font-[500]'>1 special character</span>
                                </div>}

                                    {/* <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>Minimum 8 characters</span>
                                    </div> */}

                                    {/* <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 upper case letter</span>
                                    </div> */}

                                    {/* <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 numerical character</span>
                                    </div>

                                    <div className='flex'>
                                        <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                        <span className='text-left text-red-600 text-[13px] font-[500]'>1 special character</span>
                                    </div> */}

                                </div>
                            </div>
                        </div>

                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[195px]'>
                            <label htmlFor="Confirm Password*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Confirm Password*</label>
                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'  placeholder="Confirm new password"
                                type="text"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword || ""}
                                onChange={handleInputChange}/>
                            </div>
                            {formData.confirmPassword.length === 0 && (
                                <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                    Confirm password is required
                                </div>
                            )}

                            {formData.confirmPassword.length > 0 && formData.confirmPassword !== formData.password && (
                                <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                    Passwords do not match
                                </div>
                            )}
                        </div>

                        {/* <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[195px]'>
                        <label htmlFor="confirmPassword" className='text-[14px] font-[500] text-[#666] leading-[17.46px]'>
                            Confirm Password*
                        </label>
                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                            <input 
                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'  
                            placeholder="Confirm new password"
                            type="password" 
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword || ""}
                            onChange={handleInputChange}
                            />
                        </div>

                       
                        {formData.confirmPassword.length === 0 && (
                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                            Confirm password is Required
                            </div>
                        )}

                       
                        {formData.confirmPassword.length > 0 && formData.confirmPassword !== formData.password && (
                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                            Passwords don't match
                            </div>
                        )}
                        </div> */}

                    </div>

                    <div className='flex w-full justify-center'>
                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                            <button type='submit' className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>Update Now</button>
                        </div>
                    </div>


                </form>
                </div>

            </div>


        </div>
    </div>
      
    </>
  )
}

export default Changepasswod
