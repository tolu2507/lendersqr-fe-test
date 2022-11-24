import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/DashBoardPage";
import { Login } from "./pages/LoginPage";
import { SignUp } from "./pages/SignupPage";
import { Userdetails } from "./pages/UserDetailsPage";
import { User } from "./pages/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/userdetails" element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
