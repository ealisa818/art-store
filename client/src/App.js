import './App.css';
import React from "react";
import About from "./components/About";
import Artwork from "./components/Artwork";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header /> */}
      <Routes>
        <Route element={<Landing/>} path="/" />
        <Route element={<SignIn/>} path="/signin" />
        <Route element={<SignUp/>} path="/signup" />
        <Route element={<About/>} path="/about" />
        <Route element={<Artwork/>} path="/artwork" />
   
      </Routes>
    </Router>
    </div>
  );
}

export default App;
