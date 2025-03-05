import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactUs from "./pages/ContactUs";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import "./index.scss";
import Footer from "./components/Footer";
import PricingPage from "./pages/PricingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/privacy" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/hi-antonio" element={<ContactUs />} />
        <Route path="/price" element={<PricingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
