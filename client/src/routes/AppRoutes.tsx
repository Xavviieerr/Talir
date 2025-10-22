import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import History from "../pages/History";

import AuthRedirect from "../components/AuthRedirect";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthRedirect />
      <Routes>
        {/* public routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <SignedOut>
              <Navbar />
              <Home />
            </SignedOut>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/history"
          element={
            <SignedIn>
              <History />
            </SignedIn>
          }
        />
        {/* Redirect users who are not signed in */}
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
