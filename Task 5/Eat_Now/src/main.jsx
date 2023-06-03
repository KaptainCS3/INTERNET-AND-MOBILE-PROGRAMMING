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
        <Route exact path="/" element={<App />} />
        <Route exact path="onboarding" element={<OnBoarding />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="sign up" element={<SignUp />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="reset password" element={<ResetPassword />} />
        <Route exact path="nearby" element={<Nearby />} />
        <Route exact path="notifications" element={<Notification />} />
        <Route exact path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
