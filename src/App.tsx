import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactUs from "./pages/ContactUs";
import NavigationBar from "./components/NavigationBar";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
