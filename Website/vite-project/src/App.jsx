import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home';
import Destinations from './Components/Pages/Destinations'; // 
import About_us from './Components/Pages/About_us';
import Gastronomy from './Components/Pages/Gastronomy'
import RestaurantDetail from './Components/Pages/RestaurantDetail';
import Footer from './Components/Pages/Footer';
import HowItWorks from './Components/Pages/HowItWorks';
import Contact from './Components/Pages/Contact';
import Sponsors from './Components/Pages/Sponsors';
import TermsOfService from './Components/Pages/TermsOdService';
import SignUp from './Components/SignUp';
import DestinationDetail from './Components/Pages/DestinationDetail';



function App() {



  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'))//first check if the user is logged in on the website 

  const handleSignUp = (username) => {
    const fakeToken = generateFakeToken(username); // Creating fake token
    localStorage.setItem('authToken', fakeToken); //After creating store the token in the localtorage
    setAuthToken(fakeToken);//Update state with the new token




  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')//Remove the token from localStorage
    setAuthToken(null); //Update state to reflect the logout
  


  };

  const generateFakeToken = (username) => {
    return btoa(`${username}-fake-token-${Date.now()}`);

  }


  return (
    <>
      <BrowserRouter>
        {/* Navbar placed outside of Routes since it appears on all pages  */}
        <Navbar authToken={authToken} handleLogout={handleLogout} />





        {/*Define your Routes */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp onSignUp={handleSignUp} />} />
          <Route path="/destinations" element={<Destinations authToken={authToken} />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Gastronomy" element={<Gastronomy />} />
          <Route path="/RestaurantDetail/:id" element={<RestaurantDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/TermsofService" element={<TermsOfService />} />
         

        </Routes>


        {/* Footer placed outside of Routes to appear on all pages */}
        <Footer />

      </BrowserRouter>



    </>
  )
}

export default App
