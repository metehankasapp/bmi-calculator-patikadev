import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//components
import ResponsiveAppBar from "./components/UI/Navbar";
import BmıForm from "./components/BmıForm";
import BmiDescription from "./components/BmıDescription";

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        

        <div className="">
          <Routes>
          <Route path="/" element={<BmıForm />} />
            <Route path="/bmi-description" element={<BmiDescription />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
