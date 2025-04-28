import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import LoginPage from "./components/Loginpage/Loginpage";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import CoursesPage from "./components/CoursesPage/CoursesPage";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import WatchVideo from "./components/Watchvideo/Watchvideo";
import ContactPage from "./components/Contact/Contact";
import OurTeam from "./components/OurTeam/OurTeam";
import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import RegisterPage from "./components/RegisterPage/Registerpage";
import Payment from "./components/Payment/Payment";

const HomePage = ({ onSignInClick }) => {
  return (
    <>
      <Main onSignInClick={onSignInClick} />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <main className="overflow-x-hidden bg-gray-900 text-white">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage onSignInClick={handleLoginSuccess} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onLoginSuccess={handleLoginSuccess}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <CoursesPage />
              </Layout>
            }
          />
          <Route
            path="/playlist"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <PlaylistPage />
              </Layout>
            }
          />
          <Route
            path="/watch/:id"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <WatchVideo />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/ourteam"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <OurTeam />
              </Layout>
            }
          />
          <Route
            path="/teacher/:id"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <TeacherProfile />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <About />
              </Layout>
            }
          />
          <Route
            path="/change-password"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <ChangePassword />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage />
            }
          />
          <Route
            path="/payment"
            element={
              <Layout isLoggedIn={isLoggedIn}>
                <Payment />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <div className="text-center text-white py-20">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
