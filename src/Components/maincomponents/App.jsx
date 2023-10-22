import React, { useState } from "react";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavbarAlt from "./NavbarAlt.jsx";
import Inicio from "../pages/Inicio.jsx";
import Tarifas from "../pages/Tarifas.jsx";
import Servicios from "../pages/Servicios.jsx";
import ContactUstwo from "../pages/Contactenos";

export  function App() {
  return (
    <div className="App">

      <Router>
        <NavbarAlt/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/contactenos' element={<ContactUstwo/>}/>
          <Route path='/tarifas' element={<Tarifas/>}/> 
        </Routes>
      </Router>

    </div>
  );
}