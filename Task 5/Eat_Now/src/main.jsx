import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import OnBoarding from "./pages/OnBoarding";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import Nearby from "./pages/Nearby";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="login" element={<Login />} />
        <Route path="sign up" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="reset password" element={<ResetPassword />} />
        <Route path="nearby" element={<Nearby />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
