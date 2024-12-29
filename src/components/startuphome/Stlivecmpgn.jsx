import React, { useState } from 'react';
import Stnavbar from '../startuphome/Stnavbar'


const Stlivecmpgn = () => {


    const [activeButton, setActiveButton] = useState('All');
    
      const items = [
        'All Sectors',
        'Agri Tech',
        'Artifical Intelligence',
        'Auto Tech',
        'B2B E-Commerce',
        'B2C E-Commerce',
        'Grapes',
        'Honeydew',
        'B2C E-Commerce',
        'Banking Tech',
        'Beauty Tech',
        'Blockchain Technology',
        'Cryptocurrency',
        'Cyber-Security',
        'Direct-to-Consumer (D2C)',
        'EdTech',
        'Electric Vehicle',
        'Energy Tech',
        'Enterprise Application',
        'Enterprise Tech',
        'Fin Tech',
        'Food Tech',
        'Gaming Tech',
        'Health Tech',
        'High Tech',
        'InsurTech',
        'Internet-of-things (IoT)',
        'Investment Tech',
        'Life Sciences',
        'Logistic Tech',
        'Real-Estate Tech',
        'Retail Tech',
        'Semiconductor',
        'Travel and Hospitality Tech',
      ];
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isFilterOpen, setIsFilterOpen] = useState(false);
    
      const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen); // Toggle the menu state
      };
    
      const toggleFilter = () => {
          setIsFilterOpen(!isFilterOpen); // Toggle the menu state
      };
    
  return (
    <>
         <Stnavbar/>


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

        <div className='w-full min-h-[100vh] pb-[60px] pl-[40px] pr-[42px] relative'>

        <div className='pt-[12px] mb-[20px] w-full'>

            <div className='md2:flex justify-start items-center mb-[16px] pt-[12px] border-b-[1px] border-b-[#b7b7b7] relative hidden'>

                <button onClick={() => setActiveButton('All')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${ activeButton === 'All' ? 'border-b-[3px] border-black' : ''}`}>All</button>

                <button onClick={() => setActiveButton('Premium Series')} className={`py-[10px] px-[40px] mx-[5px] bg-[white] text-[16px] font-[500] text-[#222] ${activeButton === 'Premium Series' ? 'border-b-[3px] border-black' : ''}`}>Premium Series</button>

                <div className='absolute right-0 top-[20px] w-[180px] h-[38px] border-[1px] border-black flex items-center rounded-[4px] focus:outline focus:outline-blue-500' onClick={toggleMenu}>
                    <div className='relative flex'>

                    <div className='items-center flex flex-wrap relative overflow-hidden p-[2px] px-[8px] h-[33px]'>
                        <div className='m-[2px] py-[2px]h-full'>
                        <input type="text" placeholder='All Sectors' className='w-full placeholder:text-[#333] placeholder:text-[14px] placeholder:font-[400] h-[21px] focus:outline-none text-[14px]'/>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex p-[8px] text-[#cccccc]'>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                        </div>
                    </div>

                    </div>
                </div>

                <div className={`menu w-[180px] h-[301px] border-[1px] border-black overflow-y-auto absolute z-50 right-0 top-[61px] bg-white  ${
                    isMenuOpen ? 'block' : 'hidden' }`}>
                    <ul>
                    
                    {items.map((item, index) => (
                    <li key={index} className='px-[16px] py-[8px] text-[14px] font-[400] text-[#666] hover:bg-green-200 ease-in duration-150'>{item}</li>
                    ))}

                    </ul>
                </div>

            </div>

            <div className='relative md2:hidden'>

                <div onClick={toggleFilter} className='filterbutton flex justify-end gap-[20px] pt-[20px] mb-[-10px] md2:hidden'>
                    <div className='bg-[#f5e5c0] py-[4px] px-[10px] flex items-center gap-[10px]'>
                    <img src="https://investor.creddinv.in/_next/static/media/filter_icon.0f72dfdf.svg" alt="" className='w-[20px] h-[20px]'/> Filter
                    </div>
                </div>

                <div className={`menu w-[180px] h-[301px] border-[1px] border-black overflow-y-auto absolute z-50 right-0 top-[61px] bg-white  ${
                        isFilterOpen ? 'block' : 'hidden' }`}>
                        <ul>
                        
                        {items.map((item, index) => (
                        <li key={index} className='px-[16px] py-[8px] text-[14px] font-[400] text-[#666] hover:bg-green-200 ease-in duration-150'>{item}</li>
                        ))}

                        </ul>
                </div>

            </div>
        </div>

        <div className='mt-[18px]'>
            
            <div>

            <div className='flex justify-between items-center flex-wrap gap-[6px] w-full'>

                <h1 className='text-[32px] font-[700] flex items-center gap-[6px]'>All live campaigns 
                <div className=' pt-[6px]'><img src="https://investor.creddinv.in/_next/static/media/infoicon2.57288105.svg" alt="" className='w-[28px] h-[28px]'/></div></h1>

                <div className='py-[7px] px-[12px] text-[14px] font-[400] text-[#666] border-[1px] border-[#b7b7b7] rounded-[1px]'>
                <p>Read Venture Loop’s <a target="_blank" href="" className='text-[14px] font-[500] text-green-400 underline'> Investor terms</a></p>
                </div>

            </div>

            <div>

                <div className='md2:grid md2:grid-cols-2 md2:grid-rows-2 flex flex-wrap md2:flex-nowrap gap-6 mt-5'>

                <div className="relative z-0">
                    <div className="md2:w-[full] w-full rounded-[12px shadow-custom3]">

                        <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fill-rule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clip-rule="evenodd"></path></svg>
                            NEW
                            </p>

                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            premium serious
                            </p>
                        </div>

                        <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreendrive-thumb.01b7474b.webp&w=3840&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                        <div className="relative bg-white rounded-b-[12px]">
                            <div className="p-[20px] pb-0">
                                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreendrive-logo.d851aed8.webp&w=384&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Green Drive EV</h1>

                                <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">An EV company providing 4-wheeler, 3-wheeler and 2-wheeler vehicles for transportation and delivery services.</p>
                            </div>
                            <div className="relative h-[129px] group ">
                                <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                    <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Bengaluru, India</p>
                                    <div className="flex mt-[4px] justify-start">
                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">EV - logistics </p>
                                    </div>
                                    <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Venture Loop Technologies : Premium Series</p>
                                </div>

                                <div className="pt-[30px] absolute z-0 w-full top-0">
                                    <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                    <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                    </div>

                                    <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                        <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://wa.me/919892102328" target="_blank">Talk</a></span> to IB Team</p>

                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="md2:w-[full] w-full rounded-[12px] shadow-custom3">

                        <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fill-rule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clip-rule="evenodd"></path></svg>
                            NEW
                            </p>

                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            premium serious
                            </p>
                        </div>

                        <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreenday-thumb.35ed08bf.webp&w=3840&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                        <div className="relative bg-white rounded-b-[12px]">
                            <div className="p-[20px] pb-0">
                                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreenday-logo.e084394b.webp&w=256&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Better Nutrition</h1>

                                <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">Leading India’s first line of Biofortified Food Products, including rice, atta, noodles, daliya, and broken wheat.</p>
                            </div>
                            <div className="relative h-[129px] group ">
                                <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                    <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Lucknow, India</p>
                                    <div className="flex mt-[4px] justify-start gap-[10px]">
                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">Food TECHNOLOGY </p>

                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">FMCG</p>
                                    </div>
                                    <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Venture Loop Technologies : Premium Series</p>
                                </div>

                                <div className="pt-[30px] absolute z-0 w-full top-0">
                                    <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                    <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                    </div>

                                    <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                        <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://wa.me/919892102328" target="_blank">Talk</a></span> to IB Team</p>

                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="relative z-20">
                    <div className="md2:w-[full] w-full rounded-[12px] shadow-custom3">

                        <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fill-rule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clip-rule="evenodd"></path></svg>
                            NEW
                            </p>

                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            premium serious
                            </p>
                        </div>

                        <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanarchy-thumb.54ec3008.webp&w=1920&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                        <div className="relative bg-white rounded-b-[12px]">
                            <div className="p-[20px] pb-0">
                                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanarchy-logo.8201c458.webp&w=384&q=75" alt="" className="bg-[black] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">Anarchy Warzone</h1>

                                <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">A game development company launching India's first and Web 3 first's battle royale game, "Anarchy Warzone".</p>
                            </div>
                            <div className="relative h-[129px] group ">
                                <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                    <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Bengaluru, India</p>
                                    <div className="flex mt-[4px] justify-start gap-[10px]">
                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">Gaming </p>

                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">TECHNOLOGY</p>
                                    </div>
                                    <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Venture Loop Technologies : Premium Series</p>
                                </div>

                                <div className="pt-[30px] absolute z-0 w-full top-0">
                                    <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                    <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                    </div>

                                    <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                        <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://wa.me/919892102328" target="_blank">Talk</a></span> to IB Team</p>

                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="relative z-30">
                    <div className="md2:w-[full] w-full rounded-[12px] shadow-custom3">

                        <div className="absolute pt-[16px] px-[20px] flex flex-wrap gap-[10px]">
                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#1201ff]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons-solid" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#1201ff" fill-rule="evenodd" d="M12.395 2.553a1 1 0 0 0-1.45-.385c-.345.23-.614.558-.822.88c-.214.33-.403.713-.57 1.116c-.334.804-.614 1.768-.84 2.734a31 31 0 0 0-.613 3.58a2.64 2.64 0 0 1-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 0 0 5.05 6.05A6.98 6.98 0 0 0 3 11a7 7 0 1 0 11.95-4.95c-.592-.591-.98-.985-1.348-1.467c-.363-.476-.724-1.063-1.207-2.03M12.12 15.12A3 3 0 0 1 7 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5c.5 1 .786 1.293 1.371 1.879A3 3 0 0 1 13 13a3 3 0 0 1-.879 2.121" clip-rule="evenodd"></path></svg>
                            NEW
                            </p>

                            <p className="bg-white text-[13px] font-[600] rounded-[4px] py-[6px] px-[10px] flex items-center gap-[4px] text-[#008d41]">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fa-solid" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#008d41" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            premium serious
                            </p>
                        </div>

                        <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhobbyTribe_thumb.f679d3ad.webp&w=1920&q=75" alt="" className="rounded-tl-[12px] rounded-tr-[12px]"/>

                        <div className="relative bg-white rounded-b-[12px]">
                            <div className="p-[20px] pb-0">
                                <img src="https://www.creddinv.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhobbyTribe_logo.5d5634fe.webp&w=640&q=75" alt="" className="bg-[white] h-[60px] w-[60px] p-[8px] absolute left-[20px] text-center top-[-40px] shadow-custom"/>

                                <h1 className="text-[24px] font-[600] mt-[10px] text-[black]">The Hobby Tribe</h1>

                                <p className="text-[16px] font-[400] leading-[22px] mt-[10px] text-[#555]">India’s first FREE app that connects people through their favourite hobbies like guitar, cooking, sports.</p>
                            </div>
                            <div className="relative h-[129px] group ">
                                
                                <div className="px-[20px] pb-[20px] pt-[10px] bg-[white] relative z-10 group-hover:hidden rounded-[12px]">
                                    <p className="text-[16px] font-[400] text-[#505050] pt-[20px]">Mumbai, India</p>
                                    <div className="flex mt-[4px] justify-start">
                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] bg-[#eee]">ED - TECH </p>
                                        
                                        <p className="text-[12px] font-[400] text-[#5f5f5f] py-[2px] px-[10px] border-[1px] border-[#282828] rounded-[3px]">CONSUMER TECH</p>
                                    </div>
                                    <p className="text-[11px] font-[300] mt-[10px] text-[#424242]">Venture Loop Technologies : Premium Series</p>
                                </div>

                                <div className="pt-[30px] absolute z-0 w-full top-0">
                                    <div className="py-[14px] px-[22px] border-t-[1px] border-t-[#d5d5d5]">
                                    <p className="text-[14px] font-[400] text-[#444]"><span className="font-[600] text-black">₹10 Lakhs</span> Minimum Ticket</p>
                                    </div>

                                    <div className="flex border-t-[1px] border-t-[#d5d5d5]">
                                        <p className="pr-[10px] pl-[22px] py-[14px] border-r-[1px] border-r-[#d5d5d5] text-[14px] font-[700] text-[#444] underline"><span><a href="https://docs.google.com/forms/d/e/1FAIpQLSca15O3bC3Q_yVKKpUnT19jkvIpzeB2d32clw9fjV0cAhxe-w/viewform?vc=0&amp;c=0&amp;w=1&amp;flr=0" target="_blank">Interested to Commit</a></span></p>

                                        <p className="py-[14px] pl-[22px] text-[14px] font-[400] text-[#444]"><span className="underline font-[700]"><a href="https://calendly.com/investors-creddinv/30min" target="_blank">Talk</a></span> to IB Team</p>

                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
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

export default Stlivecmpgn
