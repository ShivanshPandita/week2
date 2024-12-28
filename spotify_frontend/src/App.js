
import "./output.css";
import LoginComponent from "./Routes/Login";
import SignupComponent from "./Routes/Signup";
import HomeComponent from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

      <div className="w-screen h-screen font-poppins">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hellocomp />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/home" element={<HomeComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}
const Hellocomp = () => {
  return <div>hello from comp</div>;
};

export default App;
