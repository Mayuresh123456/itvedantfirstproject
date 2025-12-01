import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Timer from "./components/Timer";
// import Timer from "./components/Timer";



const Wpage =() =>
{
  const [navOption, setNavOption] = useState('Main');
  

  return(
    <>
    
    <Routes>
      <Route path='a' element={<Navbar/>}/>
      {/* <Route path='b' element={<MainPage/>}/>
      <Route path='c' element={<Login/>}/>
      <Route path='d' element={<Footer/>}/> */}
    </Routes>
    
    <Navbar optionClick={setNavOption} />
    { navOption === "Main" && <MainPage/>} 
    { navOption === "Login" && <Login/>}
    <Footer/>
    <Timer/>
    


    </>
  );
}
export default Wpage;