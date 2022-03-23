import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Main from "./page/Main";
import Register from "./page/Register";

import "./App.css"

function App() {
  return ( 
    <BrowserRouter>
      <div className = "app" >
        <Header />
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />}/>
            <Route path="*" element={<div className="container"><h1>Страница в разработке</h1></div>}/>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;