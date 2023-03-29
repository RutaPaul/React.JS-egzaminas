import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from './pages/Main';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Filter from "./components/Filter";

function App() {
  const [type, setType] = useState("initialType");
  return (
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/privacy" exact element={<Privacy/>}/>
          </Routes>
          
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
