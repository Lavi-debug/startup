import React, { useState, useEffect } from 'react';
import flag from '../Profileopt/flag.svg';
import arrow from '../Profileopt/arrow (2).svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from './Logo.png'

const investorsignuptwo = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [isgenderdropdownOpen, setIsgenderdropdownOpen] = useState(false);
    const togglegenderDropdown = () => setIsgenderdropdownOpen(!isgenderdropdownOpen);

    const handlegenderDropdownSelect = (gender) => {
        setFormData((prevState) => ({
          ...prevState,
          gender,
        }));
      };
    
    const [ismarriagedropdownOpen, setIsmarriagedropdownOpen] = useState(false);
    const togglemarriageDropdown = () => setIsmarriagedropdownOpen(!ismarriagedropdownOpen);

    const handlemarriageDropdownSelect = (maritalStatus) => {
        setFormData((prevState) => ({
          ...prevState,
          maritalStatus,
        }));
      };

    const [isoccupationdropdownOpen, setIsoccupationdropdownOpen] = useState(false);
    const toggleoccupationDropdown = () => setIsoccupationdropdownOpen(!isoccupationdropdownOpen);

    const handleoccupationDropdownSelect = (occupation) => {
        setFormData((prevState) => ({
          ...prevState,
          occupation,
        }));
      };

    const [isincomedropdownOpen, setIsincomedropdownOpen] = useState(false);
    const toggleincomeDropdown = () => setIsincomedropdownOpen(!isincomedropdownOpen);

    const handleincomeDropdownSelect = (annualGrossIncome) => {
        setFormData((prevState) => ({
          ...prevState,
          annualGrossIncome,
        }));
      };

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
        yourName: '',
        proffessionalBackground: '',
        whichFirmDoYouRepresent: '',
        experience: '',
        investAsIndividualOrAsFirm: '',
        industriesOfInterest: '',
        stageOfStartupsYouInvest: '',
        georaphicalRegionsYouFocusForInvest: '',
        B2BorB2C: '',
        specificTypeOfFounders: '',
        investmentrange: '',
        doYouOfferFollowonFunding: '',
        whatPercentageOfEquityDoYouAim: '',
        aeYouOpenToConevrtibleNotesOrSAFEs: '',
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

    //   const validateForm = (formData) => {
    //     let formErrors = [];
      
    //     // Phone Number Validation
      
    //     // First Name Validation
    //     if (!formData.firstName || formData.firstName.trim().length === 0) {
    //       formErrors.push("First name cannot be empty.");
    //     }
      
    //     // Last Name Validation
    //     if (!formData.lastName || formData.lastName.trim().length === 0) {
    //       formErrors.push("Last name cannot be empty.");
    //     }
      
    //     // Gender Validation
    //     if (!formData.gender || !["Male", "Female", "Other"].includes(formData.gender)) {
    //       formErrors.push("Please select a valid gender.");
    //     }
      
    //     // Date of Birth Validation
    //     // if (!formData.dateOfBirth || !/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dateOfBirth)) {
    //     //   formErrors.push("Please enter a valid date of birth (MM/DD/YYYY).");
    //     // }
      
    //     // Marital Status Validation
    //     if (
    //       !formData.maritalStatus ||
    //       !["Single", "Married", "Divorced", "Widowed"].includes(formData.maritalStatus)
    //     ) {
    //       formErrors.push("Please select a valid marital status.");
    //     }

    //     if (!formData.residence) {
    //         errors.residence = "Please select your residential status.";
    //     }
    
    //     // Validate Address Line 1
    //     if (!formData.addressLine1 || formData.addressLine1.trim() === "") {
    //         errors.addressLine1 = "Address Line 1 is required.";
    //     }
    
    //     // Validate Address Line 2
    //     if (!formData.addressLine2 || formData.addressLine2.trim() === "") {
    //         errors.addressLine2 = "Address Line 2 is required.";
    //     }
    
    //     // Validate City
    //     if (!formData.city || formData.city.trim() === "") {
    //         errors.city = "City is required.";
    //     }
    
    //     // Validate Pincode
    //     if (!formData.pincode || formData.pincode.trim() === "") {
    //         errors.pincode = "Pincode is required.";
    //     } else if (!/^\d{6}$/.test(formData.pincode)) {
    //         errors.pincode = "Pincode must be a 6-digit number.";
    //     }
    
    //     // Validate Politically Exposed Status
    //     if (!formData.politicallyExposed) {
    //         errors.politicallyExposed = "Please specify if you or your relatives are politically exposed.";
    //     }
    
    //     // Validate Father's First Name
    //     if (!formData.fatherFirstName || formData.fatherFirstName.trim() === "") {
    //         errors.fatherFirstName = "Father's First Name is required.";
    //     }
    
    //     // Validate Father's Last Name
    //     if (!formData.fatherLastName || formData.fatherLastName.trim() === "") {
    //         errors.fatherLastName = "Father's Last Name is required.";
    //     }
        
    //     // Validate Nominee Name
    //     if (!formData.nomineeName || formData.nomineeName.trim() === "") {
    //         errors.nomineeName = "Nominee name is required.";
    //     }
    
    //     // Validate Nominee Date of Birth
    //     if (!formData.nomineeDob || formData.nomineeDob.trim() === "") {
    //         errors.nomineeDob = "Nominee Date of Birth is required.";
    //     } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.nomineeDob)) {
    //         errors.nomineeDob = "Nominee Date of Birth must be in DD/MM/YYYY format.";
    //     }
    
    //     // Validate Relationship with Nominee
    //     if (!formData.relationshipWithNominee || formData.relationshipWithNominee.trim() === "") {
    //         errors.relationshipWithNominee = "Relationship with nominee is required.";
    //     }
      
    //     return formErrors;
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        console.log("handleSubmit triggered!"); // Log when the function is triggered
      
        setErrors([]);
        console.log("Form Data Before Validation:", formData); // Log form data before validation
      
        // const validationErrors = validateForm(formData);
        // console.log("Validation Errors:", validationErrors); // Log validation errors
      
        // if (validationErrors.length > 0) {
        //   setErrors(validationErrors);
        //   console.log("Form submission stopped due to validation errors."); // Log if validation fails
        //   return;
        // }
      
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
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            pincode: formData.pincode,
            fatherFirstName: formData.fatherFirstName,
            fatherLastName: formData.fatherLastName,
            relationWithNominee: formData.relationWithNominee,
            nomineeName: formData.nomineeName,
            nomineeDob: formData.nomineeDob,
            panCardNumber: formData.panCardNumber,
            aadharCardNumber: formData.aadharCardNumber,
            ifscCode: formData.ifscCode,
            accountNumber: formData.accountNumber,
            iAccept: formData.iAccept,
            isEighteenOrOlder: formData.isEighteenOrOlder,
            yourName: formData.yourName,
            proffessionalBackground: formData.proffessionalBackground,
            whichFirmDoYouRepresent: formData.whichFirmDoYouRepresent,
            experience: formData.experience,
            investAsIndividualOrAsFirm: formData.investAsIndividualOrAsFirm,
            industriesOfInterest: formData.industriesOfInterest,
            stageOfStartupsYouInvest: formData.stageOfStartupsYouInvest,
            georaphicalRegionsYouFocusForInvest: formData.georaphicalRegionsYouFocusForInvest,
            B2BorB2C: formData.B2BorB2C,
            specificTypeOfFounders: formData.specificTypeOfFounders,
            investmentrange: formData.investmentrange,
            doYouOfferFollowonFunding: formData.doYouOfferFollowonFunding,
            whatPercentageOfEquityDoYouAim: formData.whatPercentageOfEquityDoYouAim,
            aeYouOpenToConevrtibleNotesOrSAFEs: formData.aeYouOpenToConevrtibleNotesOrSAFEs,
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
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            pincode: formData.pincode,
            fatherFirstName: formData.fatherFirstName,
            fatherLastName: formData.fatherLastName,
            relationWithNominee: formData.relationWithNominee,
            nomineeName: formData.nomineeName,
            nomineeDob: formData.nomineeDob,
            panCardNumber: formData.panCardNumber,
            aadharCardNumber: formData.aadharCardNumber,
            ifscCode: formData.ifscCode,
            accountNumber: formData.accountNumber,
            iAccept: formData.iAccept,
            isEighteenOrOlder: formData.isEighteenOrOlder,
            yourName: formData.yourName,
            proffessionalBackground: formData.proffessionalBackground,
            whichFirmDoYouRepresent: formData.whichFirmDoYouRepresent,
            experience: formData.experience,
            investAsIndividualOrAsFirm: formData.investAsIndividualOrAsFirm,
            industriesOfInterest: formData.industriesOfInterest,
            stageOfStartupsYouInvest: formData.stageOfStartupsYouInvest,
            georaphicalRegionsYouFocusForInvest: formData.georaphicalRegionsYouFocusForInvest,
            B2BorB2C: formData.B2BorB2C,
            specificTypeOfFounders: formData.specificTypeOfFounders,
            investmentrange: formData.investmentrange,
            doYouOfferFollowonFunding: formData.doYouOfferFollowonFunding,
            whatPercentageOfEquityDoYouAim: formData.whatPercentageOfEquityDoYouAim,
            aeYouOpenToConevrtibleNotesOrSAFEs: formData.aeYouOpenToConevrtibleNotesOrSAFEs,
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
          navigate('/inverstorsignupsix');
          // Optionally update the frontend state here with the updated investor data
        } catch (error) {
          console.error("Error during update:", error.message); // Log caught errors
          alert("An error occurred during the update.");
        } finally {
          setIsSubmitting(false);
          console.log("Form submission ended."); // Log when submission ends
        }
      };

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
                yourName: '',
                proffessionalBackground: '',
                whichFirmDoYouRepresent: '',
                experience: '',
                investAsIndividualOrAsFirm: '',
                industriesOfInterest: '',
                stageOfStartupsYouInvest: '',
                georaphicalRegionsYouFocusForInvest: '',
                B2BorB2C: '',
                specificTypeOfFounders: '',
                investmentrange: '',
                doYouOfferFollowonFunding: '',
                whatPercentageOfEquityDoYouAim: '',
                aeYouOpenToConevrtibleNotesOrSAFEs: '',
    }); 
      
    // Function to fetch investor data by ID
    const fetchInvestorData = async () => {
        try {
            const id = localStorage.getItem('userId'); // Get ID from localStorage
            if (!id) {
                console.error('Investor ID not found in local storage');
                return;
            }

            // Get userId from localStorage
            const userId = localStorage.getItem('userId');
            
            if (!userId) {
                console.error("User ID not found in localStorage.");
                // alert("User ID not found. Please log in again.");
                return;
            }

            const response = await fetch(`${host}/api/investor/getInvestorById/${userId}`); // API call using fetch
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data = await response.json(); // Parse JSON response
            setInvestorData({
                number: data.number || 'N/A', // Set number or default to 'N/A'
                email: data.email || 'N/A',
                Name: data.Name || 'NA', // Set email or default to 'N/A'
                // firstName: data.firstName || 'NA', // Set email or default to 'N/A'
                // lastName: data.lastName || 'NA', // Set email or default to 'N/A'
                // gender: data.gender || 'NA', // Set email or default to 'N/A'
                // dob: data.dob || 'NA', // Set email or default to 'N/A'
                // fatherFirstName: data.fatherFirstName || 'NA', // Set email or default to 'N/A'
                // fatherLastName: data.fatherLastName || 'NA', // Set email or default to 'N/A'
            });
        } catch (error) {
            console.error('Error fetching investor data:', error);
        }
    };

    // Call fetchInvestorData on component mount
    useEffect(() => {
        fetchInvestorByEmail();
        fetchInvestorData();
    },  [location]);

    const fetchInvestorByEmail = async () => {
        try {
          // Get the email from localStorage
          const email = localStorage.getItem("registeredEmail");
      
          if (!email) {
            console.error("No email found in localStorage");
            alert("No email found in localStorage");
            return;
          }
      
          // Make a GET request to the backend to fetch the investor by email
          const response = await fetch(`http://localhost:5000/api/investor/getInvestorByEmail/${email}`);
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.error || "Failed to fetch investor data");
          }
      
          // Save the investor ID in localStorage
          localStorage.setItem("userId", data._id);
      
          // Handle the fetched investor data
          console.log("Investor data:", data);
        //   alert("Investor data fetched successfully");
      
          // You can use the fetched data here as needed, e.g., update state or UI
        } catch (error) {
          console.error(error.message);
          alert("An error occurred while fetching investor data");
        }
      };
    
    // Call the function when the page loads
    // useEffect(() => {
    //     fetchInvestorByEmail();
    // },  [location]);
      

      

    return (
    <>
        {/* second slide */}

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
                        <div className='px-[9px] mt-[95px] flex flex-col items-center'>
                            <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Hey <span className='font-[500]'> User! </span></h1>
                            <h1 className='max-w-[534px] text-[26px] font-[400] text-center'>Help Venture Loop understand you better</h1>
                        </div>
                        
                        <div className='mt-[32px] flex items-center flex-col'>
                            <p className='text-[15px] font-[400]'>Please share your Basic Details</p>
                            <div className='mt-[3rem]'>

                                <form onSubmit={handleSubmit} className='flex flex-col items-start'>

                                    <div className='flex flex-wrap justify-center'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="number" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Phone number</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <div className='w-[47px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                                                    <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                                                    <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
                                                </div>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="1 (702) 123-4567" 
                                                type="tel" 
                                                value={investorData.number}
                                                onChange={handleInputChange}
                                                id="number"
                                                name="number"/>
                                            </div>
                                            <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verify number <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="email" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>EmailID</label>
                                            <div>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
                                                placeholder="Your Email" 
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={investorData.email}
                                                onChange={handleInputChange}/>
                                            </div>
                                            <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verify email <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
                                        </div>
                                        
                                    </div>

                                    <div className='flex flex-wrap justify-center mt-[10px]'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="yourName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Name</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Name" 
                                                type="text"
                                                id="yourName"
                                                name="yourName"
                                                value={formData.yourName}
                                                onChange={handleInputChange}/>
                                            </div>
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="proffessionalBackground" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Proffessional Background</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Proffessional Background" 
                                                type="text"
                                                id="proffessionalBackground"
                                                name="proffessionalBackground"
                                                value={formData.proffessionalBackground}
                                                onChange={handleInputChange}/>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div className='flex flex-wrap justify-center mt-[10px]'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="whichFirmDoYouRepresent" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Which Firm or Organisation do you represent</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                            placeholder="Firm Or Organisaion" 
                                            type="text"
                                            id="whichFirmDoYouRepresent"
                                            name="whichFirmDoYouRepresent" 
                                            value={formData.whichFirmDoYouRepresent}  
                                            onChange={handleInputChange}   />
                                            </div>
                                            
                                        </div>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="experience" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Experience</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Experience ( in years )" 
                                                type="text"
                                                id="experience"
                                                name="experience" 
                                                value={formData.experience}  
                                                onChange={handleInputChange}   />
                                            </div>
                                        
                                        </div>

                                    </div>

                                    <div className='flex flex-wrap justify-center mt-[10px]'>

                                        <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
                                            <label htmlFor="investAsIndividualOrAsFirm" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Do you invest as Individual or Firm</label>
                                            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                                                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                                                placeholder="Angel Investor or Firm"
                                                type="text"
                                                value={formData.investAsIndividualOrAsFirm || ''}
                                                name="investAsIndividualOrAsFirm"
                                                onChange={handleInputChange}/>
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <div className='flex flex-col w-full justify-center'>
                                        <div className='flex flex-wrap justify-center items-center mt-[10px]'>
                                            <button type="submit" className='bg-white border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-[black] text-[14px] font-[500]'>{isSubmitting ? 'Submitting...' : 'Confirm details'}</button>
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
    </div>
 
    </>
  )
}

