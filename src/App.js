import Header from "./components/Header";
import HomePage from "./components/HomePage";
import About from "./components/About";
import index from "./components/index.css";
import { Routes,Route, BrowserRouter as Router } from "react-router-dom";
import TourPackage from "./components/TourPackage";
import DetailPackage from "./components/DetailPackage";
import Login from"./components/Login";
// import Register from "./components/Register";
function App() {
  return (
    <>
    <Router>
      <div>
    <Header/>
    </div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tour-package" element={<TourPackage/>}/>
      <Route path="/tour-package/:tourpackageId" element={<DetailPackage/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="register" element={<Register/>} /> */}
    </Routes>
    </Router>
    
     </>
  );
}
export default App;