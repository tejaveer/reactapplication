import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Send from "./components/Send";
import Update from "./components/Update";
import Delete from "./components/Delete";
function App() {
  

  return (
    <div> 
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<Send />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
         </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App
