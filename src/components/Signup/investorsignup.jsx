import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import flag from '../Profileopt/flag.svg'
import arrow from '../Profileopt/arrow (2).svg'
import logo from './Logo.png'


const investorsignup = () => {

    const host = "http://localhost:5000";

    const [formData, setFormData] = useState({
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    const [errors, setErrors] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const validateForm = () => {
        let formErrors = [];
    
        if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
          formErrors.push("Please enter a valid 10-digit phone number.");
        }
    
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.push("Please enter a valid email address.");
        }
    
        if (!formData.password || formData.password.length < 8) {
          formErrors.push("Password must be at least 8 characters.");
        }
    
        if (formData.password !== formData.confirmPassword) {
          formErrors.push("Passwords do not match.");
        }
    
        return formErrors;
      };
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setErrors([]);
    //     const validationErrors = validateForm();
    
    //     if (validationErrors.length > 0) {
    //       setErrors(validationErrors);
    //       return;
    //     }
    
    //     setIsSubmitting(true);
    
    //     try {
    //       const response = await fetch(`${host}/api/investor`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           number: formData.phoneNumber,
    //           email: formData.email,
    //           password: formData.password,
    //           firstName: 'NA', // You can add more form fields here as necessary
    //           lastName: 'NA',
    //           gender: 'NA',
    //           dob: '1990-01-NA',
    //           maritalStatus: 'NA',
    //           annualGrossIncome: 'NA',
    //           currentResidentialStatus: 'NA',
    //           pincode: 'NA',
    //           panCardNumber: 'NA',
    //           aadharCardNumber: 'NA',
    //           ifscCode: 'NA',
    //           accountNumber: 'NA',
    //           iAccept: 'NA',
    //           isEighteenOrOlder: 'NA',
    //         }),
    //       });
    
    //       const data = await response.json();
    
    //       if (!response.ok) {
    //         throw new Error(data.errors ? data.errors.join(', ') : data.error);
    //       }
    
    //       // Handle success, e.g., redirect or show success message
    //       alert("Registration successful!");
    //     } catch (error) {
    //       // Handle error
    //       console.error(error.message);
    //       alert("An error occurred during registration.");
    //     } finally {
    //       setIsSubmitting(false);
    //     }
    //   };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const validationErrors = validateForm();
      
        if (validationErrors.length > 0) {
          setErrors(validationErrors);
          return;
        }
      
        setIsSubmitting(true);
      
        try {
          const response = await fetch(`${host}/api/investor`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              number: formData.phoneNumber,
              email: formData.email,
              password: formData.password,
              firstName: 'John', // Replace 'NA' with actual values
              lastName: 'Doe',
              gender: 'Male', // Must be 'Male', 'Female', or 'Other'
              dob: '1990-01-01',
              maritalStatus: 'Single', // Must be 'Single', 'Married', etc.
              annualGrossIncome: '+1Cr', // Example value
              currentResidentialStatus: 'indian', // Must be 'Owner', 'Rented', etc.
              pincode: '123456',
              panCardNumber: 'ABCDE1234F', // A valid PAN card format
              aadharCardNumber: '123456789012', // A valid 12-digit Aadhar number
              ifscCode: 'ABCD0123456', // A valid IFSC code
              accountNumber: '123456789012', // A valid account number
              iAccept: 'true', // Must be 'true'
              isEighteenOrOlder: 'true', // Must be 'true'
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.errors ? data.errors.map(err => err.msg).join(', ') : data.error);
          }

          localStorage.setItem('registeredEmail', formData.email);

            // Redirect to /investorsignuptwo after successful registration
            navigate('/inverstorsignuptwo');
      
          // Handle success, e.g., redirect or show success message
        //   alert('Registration successful!');
        } catch (error) {
          // Handle error
          console.error(error.message);
          alert('An error occurred during registration.');
        } finally {
          setIsSubmitting(false);
        }
      };
      
  
    return (
    <>

    {/* first slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100'>
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='h-full flex items-center justify-center'>
                <div className='min-h-[300px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className='px-[9px]'>
                                <h1 className="text-center text-[24px] font-[300] max-w-[534px] mx-auto">Your Gateway to <span className="fade-in-1"><b>Funding</b> Innovations </span><span className="fade-in-2">&amp; <b>Fueling</b> Future Success</span></h1>
                            </div>
                            <div className='px-[9px] flex justify-center items-center text-center gap-[24px] mt-[85px] mb-[50px]'>
                                <button className='w-full max-w-[280px] h-[48px] py-[14px] px-[24px] font-[500] text-white border-[1px] border-[#222] bg-[#222] text-[12px] flex items-center relative text-center justify-center shadow-custom4 hover:bg-gray-300 hover:text-black hover:shadow-none ease-in duration-150'>
                                    <img src="https://signup.creddinv.in/_next/static/media/icon-google.42dccc89.svg" alt="" className='absolute top-[25%] left-[10%]'/>
                                    Continue with Google
                                </button>
                                <p>or</p>
                                <button className='w-full max-w-[280px] h-[48px] py-[14px] px-[24px] font-[500] text-black border-[1px] border-[#222] bg-white text-[12px] flex items-center relative text-center justify-center shadow-custom4 hover:bg-gray-300 hover:text-black hover:shadow-none ease-in duration-150'>Continue with phone number</button>
                            </div>
                            <div className='px-[9px] w-full'>
                                <div className='flex items-center justify-center gap-[10px] bg-[#f3fff2] mx-auto max-w-fit p-[10px]'>
                                    <img src="https://signup.creddinv.in/_next/static/media/icon-disclaimer.7599825b.svg" alt="" className='w-[18px] h-[18px]'/>
                                    <p className="font-[500] text-[#444] text-[9.5px]"><strong className="disclaimer-text-sub">For Startups:</strong>If you are signing up with Google, please make sure it’s your company’s official Google account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>  */}

    {/* second slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100'>
    <div className='h-[100vh] flex items-center justify-center'>
        <div className='h-full flex items-start justify-center'>
            <div className='min-h-[300px] flex items-center'>
                <div className='w-full max-w-[1360px] px-[9px]'>

                    <div>
                        <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                            <a href="">
                                <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className='px-[9px] mt-[95px]'>
                            <h1 className='max-w-[534px] text-[24px] font-[300] text-center'>I want to <span className=''><b> register </b> with </span><span className=''>my <b>phone number </b></span></h1>
                        </div>
                        
                        <div className='mt-[32px] flex items-center flex-col'>
                            <p className='text-[12px] font-[400]'>Please enter your phone number & verify it</p>
                            <div className='mt-[3rem]'>
                                <div className='max-w-[320px] mb-[20px]'>

                                    <label htmlFor="PhoneNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>

                                    <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                        <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                            <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                            <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                        </div>

                                        <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="" fdprocessedid="t70vb"/>

                                    </div>

                                    <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div>

                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </div> */}

    {/* third slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100'>
    <div className='h-[100vh] flex items-center justify-center'>
        <div className='h-full flex items-center justify-center'>
            <div className='min-h-[300px] flex items-center'>
                <div className='w-full max-w-[1360px] px-[9px]'>

                    <div>
                        <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                            <a href="">
                                <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                            </a>
                        </div>
                    </div>

                    <div className='mt-[85px]'>
                        <div className='px-[9px]'>
                            <h1 className="text-center text-[26px] font-[400] max-w-[534px] mx-auto">I want to <strong>sign up</strong> as</h1>
                        </div>
                        <div className='px-[9px] flex justify-center items-center text-center gap-[24px] mt-[85px] mb-[50px]'>
                            <button className='w-full max-w-[280px] h-[48px] flex justify-between items-center py-[8px] px-[15px] bg-green-400 '>
                                <div className='flex gap-[4px]'>
                                    <input type="radio" name='role' className='accent-green-500'/>
                                    <h1 className='font-[400]'>Investor</h1>
                                </div>
                                <div><img src="https://www.creddinv.in/_next/static/media/startUp_icon.33608d21.svg" alt="" /></div>
                            </button>
                            
                            <button className='w-full max-w-[280px] h-[48px] flex justify-between items-center py-[8px] px-[15px] bg-green-400 '>
                                <div className='flex gap-[4px]'>
                                    <input type="radio" name='role' className='accent-green-600'/>
                                    <h1 className='font-[400]'>Startup</h1>
                                </div>
                                <div><img src="https://www.creddinv.in/_next/static/media/investor_icon.86675e2b.svg" alt="" /></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </div> */}

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
                            <h1 className='max-w-[534px] text-[26px] font-[300] text-center'>I want to <span className=''><strong> signup </strong> as </span><span className=''> <strong>Investor </strong></span></h1>
                        </div>
                        
                        <div className='mt-[32px] flex items-center flex-col'>
                            <p className='text-[12px] font-[400]'>Please enter the below details and verify your info</p>
                            <div className='mt-[3rem]'>

                            <form onSubmit={handleSubmit} className='flex flex-col items-start'>

                                <div className='flex flex-wrap justify-center'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>

                                        <label htmlFor="PhoneNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>

                                        <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                            <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                            </div>

                                            <input 
                                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]'
                                            placeholder="1 (702) 123-4567"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            id="phoneNumber"
                                            name="phoneNumber"/>

                                        </div>
                                        {errors.includes('Please enter a valid 10-digit phone number.') && (
                                            <div className='text-red-500 text-xs mt-1'>Please enter a valid 10-digit phone number.</div>
                                        )}


                                        {!formData.phoneNumber || formData.phoneNumber.length < 10 ? (null) : 
                                        <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div> }


                                        {/* <div className='mt-[8px] text-[0.875rem] font-[400] text-green-600 text-center flex justify-start'><a href=""></a>Click here to verify your phone number</div> */}

                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
                                        <label htmlFor="Email Id" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Email Id</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            
                                            <input 
                                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter email here" 
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}/>
                                        </div>
                                        {errors.includes('Please enter a valid email address.') && (
                                            <div className='text-red-500 text-xs mt-1'>Please enter a valid email address.</div>
                                        )}
                                        {formData.email.length === 0 && (
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                            Email is Required
                                            </div>
                                        )}
                                    </div>
                                    
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[195px]'>
                                        <label htmlFor="Create Password" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Create Password*</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input
                                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                            placeholder="Enter new password here"
                                            type="text"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}/>
                                        </div>
                                        {errors.includes('Password must be at least 6 characters.') && (
                                            <div className='text-red-500 text-xs mt-1'>Password must be at least 8 characters.</div>
                                        )}
                                        {formData.password.length === 0 && (
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                            Confirm password is Required
                                            </div>
                                        )}

                                        <div className='mt-[12px]'>
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
                                                </div>
                                                <div className='flex'>
                                                    <img src="https://investor.creddinv.in/_next/static/media/cross.48929c3d.svg" alt="" />
                                                    <span className='text-left text-red-600 text-[13px] font-[500]'>1 upper case letter</span>
                                                </div>
                                                <div className='flex'>
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

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[195px]'>
                                        <label htmlFor="Confirm Password*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Confirm Password*</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input 
                                            className='bg-white w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                            placeholder="Re-enter new password here" 
                                            type="text"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}/>
                                        </div>
                                        {/* {errors.includes('Passwords do not match.') && (
                                            <div className='text-red-500 text-xs mt-1'>Passwords do not match.</div>
                                        )}
                                        <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Confirm password is Required</div> */}

                                        {formData.confirmPassword.length > 0 && formData.password !== formData.confirmPassword && (
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>Passwords do not match.</div>
                                        )}

                                        {/* Optional Message: Display if confirm password is empty */}
                                        {formData.confirmPassword.trim().length === 0 && (
                                            <div className='flex text-[12px] font-[500] text-red-500 gap-[5px] mt-[2px]'>
                                                Confirm password is required
                                            </div>
                                        )}
                                    </div>

                                </div>

                                <div className='flex w-full justify-center'>
                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button type="submit" className='bg-[#222] border-[1px] border-white rounded-[2px] w-[170px] py-[15px] px[24px] text-white text-[10px] font-[500] shadow-custom4 p-4'>{isSubmitting ? 'Submitting...' : 'Next'}</button>
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
                        <div className='px-[9px] mt-[95px] flex flex-col items-center'>
                            <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Hey <span className='font-[500]'> User! </span></h1>
                            <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Help Venture Loop understand you better</h1>
                        </div>
                        
                        <div className='mt-[32px] flex items-center flex-col'>
                            <p className='text-[15px] font-[400]'>Please share your Basic Details</p>
                            <div className='mt-[3rem]'>

                            <form action="" className='flex flex-col items-start'>

                                <div className='flex flex-wrap justify-center'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="PhoneNumber" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Phone number</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <div className='w-[47px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                            </div>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="+91 95974-78911" fdprocessedid="t70vb"/>
                                        </div>
                                        <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verified <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="EmailID" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>EmailID</label>
                                        <div>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="+91 95974-78911" fdprocessedid="t70vb"/>
                                        </div>
                                        <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verified <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
                                    </div>
                                    
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="First name" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>First name</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="text" value="Alagu" fdprocessedid="t70vb"/>
                                        </div>
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Last name" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Last name</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="text" value="Suriya" fdprocessedid="t70vb"/>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Gender" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Gender</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Male" disabled="" type="text" value="Male" fdprocessedid="t70vb"/>
                                            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>
                                        </div>
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Date of birth" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Date of birth</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input disabled="" type="text" value="11/12/2003" name="month" className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'/>

                                            <button className="react-date-picker__clear-button react-date-picker__button absolute right-[40px]" disabled="" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" stroke="black" stroke-width="2" className="react-date-picker__clear-button__icon react-date-picker__button__icon"><line x1="4" x2="15" y1="4" y2="15"></line><line x1="15" x2="4" y1="4" y2="15"></line></svg>
                                            </button>

                                            <button aria-expanded="false" className="react-date-picker__calendar-button react-date-picker__button absolute right-[10px]" disabled="" type="button">
                                                <img alt="calendar" loading="lazy" width="18" height="16" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/calendar.bc3fdcd2.svg" />
                                            </button>

                                        </div>
                                    </div>

                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Marital Status" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Marital Status</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Male" disabled="" type="text" value="UnMarried" fdprocessedid="t70vb"/>
                                            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Occupation" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Occupation</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Male" disabled="" type="text" value="Salaries" fdprocessedid="t70vb"/>
                                            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Marital Status" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Marital Status</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Male" disabled="" type="text" value="UnMarried" fdprocessedid="t70vb"/>
                                            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
                                    <span className='text-[16px] font-[500]'>What is your current residential status?</span>
                                    <div>
                                        <div className='flex flex-wrap gap-[16px] items-center'>
                                            <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                <span className='pt-[5px]'><input name='residence' type="radio" className=''/></span>
                                                <span>indian resident</span>
                                            </label>
                                            <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                <span className='pt-[5px]'><input name='residence' type="radio" className=''/></span>
                                                <span>NRI</span>
                                            </label>
                                            <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                <span className='pt-[5px]'><input name='residence' type="radio" className=''/></span>
                                                <span>PIO</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Address line 1" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Address line 1</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="text" value="1/99, Sangalpatti, kottur," fdprocessedid="t70vb"/>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Address line 2" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Address line 2</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Address" disabled="" type="text" value="Enter Address" fdprocessedid="t70vb"/>
                                        </div>
                                    
                                    </div>

                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="City" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>City</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="text" value="Dindigul" fdprocessedid="t70vb"/>
                                        </div>
                                    
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Pincode" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Pincode</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Address" disabled="" type="text" value="624215" fdprocessedid="t70vb"/>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
                                    <span className='text-[16px] font-[500]'>Are you or your Relatives Politically exposed?</span>
                                    <div>
                                        <div className='flex flex-wrap gap-[16px] items-center'>
                                            <label htmlFor="politicaly exposed" className='flex items-center gap-[6px]'>
                                                <span className='pt-[5px]'><input name='politicaly exposed' type="radio" className=''/></span>
                                                <span>Yest</span>
                                            </label>
                                            <label htmlFor="politicaly exposed" className='flex items-center gap-[6px]'>
                                                <span className='pt-[5px]'><input name='politicaly exposed' type="radio" className=''/></span>
                                                <span>No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Father’s first name" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Father’s first name</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="text" value="Sarvana" fdprocessedid="t70vb"/>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="Father’s last name" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Father’s last name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Enter Address" disabled="" type="text" value="Kumar" fdprocessedid="t70vb"/>
                                            </div>
                                            
                                    </div>

                                </div>

                                <div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
                                    <span className='text-[16px] font-[500]'>Nominee details</span>
                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Nominee name" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Nominee name</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="Male" disabled="" type="text" value="Enter Nominee name" fdprocessedid="t70vb"/>
                                        </div>
                                    </div>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Nominee" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Nominee Date of birth</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
                                            <input disabled="" type="text" value="DD/MM/YYYY" name="month" className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'/>

                                            <button aria-expanded="false" className="react-date-picker__calendar-button react-date-picker__button absolute right-[10px]" disabled="" type="button">
                                                <img alt="calendar" loading="lazy" width="18" height="16" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/calendar.bc3fdcd2.svg" />
                                            </button>

                                        </div>
                                        
                                    </div>

                                </div>

                                <div className='flex flex-wrap justify-center mt-[10px]'>

                                    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                        <label htmlFor="Relationship with nominee" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Relationship with nominee</label>
                                        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="" disabled="" type="text" value="" fdprocessedid="t70vb"/>
                                        </div>
                                        
                                    </div>

                                </div>

                                <div className='flex flex-col w-full justify-center'>
                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-white border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-[black] text-[14px] font-[500]'>Edit personal details</button>
                                    </div>
                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='rounded-[2px] w-[200px] py-[15px] px[24px] text-[black] text-[14px] font-[500]'>Go Back</button>
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
    </div> */}

    {/* third slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] pb-[80px]'>
        <div className='h-full flex items-center justify-center'>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[300px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className='px-[9px] mt-[95px] flex flex-col items-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Hey <span className='font-[500]'> User! </span></h1>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Let's get you KYC done</h1>
                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <p className='text-[15px] font-[400]'>Please share PAN and Adhaar Number</p>
                                <div className='mt-[3rem]'>

                                    <div className='max-w-[380px] w-full sm3:w-[380px] mb-[20px]'>

                                        <label htmlFor="PhoneNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>PAN Number</label>

                                        <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                            <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="" fdprocessedid="t70vb"/>

                                        </div>

                                        <div className='mt-[38px] text-[0.875rem] font-[500] text-green-600 text-center flex justify-start gap-[6px]'>
                                            <input type="checkbox" className='accent-green-600'/>
                                            <p className='text-[12px] font-[400] text-[black]'>I authorize Venture Loop....</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex flex-col w-full justify-center items-center'>

                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-white text-[14px] font-[500] shadow-custom4'>Verify PAN</button>
                                    </div>

                                </div>

                                <div className='mt-[3rem]'>

                                    <div className='max-w-[380px] w-full sm3:w-[380px] mb-[20px]'>

                                        <label htmlFor="PhoneNumber" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Aadhar Number</label>

                                        <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>

                                            <input className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]' placeholder="1 (702) 123-4567" disabled="" type="tel" value="" fdprocessedid="t70vb"/>

                                        </div>

                                        <div className='mt-[38px] text-[0.875rem] font-[500] text-green-600 text-center flex justify-start gap-[6px]'>
                                            <input type="checkbox" className='accent-green-600'/>
                                            <p className='text-[12px] font-[400] text-[black]'>I authorize Venture Loop....</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='flex flex-col w-full justify-center items-center'>

                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-white text-[14px] font-[500] shadow-custom4'>Verify aadhar</button>
                                    </div>

                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>   */}

    {/* fourth slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] pb-[80px]'>
        <div className='h-full flex items-center justify-center'>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[300px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className='px-[9px] mt-[95px] flex flex-col items-center'>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Great! We're almost done.</h1>
                                <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Let's get your bank details for easy investment.</h1>
                            </div>
                            
                            <div className='mt-[32px] flex items-center flex-col'>
                                <p className='text-[15px] font-[400]'>in the next step. 1rs. will be deposited to your account for verification</p>
                                <div className='mt-[3rem]'>

                                    <form action="" className='flex flex-col items-start'>

                                        <div className='flex items-center lg3:justify-between justify-center flex-wrap w-full mt-[36px] gap-[12px]'>
                                            <span className='text-[16px] font-[500]'>What type of account do you have?</span>
                                            <div>
                                                <div className='flex flex-wrap gap-[16px] items-center'>
                                                    <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                        <span className='pt-[5px]'><input name='residence' type="radio" className=''/></span>
                                                        <span>Savings</span>
                                                    </label>
                                                    <label htmlFor="residence" className='flex items-center gap-[6px]'>
                                                        <span className='pt-[5px]'><input name='residence' type="radio" className=''/></span>
                                                        <span>Current</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-wrap justify-center mt-[10px]'>

                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                                <label htmlFor="IFSC Code*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>IFSC Code*</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="" disabled="" type="text" value="Enter IFSC Code*" fdprocessedid="t70vb"/>
                                                </div>
                                            </div>

                                            <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                                <label htmlFor="Account Number*" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Account Number*</label>
                                                <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                    <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' placeholder="" disabled="" type="text" value="Enter Account Number*" fdprocessedid="t70vb"/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex w-full justify-center mt-[50px]'>
                                            <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                                <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[180px] py-[12px] px[24px] text-white text-[13px] font-[500] shadow-custom4 p-4'>Proceed</button>
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

    {/* fifth slide */}

    {/* <div className='font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] pb-[80px]'>
        <div className='h-full flex items-center justify-center'>
            <div className='h-full flex items-start justify-center'>
                <div className='min-h-[300px] flex items-center'>
                    <div className='w-full max-w-[1360px] px-[9px]'>

                        <div>
                            <div className='mb-[36px] mt-[20px] px-[9px] flex justify-center items-center'>
                                <a href="">
                                    <img src="https://signup.creddinv.in/_next/static/media/CREDDINV_LOGO_FINAL.377552c7.svg" alt="" className='w-full h-auto'/>
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
                                    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                        <button className='bg-[#222] border-[1px] border-[#222] rounded-[2px] w-[180px] py-[12px] px[24px] text-white text-[13px] font-[500] shadow-custom4 p-4'>Go To Login</button>
                                    </div>
                                </div>

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

export default investorsignup
