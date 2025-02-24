import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactUs from "./pages/ContactUs";
import NavigationBar from "./components/NavigationBar";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
