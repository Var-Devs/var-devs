import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </>
  );
}
