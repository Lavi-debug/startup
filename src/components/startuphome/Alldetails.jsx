import React, { useEffect, useState } from 'react';

const Alldetails = () => {
  const host = "http://localhost:5000";
  const [startup, setStartup] = useState(null); // State to store startup data
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    // Retrieve ID from localStorage
    const startupId = localStorage.getItem('registeredId');

    if (!startupId) {
      setError('No ID found in localStorage');
      return;
    }

    // Fetch startup details by ID
    const fetchStartup = async () => {
      try {
        const response = await fetch(`${host}/api/startup/getStartupById/${startupId}`); // Update this if your API URL is different

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setStartup(data);
      } catch (err) {
        console.error('Error fetching startup:', err);
        setError('Failed to fetch startup data');
      }
    };

    fetchStartup();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!startup) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-green-100' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className='text-[20px] font-semibold'>Startup Details</h1>
      <div className='my-[8px]'>
        <h2 className='text-[16px] font-semibold'>Personal Information</h2>
        <p><strong>First Name:</strong> {startup.firstName}</p>
        <p><strong>Last Name:</strong> {startup.lastName}</p>
        <p><strong>Email:</strong> {startup.email}</p>
        <p><strong>Number:</strong> {startup.number}</p>
        <p><strong>Founder LinkedIn:</strong> <a href={startup.founderLinkedIn} target="_blank" rel="noopener noreferrer">{startup.founderLinkedIn}</a></p>
      </div>

      <div className='my-[8px]'>
        <h2 className='text-[16px] font-semibold'>Company Information</h2>
        <p><strong>Company Name:</strong> {startup.companyName}</p>
        <p><strong>Company Website:</strong> <a href={`https://${startup.companyWebsite}`} target="_blank" rel="noopener noreferrer">{startup.companyWebsite}</a></p>
        <p><strong>Company LinkedIn:</strong> <a href={startup.companyLinkedIn} target="_blank" rel="noopener noreferrer">{startup.companyLinkedIn}</a></p>
        <p><strong>Size of Team:</strong> {startup.sizeOfTeam}</p>
        <p><strong>Revenue:</strong> {startup.revenue}</p>
      </div>

      <div className='my-[8px]'>
        <h2 className='text-[16px] font-semibold'>Product and Funding</h2>
        <p><strong>Describe Product:</strong> {startup.describeProduct}</p>
        <p><strong>Previous Funding Round:</strong> {startup.describePreviousFundingRound}</p>
        <p><strong>Why Community Round:</strong> {startup.whyCommunityRound}</p>
        <p><strong>Existing Commitments:</strong> {startup.existingCommitments}</p>
      </div>

      <div className='my-[8px]'>
        <h2 className='text-[16px] font-semibold'>Startup Overview</h2>
        <p><strong>Startup Name:</strong> {startup.startupName}</p>
        <p><strong>Founders Details:</strong> {startup.foundersdetails}</p>
        <p><strong>Industry:</strong> {startup.industry}</p>
        <p><strong>Location:</strong> {startup.location}</p>
        <p><strong>Stage:</strong> {startup.stage}</p>
        <p><strong>MVP:</strong> {startup.mvp}</p>
        <p><strong>Is Service in the Market:</strong> {String(startup.isServiceIntheMarket)}</p>
      </div>

      <div className='my-[8px]'>
        <h2 className='text-[16px] font-semibold'>Additional Information</h2>
        <p><strong>Traction:</strong> {startup.traction}</p>
        <p><strong>Target Audience:</strong> {startup.targetAudience}</p>
        <p><strong>Business Model:</strong> {startup.businessModel}</p>
        <p><strong>Current Revenue:</strong> {startup.currentRevenue}</p>
        <p><strong>Projected Revenue Next Year:</strong> {startup.projectedtRevenueNextYear}</p>
      </div>
    </div>
  );
};

export default Alldetails;
