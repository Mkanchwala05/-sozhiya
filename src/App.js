import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home";
import MatchesProfile from "./pages/matches";
import ViewedProfile from "./pages/viewedprofiles"
import ViewedContacted from "./pages/viewedNot_contacted"
import Paidembers from "./pages/premiumMembers"
import LoginPage from "./pages/login"; 
import SignUpPage from "./pages/signUp"; 
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}/>
         <Route path="matches" element={<MatchesProfile/>}/>  
         <Route path="premium-Members" element={<Paidembers/>}/>       
         <Route path="viewed-profile" element={<ViewedProfile/>}/>       
         <Route path="viewed-Not-Contacted" element={<ViewedContacted/>}/>       
         <Route path="login" element={<LoginPage/>}/>
         <Route path="signUp" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);