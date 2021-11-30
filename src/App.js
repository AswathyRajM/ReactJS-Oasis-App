import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuoteComponent from "./UI/QuoteComponent/index";
import JoinUsForm from "./components/FormComponent/JoinUsForm";
import Navbar from "./components/Navbar/index";
function App() {
    return (
        <div className="App">
            {/* <Grid container>
                <NavbarComponent />
                <QuoteComponent />
                <JoinUsComponent />
            </Grid> */}
            {/* 
            <QuoteComponent />
            <Routes>
                <Route path="/" element={<JoinUsComponent />} />
                <Route path="/test" element={<NavbarComponent />} /> */}
            {/* <Route path="/attendence" component={Attendence} />
					<Route path="/events" component={Events} />
					<Route path="/documents" component={Documents} /> */}
            {/* </Routes> */}

            <Navbar />
            <JoinUsForm />
        </div>
    );
}

export default App;
