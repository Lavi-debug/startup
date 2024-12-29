import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import flag from '../Profileopt/flag.svg'
import arrow from '../Profileopt/arrow (2).svg'
import logo from './Logo.png'


const startupsignuptwo = () => {

    const host = "http://localhost:5000";
    
        const [formData, setFormData] = useState({
            number: '',
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
        
            if (!formData.number || !/^\d{10}$/.test(formData.number)) {
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
      
        // const handleSubmit = async (e) => {
        //     e.preventDefault();
        //     setErrors([]);
        //     const validationErrors = validateForm();
          
        //     if (validationErrors.length > 0) {
        //       setErrors(validationErrors);
        //       return;
        //     }
          
        //     setIsSubmitting(true);
          
        //     try {
        //       const response = await fetch(`${host}/api/startup`, {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //           number: formData.phoneNumber,
        //           email: formData.email,
        //           password: formData.password,
        //         }),
        //       });
          
        //       const data = await response.json();
          
        //       if (!response.ok) {
        //         throw new Error(data.errors ? data.errors.map(err => err.msg).join(', ') : data.error);
        //       }
    
        //       localStorage.setItem('registeredEmail', formData.email);
    
        //         // Redirect to /investorsignuptwo after successful registration
        //         navigate('/inverstorsignuptwo');
          
        //       // Handle success, e.g., redirect or show success message
        //     //   alert('Registration successful!');
        //     } catch (error) {
        //       // Handle error
        //       console.error(error.message);
        //       alert('An error occurred during registration.');
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
              console.log('Form Data:', formData); // Log the form data
          
              const response = await fetch(`${host}/api/startup`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  number: formData.number,
                  email: formData.email,
                  password: formData.password,
                }),
              });
          
              const data = await response.json();
              console.log('Response Data:', data); // Log the response data
          
              if (!response.ok) {
                throw new Error(data.errors ? data.errors.map(err => err.msg).join(', ') : data.error);
              }
          
              localStorage.setItem('registeredEmail', formData.email);
          
              // Redirect to /investorsignuptwo after successful registration
              navigate('/startupsignup');
            } catch (error) {
              console.error('Error:', error.message); // Log the error
              alert('An error occurred during registration.');
            } finally {
              setIsSubmitting(false);
            }
          };
          
 
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
                              <div className='px-[9px] mt-[95px] flex justify-center'>
                                  <h1 className='max-w-[534px] text-[26px] font-[300] text-center'>I want to <span className=''><strong> signup </strong> as </span><span className=''> <strong>Start Up </strong></span></h1>
                              </div>
                              
                              <div className='mt-[32px] flex items-center flex-col'>
                                  <p className='text-[12px] font-[400]'>Please enter the below details and verify your info</p>
                                  <div className='mt-[3rem]'>
      
                                  <form onSubmit={handleSubmit} className='flex flex-col items-start'>
      
                                      <div className='flex flex-wrap justify-center'>
      
                                          <div className='mt-[18px] px-[9px] w-full sm3:w-[380px] h-[81px]'>
      
                                              <label htmlFor="number" className='text-[.875rem] font-[500] text-[#666] leading-[17.46px] mb-[8px]'>Phone number</label>
      
                                              <div className='flex items-center border-[1px] border-[#b7b7b7] mt-[3px]'>
      
                                                  <div className='w-[48px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                      <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                      <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                                  </div>
      
                                                  <input 
                                                  className='bg-white w-full h-[48px] rounded-r-[4px] text-[12px] font-medium border-[1px] border-[#cacaca] border-l-none py-[23pxpx] pr-[40px] pl-[12px]'
                                                  placeholder="1 (702) 123-4567"
                                                  value={formData.number}
                                                  onChange={handleInputChange}
                                                  id="number"
                                                  name="number"/>
      
                                              </div>
                                              {errors.includes('Please enter a valid 10-digit phone number.') && (
                                                  <div className='text-red-500 text-xs mt-1'>Please enter a valid 10-digit phone number.</div>
                                              )}
      
      
                                              {!formData.number || formData.numberlength < 10 ? (null) : 
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
    </>
  )
}

export default startupsignuptwo
