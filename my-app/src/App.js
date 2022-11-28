import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intropage from "./Pages/IntroPage/Intropage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import Signuppage from "./Pages/SignupPage/Signuppage";
import Homepage from "./Pages/HomePage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<Signuppage />} />
        <Route path="/Home" element={<Homepage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
