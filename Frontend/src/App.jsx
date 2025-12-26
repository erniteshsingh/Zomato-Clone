axios.defaults.withCredentials = true;
import "./index.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./Routes/Router";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Components/Landingpage/Landingpage";
import { setUser } from "./Feautures/Auth/AuthSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/profile", {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setUser(res.data.user));
        }
      } catch (err) {
        console.log("User not logged in");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
        theme="colored"
      />

      <Navbar />

      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
