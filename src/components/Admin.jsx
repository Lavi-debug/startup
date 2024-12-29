import React, { useState, useEffect } from 'react';

const Admin = () => {
    const host = "http://localhost:5000";
    const [startups, setStartups] = useState([]);
    const [investors, setInvestors] = useState([]);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('startups'); // State to manage active tab
  
    useEffect(() => {
      // Fetch the data from the backend API
      fetch(`${host}/api/startup/getAllStartups`)  // Adjust the URL to match your backend
        .then((response) => response.json())
        .then((data) => {
          // If data is fetched successfully, store it in the state
          setStartups(data);
        })
        .catch((error) => {
          // Handle any errors during the fetch
          setError('Error fetching startup data');
          console.error('Error fetching startups:', error);
        });
    }, []);

    const [pdfs, setPdfs] = useState([]);

    const fetchAllPdfs = async () => {
      try {
        const response = await fetch(`${host}/api/startup/listPdfs`);
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch PDFs');
        }
  
        const fetchedPdfs = data.pdfs.map(pdf => ({
          fileName: pdf.fileName,
          blob: base64ToBlob(pdf.content, 'application/pdf'),
        }));
  
        setPdfs(fetchedPdfs);
      } catch (error) {
        console.error('Error fetching PDFs:', error.message);
      }
    };
  
    const base64ToBlob = (base64, mimeType) => {
      const byteCharacters = atob(base64);
      const byteArrays = [];
  
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
  
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
  
      return new Blob(byteArrays, { type: mimeType });
    };
  
    const downloadAllPdfs = () => {
      if (pdfs.length === 0) {
        console.warn('No PDFs available for download.');
        return;
      }
  
      pdfs.forEach(pdf => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(pdf.blob);
        link.href = url;
        link.download = pdf.fileName; // Use the original file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Free up memory
      });
    };
  

    // const downloadAllPdfs = () => {
    //   if (pdfs.length === 0) {
    //     console.warn('No PDFs available for download.');
    //     return;
    //   }
    
    //   // Create a delay to trigger downloads one by one
    //   pdfs.forEach((pdf, index) => {
    //     setTimeout(() => {
    //       const link = document.createElement('a');
    //       const url = URL.createObjectURL(pdf.blob);
    //       link.href = url;
    //       link.download = pdf.fileName; // Use the original file name
    
    //       // Append the link to the body, trigger the click, then remove the link
    //       document.body.appendChild(link);
    //       link.click();
    //       document.body.removeChild(link);
    //       URL.revokeObjectURL(url); // Free up memory
    //     }, 100 * index); // Delay each download by 100ms
    //   });
    // };
    

    useEffect(() => {
      fetchAllPdfs(); // Fetch PDFs on component mount
    }, []);

    const fetchAllInvestors = async () => {
      try {
        const response = await fetch(`${host}/api/investor/getAllInvestors`);
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch investors');
        }
  
        setInvestors(data);
        setError(null);
      } catch (error) {
        setError('Error fetching investor data');
        console.error('Error fetching investors:', error);
      }
    };
    
  
  return (
    <>
      {/* <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">All Startups</h1>

        <button 
          onClick={() => downloadAllPdfs()} 
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-[16px]"
        >
          Download All PDFs
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {startups.length === 0 ? (
          <p className="text-center">No startups found</p>
        ) : (
          startups.map((startup) => (
            <div key={startup._id} className="border p-4 mb-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{startup.companyName}</h2>
              <p><strong>Company LinkedIn:</strong> <a href={startup.companyLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Company Website:</strong> <a href={startup.companyWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              <p><strong>Founder LinkedIn:</strong> <a href={startup.founderLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Revenue:</strong> {startup.revenue}</p>
              <p><strong>Team Size:</strong> {startup.sizeOfTeam}</p>
              <p><strong>Industry:</strong> {startup.industry}</p>
              <p><strong>Location:</strong> {startup.location}</p>
              <p><strong>Stage:</strong> {startup.stage}</p>
              <p><strong>Product Description:</strong> {startup.describeProduct}</p>
              <p><strong>Target Audience:</strong> {startup.targetAudience}</p>
              <p><strong>Business Model:</strong> {startup.businessModel}</p>
              <p><strong>Current Revenue:</strong> {startup.currentRevenue}</p>
              <p><strong>Projected Revenue Next Year:</strong> {startup.projectedtRevenueNextYear}</p>
              <p><strong>Pitchdeck Ready:</strong> {startup.doYouHavePitchdeckReady ? 'Yes' : 'No'}</p>
              <p><strong>Website:</strong> <a href={startup.companyWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              <p><strong>LinkedIn:</strong> <a href={startup.founderLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Startup LinkedIn:</strong> <a href={startup.companyLinkedIn} target="_blank" rel="noopener noreferrer">Visit Company LinkedIn</a></p>
              <p><strong>Founded Year:</strong> {startup.yearFounded}</p>
              <p><strong>Funding Status:</strong> {startup.fundingStatus}</p>
              <p><strong>Founder:</strong> {startup.founder}</p>
              <p><strong>Description:</strong> {startup.description}</p>
              <p><strong>Existing Commitments:</strong> {startup.existingCommitments}</p>
              <p><strong>Customer Acquisition Cost:</strong> {startup.customerAcquisitionCost}</p>
              <p><strong>Customer Lifetime Value:</strong> {startup.cutomerLifetimeValue}</p>
              <p><strong>Current Burn Rate:</strong> {startup.currentBurnRate}</p>
              <p><strong>Key Performance Indicators:</strong> {startup.keyPerformanceIndicators}</p>
              <p><strong>Short Term Goals:</strong> {startup.shortTermgoals}</p>
              <p><strong>Long Term Goals:</strong> {startup.longTermgoals}</p>
              <p><strong>Biggest Challenges Right Now:</strong> {startup.biggestChallengesRightNow}</p>
              <p><strong>Support You Are Looking From Investor:</strong> {startup.supportYouAreLookingFromInvestor}</p>
              <p><strong>How Much Are You Seeking:</strong> {startup.howMuchAreYouSeeking}</p>
              <p><strong>How It Will Be Used:</strong> {startup.howItWillBeUsed}</p>
              <p><strong>Resources You Currently Have:</strong> {startup.resourcesYouCurrentlyHave}</p>
              <p><strong>Members Planning to Add:</strong> {startup.membersPlanningToAdd}</p>
              <p><strong>Teammate Expertise:</strong> {startup.teammateExpertise}</p>
              <p><strong>Market Trends Leveraged:</strong> {startup.whichTrendsAreYouLeveraging}</p>
              <p><strong>Competitors:</strong> {startup.mainCompetitors}</p>
              <p><strong>How Are You Different:</strong> {startup.howAreYouDifferent}</p>
              <p><strong>Current Team Size:</strong> {startup.currentTeamSize}</p>
              <p><strong>Total Addressable Market:</strong> {startup.totalAddresableMarket}</p>
            </div>
          ))
        )}
      </div> */}

<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => {
            setActiveTab('startups');
            fetchAllStartups();
          }}
          className={`px-6 py-2 mx-2 font-semibold rounded-lg shadow-md ${
            activeTab === 'startups' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Startups
        </button>

        <button
          onClick={() => {
            setActiveTab('investors');
            fetchAllInvestors();
          }}
          className={`px-6 py-2 mx-2 font-semibold rounded-lg shadow-md ${
            activeTab === 'investors' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Investors
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {activeTab === 'startups' && (
        <>
          {startups.length === 0 ? (
            <p className="text-center">No startups found</p>
          ) : (
            <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">All Startups</h1>

        <button 
          onClick={() => downloadAllPdfs()} 
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-[16px]"
        >
          Download All PDFs
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {startups.length === 0 ? (
          <p className="text-center">No startups found</p>
        ) : (
          startups.map((startup) => (
            <div key={startup._id} className="border p-4 mb-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{startup.companyName}</h2>
              <p><strong>Company LinkedIn:</strong> <a href={startup.companyLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Company Website:</strong> <a href={startup.companyWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              <p><strong>Founder LinkedIn:</strong> <a href={startup.founderLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Revenue:</strong> {startup.revenue}</p>
              <p><strong>Team Size:</strong> {startup.sizeOfTeam}</p>
              <p><strong>Industry:</strong> {startup.industry}</p>
              <p><strong>Location:</strong> {startup.location}</p>
              <p><strong>Stage:</strong> {startup.stage}</p>
              <p><strong>Product Description:</strong> {startup.describeProduct}</p>
              <p><strong>Target Audience:</strong> {startup.targetAudience}</p>
              <p><strong>Business Model:</strong> {startup.businessModel}</p>
              <p><strong>Current Revenue:</strong> {startup.currentRevenue}</p>
              <p><strong>Projected Revenue Next Year:</strong> {startup.projectedtRevenueNextYear}</p>
              <p><strong>Pitchdeck Ready:</strong> {startup.doYouHavePitchdeckReady ? 'Yes' : 'No'}</p>
              <p><strong>Website:</strong> <a href={startup.companyWebsite} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              <p><strong>LinkedIn:</strong> <a href={startup.founderLinkedIn} target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
              <p><strong>Startup LinkedIn:</strong> <a href={startup.companyLinkedIn} target="_blank" rel="noopener noreferrer">Visit Company LinkedIn</a></p>
              <p><strong>Founded Year:</strong> {startup.yearFounded}</p>
              <p><strong>Funding Status:</strong> {startup.fundingStatus}</p>
              <p><strong>Founder:</strong> {startup.founder}</p>
              <p><strong>Description:</strong> {startup.description}</p>
              <p><strong>Existing Commitments:</strong> {startup.existingCommitments}</p>
              <p><strong>Customer Acquisition Cost:</strong> {startup.customerAcquisitionCost}</p>
              <p><strong>Customer Lifetime Value:</strong> {startup.cutomerLifetimeValue}</p>
              <p><strong>Current Burn Rate:</strong> {startup.currentBurnRate}</p>
              <p><strong>Key Performance Indicators:</strong> {startup.keyPerformanceIndicators}</p>
              <p><strong>Short Term Goals:</strong> {startup.shortTermgoals}</p>
              <p><strong>Long Term Goals:</strong> {startup.longTermgoals}</p>
              <p><strong>Biggest Challenges Right Now:</strong> {startup.biggestChallengesRightNow}</p>
              <p><strong>Support You Are Looking From Investor:</strong> {startup.supportYouAreLookingFromInvestor}</p>
              <p><strong>How Much Are You Seeking:</strong> {startup.howMuchAreYouSeeking}</p>
              <p><strong>How It Will Be Used:</strong> {startup.howItWillBeUsed}</p>
              <p><strong>Resources You Currently Have:</strong> {startup.resourcesYouCurrentlyHave}</p>
              <p><strong>Members Planning to Add:</strong> {startup.membersPlanningToAdd}</p>
              <p><strong>Teammate Expertise:</strong> {startup.teammateExpertise}</p>
              <p><strong>Market Trends Leveraged:</strong> {startup.whichTrendsAreYouLeveraging}</p>
              <p><strong>Competitors:</strong> {startup.mainCompetitors}</p>
              <p><strong>How Are You Different:</strong> {startup.howAreYouDifferent}</p>
              <p><strong>Current Team Size:</strong> {startup.currentTeamSize}</p>
              <p><strong>Total Addressable Market:</strong> {startup.totalAddresableMarket}</p>
            </div>
          ))
        )}
      </div>
          )}
        </>
      )}

      {activeTab === 'investors' && (
        <>
          {investors.length === 0 ? (
            <p className="text-center">No investors found</p>
          ) : (
            investors.map((investor) => (
              <div key={investor._id} className="border p-4 mb-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{investor.firstName} {investor.lastName}</h2>
              <p><strong>Email:</strong> {investor.email}</p>
              <p><strong>Phone:</strong> {investor.number}</p>
              <p><strong>Gender:</strong> {investor.gender}</p>
              <p><strong>Date of Birth:</strong> {new Date(investor.dob).toLocaleDateString()}</p>
              <p><strong>Marital Status:</strong> {investor.maritalStatus}</p>
              <p><strong>Annual Gross Income:</strong> {investor.annualGrossIncome}</p>
              <p><strong>Residential Status:</strong> {investor.currentResidentialStatus}</p>
              <p><strong>Pincode:</strong> {investor.pincode}</p>
              <p><strong>PAN Card Number:</strong> {investor.panCardNumber}</p>
              <p><strong>Aadhar Card Number:</strong> {investor.aadharCardNumber}</p>
              <p><strong>IFSC Code:</strong> {investor.ifscCode}</p>
              <p><strong>Account Number:</strong> {investor.accountNumber}</p>
              <p><strong>Experience:</strong> {investor.experience}</p>
              <p><strong>Invest as Individual or Firm:</strong> {investor.investAsIndividualOrAsFirm}</p>
              <p><strong>Professional Background:</strong> {investor.proffessionalBackground}</p>
              <p><strong>Firm Represented:</strong> {investor.whichFirmDoYouRepresent}</p>
              <p><strong>Name:</strong> {investor.yourName}</p>
              <p><strong>B2B or B2C:</strong> {investor.B2BorB2C}</p>
              <p><strong>Geographical Focus:</strong> {investor.georaphicalRegionsYouFocusForInvest}</p>
              <p><strong>Industries of Interest:</strong> {investor.industriesOfInterest}</p>
              <p><strong>Specific Founder Type:</strong> {investor.specificTypeOfFounders}</p>
              <p><strong>Startup Stages of Interest:</strong> {investor.stageOfStartupsYouInvest}</p>
              <p><strong>Open to Convertible Notes or SAFEs:</strong> {investor.aeYouOpenToConevrtibleNotesOrSAFEs}</p>
              <p><strong>Offer Follow-on Funding:</strong> {investor.doYouOfferFollowonFunding}</p>
              <p><strong>Investment Range:</strong> {investor.investmentrange}</p>
              <p><strong>Target Equity Percentage:</strong> {investor.whatPercentageOfEquityDoYouAim}</p>
              <p><strong>Portfolio:</strong> {investor.portfolio}</p>
              <p><strong>Created At:</strong> {new Date(investor.createdAt).toLocaleDateString()}</p>
              <p><strong>Updated At:</strong> {new Date(investor.updatedAt).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </>
      )}
    </div>
    </>
  )
}

export default Admin
