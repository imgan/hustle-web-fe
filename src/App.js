import './App.css';
import './styles/global.css';
import './styles/privacy.css';
import './styles/fuel.css';
import './styles/aboutUs.css';
import './styles/contactUs.css';
import './styles/faq.css';
import './styles/promo.css';
import "./pages/Homepage/style.css"

// routes dependencies injection
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect } from 'react';
// all routes
import RoutesPage from './Routes';

// all pages
import { Functional } from './pages/Functional';
import { PersonalTrainer } from './pages/PersonalTrainer';
import { Pilates } from './pages/Pilates';
import { Cycling } from './pages/Cycling';
import { TrainingCustomPage } from './pages/TrainingCustomPage';
import { Recovery } from './pages/Recovery';
import { FAQ } from './pages/FAQ';
import { Fuel} from "./pages/Fuel"
import { Homepage } from './pages/Homepage/Homepage';
import {TermsOfService} from "./pages/TermsOfService"
import {PrivacyPolicy} from "./pages/PrivacyPolicy";
import {AboutUs} from "./pages/AboutUs"
import {ContactUs} from "./pages/ContactUs"
import Promo from './pages/Promo/Promo';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-PGHS6QCHV2"; 
ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return (
    <Router>
      <Routes>
        <Route path={RoutesPage.RouteHomepage} element={<Homepage />}/>
        <Route path={RoutesPage.RouteFunctional} element={<Functional />}/>
        <Route path={RoutesPage.RoutePersonalTrainer} element={<PersonalTrainer />}/>
        <Route path={RoutesPage.RoutePilates} element={<Pilates />}/>
        <Route path={RoutesPage.RouteCycling} element={<Cycling />}/>
        <Route path={RoutesPage.RouteTrainingCustomPage} element={<TrainingCustomPage />}/>
        <Route path={RoutesPage.RouteRecovery} element={<Recovery />}/>
        <Route path={RoutesPage.RouteFAQ} element={<FAQ />}/>
        <Route path={RoutesPage.RouteFuel} element={<Fuel />}/>
        <Route path={RoutesPage.RouteTermsOfService} element={<TermsOfService />}/>
        <Route path={RoutesPage.RoutePrivacyPolicy} element={<PrivacyPolicy />}/>
        <Route path={RoutesPage.RouteAboutUs} element={<AboutUs />}/>
        <Route path={RoutesPage.RouteContactUs} element={<ContactUs />}/>
        <Route path={RoutesPage.RoutePromo} element={<Promo />}/>
      </Routes>
    </Router>
  );
}

export default App;
