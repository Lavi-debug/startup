import { useState } from 'react'
import 'flowbite';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css'
import Landing from './components/Landing'
import Forpartners from './components/Forpartners'
import Carousel from './components/carousel'
import Forstartups from './components/Forstartups'
import Forinvestors from './components/Forinvestors'
import Slider from './components/test'
import CenterZoomSlider from './components/test'
import Userhomepage from './components/userhome/Userhomepage'
import UserNavbar from './components/userhome/UserNavbar'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Investorlogin from './components/Login/Investorlogin'
import Startuplogin from './components/Login/Startuplogin';
import Inverstorsignup from './components/Signup/investorsignup'
import Inverstorsignuptwo from './components/Signup/investorsignuptwo'
import Inverstorsignupthree from './components/Signup/investorsignupthree'
import Inverstorsignupfour from './components/Signup/investorsignupfour'
import Inverstorsignupfive from './components/Signup/investorsignupfive'
import Inverstorsignupsix from './components/Signup/investorsignupsix'
import Inverstorsignupseven from './components/Signup/investorsignupseven'
import Startupsignuptwo from './components/Signup/startupsignuptwo'
import Startupsignup from './components/Signup/startupsignup'
import Startupsignupthree from './components/Signup/startupsignupthree'
import Startupsignupfour from './components/Signup/startupsignupfour'

import Personaldetails from './components/Profileopt/Personaldetails';
import Privaterounddetails from './components/Profileopt/Privaterounddetails';
import Changepasswod from './components/Profileopt/Changepasswod';
import Bankdetails from './components/Profileopt/Bankdetails';

import Startupdetails from './components/Startupprflopt/Startupdetails';

import Productoffering from './components/userhome/Productoffering';
import Myportfolioi from './components/userhome/Myportfolioi';
import Livecampaigns from './components/userhome/Livecampaigns';
import Knowledgecenter from './components/userhome/Knowledgecenter';
import FAQ from './components/userhome/FAQ';
import Blogpage from './components/userhome/Blogpage';
import Investormainhomepage from './components/userhome/Investormainhomepage';

import Stprdctofrng from './components/startuphome/Stprdctofrng'
import Stmyprot from './components/startuphome/Stmyprot'
import Stlivecmpgn from './components/startuphome/Stlivecmpgn'
import Stknldgecntr from './components/startuphome/Stknldgecntr'
import Stfaq from './components/startuphome/Stfaq'
import Stblogpage from './components/startuphome/Stblogpage'
import Strtupdtls from './components/startuphome/strtupdtls';
import Strtupabtus from './components/startuphome/strtupabtus';
import Startupmainhomepage from './components/startuphome/Startupmainhomepage';
import Alldetails from './components/startuphome/Alldetails';

import Adminlogin from './components/Adminlogin';
import Admin from './components/Admin';

import Howitworks from './components/howitworks'


function App() {

  return (

   
    <>
      {/* <Landing/> */}
      {/* <Forpartners/> */}
      {/* <Carousel/> */}
      {/* <Forstartups/> */}
      {/* <CenterZoomSlider/> */}
      {/* <Forinvestors/> */}
      {/* <Userhomepage/> */}
      {/* <Aboutus/> */}
      {/* <Contactus/> */}
      {/* <Investorlogin/> */}
      {/* <Inverstorsignup/> */}
      {/* <Inverstorsignuptwo/> */}
      {/* <Inverstorsignupfour/> */}
      {/* <Inverstorsignupfive/> */}
      {/* <Startupsignup/> */}

      {/* <Route exact path="/userhomepage" element={<Userhomepage/>} /> */}
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/landing" element={<Landing/>} />
      <Route exact path="/forpartners" element={<Forpartners/>} />
      <Route exact path="/carousel" element={<Carousel/>} />
      <Route exact path="/forstartups" element={<Forstartups/>} />
      <Route exact path="/centerzoomslider" element={<CenterZoomSlider/>} />
      <Route exact path="/forinvestors" element={<Forinvestors/>} />
      <Route exact path="/userhomepage" element={<UserNavbar/>} />
      <Route exact path="/aboutus" element={<Aboutus/>} />
      <Route exact path="/contactus" element={<Contactus/>} />
      <Route exact path="/investorlogin" element={<Investorlogin/>} />
      <Route exact path="/Startuplogin" element={<Startuplogin/>} />
      <Route exact path="/inverstorsignup" element={<Inverstorsignup/>} />
      <Route exact path="/inverstorsignuptwo" element={<Inverstorsignuptwo/>} />
      <Route exact path="/inverstorsignupthree" element={<Inverstorsignupthree/>} />
      <Route exact path="/inverstorsignupfour" element={<Inverstorsignupfour/>} />
      <Route exact path="/inverstorsignupfive" element={<Inverstorsignupfive/>} />
      <Route exact path="/inverstorsignupsix" element={<Inverstorsignupsix/>} />
      <Route exact path="/inverstorsignupseven" element={<Inverstorsignupseven/>} />
      <Route exact path="/Startupsignuptwo" element={<Startupsignuptwo/>} />
      <Route exact path="/startupsignup" element={<Startupsignup/>} />
      <Route exact path="/startupsignupthree" element={<Startupsignupthree/>} />
      <Route exact path="/startupsignupfour" element={<Startupsignupfour/>} />

      <Route exact path="/Productoffering" element={<Productoffering/>} />
      <Route exact path="/Personaldetails" element={<Personaldetails/>} />
      <Route exact path="/Privaterounddetails" element={<Privaterounddetails/>} />
      <Route exact path="/Changepasswod" element={<Changepasswod/>} />
      <Route exact path="/Bankdetails" element={<Bankdetails/>} />
      <Route exact path="/Myportfolioi" element={<Myportfolioi/>} />
      <Route exact path="/Livecampaigns" element={<Livecampaigns/>} />
      <Route exact path="/Knowledgecenter" element={<Knowledgecenter/>} />
      <Route exact path="/FAQ" element={<FAQ/>} />
      <Route exact path="/Blogpage" element={<Blogpage/>} />
      <Route exact path="/Investormainhomepage" element={<Investormainhomepage/>} />


      <Route exact path="/Stprdctofrng" element={<Stprdctofrng/>} />
      <Route exact path="/Startupdetails" element={<Startupdetails/>} />
      <Route exact path="/Privaterounddetails" element={<Privaterounddetails/>} />
      <Route exact path="/Changepasswod" element={<Changepasswod/>} />
      <Route exact path="/Bankdetails" element={<Bankdetails/>} />
      <Route exact path="/Stmyprot" element={<Stmyprot/>} />
      <Route exact path="/Stlivecmpgn" element={<Stlivecmpgn/>} />
      <Route exact path="/Stknldgecntr" element={<Stknldgecntr/>} />
      <Route exact path="/Stfaq" element={<Stfaq/>} />
      <Route exact path="/Stblogpage" element={<Stblogpage/>} />
      <Route exact path="/Strtupdtls" element={<Strtupdtls/>} />
      <Route exact path="/Strtupabtus" element={<Strtupabtus/>} />
      <Route exact path="/Startupmainhomepage" element={<Startupmainhomepage/>} />
      <Route exact path="/Alldetails" element={<Alldetails/>} />

      <Route exact path="/Adminlogin" element={<Adminlogin/>} />
      <Route exact path="/Admin" element={<Admin/>} />
      </Routes>

      {/* <Howitworks/> */}
      
    </>
  )
}

export default App
