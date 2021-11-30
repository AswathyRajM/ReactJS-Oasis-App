import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import BankVerificationForm from "./pages/BankVerificationForm";
import Home from "./pages/Home";
import PersonalInfoForm from "./pages/PersonalInfoForm";
import ResidencyInfoForm from "./pages/ResidencyInfoForm";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personal-info" element={<PersonalInfoForm />} />
                <Route path="/residency-info" element={<ResidencyInfoForm />} />
                <Route
                    path="/bankverification-info"
                    element={<BankVerificationForm />}
                />
            </Routes>
        </div>
    );
}

export default App;
