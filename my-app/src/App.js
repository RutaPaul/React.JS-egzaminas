import React from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from './pages/Main';
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";

function App() {
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
