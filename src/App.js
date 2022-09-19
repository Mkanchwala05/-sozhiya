import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home";
import LoginPage from "./pages/login"; 
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}/>
         <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);