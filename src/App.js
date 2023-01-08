import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home";
import MatchesProfile from "./pages/matches";
import UserProfile from "./pages/profile";
import ViewedProfile from "./pages/viewedprofiles"
import ViewedContacted from "./pages/viewedNot_contacted"
import Paidembers from "./pages/premiumMembers"
import UserInbox from "./pages/inbox"
import SendInbox from "./pages/send"
import AboutUs from "./pages/aboutUs"
import Upgrade from "./pages/upgradeMemberShip"
import ConatctUs from "./pages/contactUs"
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import './App.scss';
import {useSelector} from "react-redux"
import { selectUser } from "./authUser/userSlice"

export default function App() {
    const user = useSelector(selectUser)
    return (
        <BrowserRouter>
            <Routes>
                {/* {
                    user ? <Route path="/" element={<Layout />} /> :
                    <Route path="/" element={<LoginPage />} />
                } */}
                <Route path="/" element={<Layout />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="profile/:id" element={<UserProfile />} />
                <Route path="matches" element={<MatchesProfile />} />
                <Route path="premium-Members" element={<Paidembers />} />
                <Route path="viewed-profile" element={<ViewedProfile />} />
                <Route path="viewed-Not-Contacted" element={<ViewedContacted />} />
                <Route path="inbox" element={<UserInbox />} />
                <Route path="send" element={<SendInbox />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="Upgrade" element={<Upgrade />} />
                <Route path="contact-us" element={<ConatctUs />} />
                <Route path="signUp" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);