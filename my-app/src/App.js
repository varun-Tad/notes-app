import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intropage from "./Pages/IntroPage/Intropage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intropage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