export default investorsignuptwo


{/* <form onSubmit={handleSubmit} className='flex flex-col items-start'>

<div className='flex flex-wrap justify-center'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="number" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Phone number</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <div className='w-[47px] h-[48px] flex items-center justify-center gap-[6px] border-[1px] border-[#b7b7b7] rounded-[4px] bg-[#f5f5f5]'>
                <img src={flag} alt="" className='w-[16px] h-[11px]'/>
                <img src={arrow} alt="" className='w-[5.8] h-[5px] rotate-90'/>
            </div>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="1 (702) 123-4567" 
            type="tel" 
            value={investorData.number}
            onChange={handleInputChange}
            id="number"
            name="number"/>
        </div>
        <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verify number <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="email" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>EmailID</label>
        <div>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'
            placeholder="Your Email" 
            type="email"
            id="email"
            name="email"
            value={investorData.email}
            onChange={handleInputChange}/>
        </div>
        <div className='flex text-[14px] font-[500] text-green-500 gap-[5px]'>Verify email <img src="https://investor.creddinv.in/_next/static/media/greenicon.a0368b34.svg" alt="" /></div>
    </div>
    
</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="firstName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>First name</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="First Name" 
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}/>
        </div>
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="lastName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Last name</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="First Name" 
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}/>
        </div>
        
    </div>

</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px] relative'  onClick={togglegenderDropdown}>
        <label htmlFor="gender" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Gender</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            type="text" 
            placeholder='Select gender' 
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            readOnly/>
            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>

            {isgenderdropdownOpen && (
            <div className="absolute w-full top-[45px] bg-white border border-gray-300  shadow-lg z-10">
                <ul className="py-2">
                {['Male', 'Female', 'Other'].map(
                    (gender) => (
                    <li
                        key={gender}
                        onClick={() => handlegenderDropdownSelect(gender)}
                        className="px-4 py-[8px] hover:bg-gray-100 cursor-pointer font-semibold text-[13px] text-black"
                    >
                        {gender}
                    </li>
                    )
                )}
                </ul>
            </div>
            )}
        </div>
        
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="dob" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Date of birth</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input 
            placeholder='00/00/0000'
            type="dob"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'/>

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

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]' onClick={togglemarriageDropdown}>
        <label htmlFor="maritalStatus" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Marital Status</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            type="text" 
            placeholder='Select maritalStatus' 
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            readOnly/>
            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>

            {ismarriagedropdownOpen && (
            <div className="absolute w-full top-[45px] bg-white border border-gray-300  shadow-lg z-10">
                <ul className="py-2">
                {['Single', 'Married', 'Divorced', 'Widowed'].map(
                    (marriage) => (
                    <li
                        key={marriage}
                        onClick={() => handlemarriageDropdownSelect(marriage)}
                        className="px-4 py-[8px] hover:bg-gray-100 cursor-pointer font-semibold text-[13px] text-black"
                    >
                        {marriage}
                    </li>
                    )
                )}
                </ul>
            </div>
            )}
        </div>
        
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]' onClick={toggleoccupationDropdown}>
        <label htmlFor="occupation" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Occupation</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            type="text" 
            placeholder='Select occupation' 
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            readOnly/>
            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>

            {isoccupationdropdownOpen && (
            <div className="absolute w-full top-[45px] bg-white border border-gray-300  shadow-lg z-10">
                <ul className="py-2">
                {['Salaried', 'Self Employed', 'Business', 'Retired', 'Homemaker', 'Student', 'Unemployed'].map(
                    (occupation) => (
                    <li
                        key={occupation}
                        onClick={() => handleoccupationDropdownSelect(occupation)}
                        className="px-4 py-[8px] hover:bg-gray-100 cursor-pointer font-semibold text-[13px] text-black"
                    >
                        {occupation}
                    </li>
                    )
                )}
                </ul>
            </div>
            )}
        </div>
        
    </div>
    
</div>

<div className='flex flex-wrap justify-center mt-[10px]' >

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]' onClick={toggleincomeDropdown}>
        <label htmlFor="annualGrossIncome" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Annual Gross Income</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            type="text" 
            placeholder='Select Income' 
            name="annualGrossIncome"
            value={formData.annualGrossIncome}
            onChange={handleInputChange}
            readOnly/> 
            <div className='absolute right-[20px]'><img src={arrow} alt="" className='w-[7.8] h-[7px] rotate-90 '/></div>

            {isincomedropdownOpen && (
            <div className="absolute w-full top-[45px] bg-white border border-gray-300  shadow-lg z-10">
                <ul className="py-2">
                {['Below 1LAC', '1-5 LAC', '5-10 LAC', '10-25 LAC', '25LAC-1Cr', '+1Cr'].map(
                    (income) => (
                    <li
                        key={income}
                        onClick={() => handleincomeDropdownSelect(income)}
                        className="px-4 py-[8px] hover:bg-gray-100 cursor-pointer font-semibold text-[13px] text-black"
                    >
                        {income}
                    </li>
                    )
                )}
                </ul>
            </div>
            )}
        </div>
        
    </div>

</div>

<div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
    <span className='text-[16px] font-[500]'>What is your current residential status?</span>
    <div>
        <div className='flex flex-wrap gap-[16px] items-center'>

            <label htmlFor="residence-indian" className='flex items-center gap-[6px]'>
            <input
                id="residence-indian"
                name="residence"
                type="radio"
                value="indian"
                checked={formData.residence === 'indian'}  // Use formData to track the state
                onChange={handleInputChange}  // Make sure handleInputChange is used for updating formData
                className=""
            
            />
                <span>Indian Resident</span>
            </label>

            <label htmlFor="residence-nri" className='flex items-center gap-[6px]'>
            <input
                id="residence-nri"
                name="residence"
                type="radio"
                value="nri"
                checked={formData.residence === 'nri'}  // Use formData to track the state
                onChange={handleInputChange}  // Make sure handleInputChange is used for updating formData
                className=""
            />
            <span>NRI</span>
            </label>

            <label htmlFor="residence-pio" className='flex items-center gap-[6px]'>
            <input
                id="residence-pio"
                name="residence"
                type="radio"
                value="pio"
                checked={formData.residence === 'pio'}  // Use formData to track the state
                onChange={handleInputChange}  // Make sure handleInputChange is used for updating formData
                className=""
            />
            <span>PIO</span>
            </label>

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
        <label htmlFor="addressLine1" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Address line 1</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
        placeholder="Address 1" 
        type="text"
        id="addressLine1"
        name="addressLine1" 
        value={formData.addressLine1}  
        onChange={handleInputChange}   />
        </div>
        
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="addressLine2" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Address line 2</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="Address 2" 
            type="text"
            id="addressLine2"
            name="addressLine2" 
            value={formData.addressLine2}  
            onChange={handleInputChange}   />
        </div>
    
    </div>

</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="city" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>City</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="City" 
            type="text"
            id="city"
            name="city" 
            value={formData.city}  
            onChange={handleInputChange}/>
        </div>
    
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="Pincode" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>pincode</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="Pincode" 
            type="text"
            id="pincode"
            name="pincode" 
            value={formData.pincode}  
            onChange={handleInputChange}/>
        </div>
        
    </div>

</div>

<div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
    <span className='text-[16px] font-[500]'>Are you or your Relatives Politically exposed?</span>
    <div>
        <div className='flex flex-wrap gap-[16px] items-center'>
        <label htmlFor="politically-exposed-yes" className='flex items-center gap-[6px]'>
        <span className='pt-[5px]'>
            <input
            id="politically-exposed-yes"
            name="politicallyExposed"
            type="radio"
            value="yes"
            checked={formData.politicallyExposed === 'yes'}  // Check if the value matches the form data
            onChange={handleInputChange}  // Use the handler to update form data
            className=''
            />
        </span>
        <span>Yes</span>
        </label>

        <label htmlFor="politically-exposed-no" className='flex items-center gap-[6px]'>
        <span className='pt-[5px]'>
            <input
            id="politically-exposed-no"
            name="politicallyExposed"
            type="radio"
            value="no"
            checked={formData.politicallyExposed === 'no'}  // Check if the value matches the form data
            onChange={handleInputChange}  // Use the handler to update form data
            className=''
            />
        </span>
        <span>No</span>
        </label>
        </div>
    </div>
</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="fatherFirstName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Father’s first name</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            id="fatherFirstName"
            placeholder="Father's First Name"
            type="text"
            name="fatherFirstName"
            value={formData.fatherFirstName || ''}
            onChange={handleInputChange}/>
        </div>
        
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
            <label htmlFor="fatherLastName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Father’s last name</label>
            <div className='flex items-center border-[1px] border-[#b7b7b7]'>
                <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
                id="fatherLastName"
                placeholder="Father's Last Name"
                type="text"
                name="fatherLastName"
                value={formData.fatherLastName || ''}
                onChange={handleInputChange}/>
            </div>
            
    </div>

</div>

<div className='flex items-center flex-wrap w-full mt-[36px] gap-[12px]'>
    <span className='text-[16px] font-[500]'>Nominee details</span>
</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="nomineeName" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Nominee name</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            id="nomineeName"
            placeholder="Enter Nominee name"
            type="text"
            name="nomineeName"
            value={formData.nomineeName || ''}  // Bind to formData.nomineeName
            onChange={handleInputChange}/>
        </div>
    </div>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="nomineeDob" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Nominee Date of birth</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7] relative'>
            <input
            type="text"
            value={formData.nomineeDob || ''}
            name="nomineeDob"
            placeholder="DD//MM//YYYY"
            onChange={handleInputChange}  
            className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]'/>

             <button aria-expanded="false" className="react-date-picker__calendar-button react-date-picker__button absolute right-[10px]" disabled="" type="button">
                <img alt="calendar" loading="lazy" width="18" height="16" decoding="async" data-nimg="1" src="https://investor.creddinv.in/_next/static/media/calendar.bc3fdcd2.svg" />
            </button> 

        </div>
        
    </div>

</div>

<div className='flex flex-wrap justify-center mt-[10px]'>

    <div className='mt-[18px] px-[9px] w-full sm3:w-[461px] h-[81px]'>
        <label htmlFor="relationWithNominee" className='text-[14px] font-[500] text-[#666] leqading-[17.46px]'>Relationship with nominee</label>
        <div className='flex items-center border-[1px] border-[#b7b7b7]'>
            <input className='bg-[#d9d9d9] w-full h-[48px] rounded-r-[4px] text-[14px] font-medium border-[1px] border-[#cacaca] border-l-none py-[12px] pr-[16px] pl-[12px]' 
            placeholder="Enter relationship"
            type="text"
            value={formData.relationWithNominee || ''}
            name="relationWithNominee"
            onChange={handleInputChange}/>
        </div>
        
    </div>

</div>

<div className='flex flex-col w-full justify-center'>
    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
        <button type="submit" className='bg-white border-[1px] border-[#222] rounded-[2px] w-[200px] py-[15px] px[24px] text-[black] text-[14px] font-[500]'>{isSubmitting ? 'Submitting...' : 'Confirm details'}</button>
    </div>
    <div className='flex flex-wrap justify-center items-center mt-[10px]'>
        <button className='rounded-[2px] w-[200px] py-[15px] px[24px] text-[black] text-[14px] font-[500]'>Go Back</button>
    </div>
</div>


</form> */}
