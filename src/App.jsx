import React, { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

 return (
  <>
    <AnimatePresence mode="wait">
      {loading && <Preloader />}
    </AnimatePresence>

    {!loading && (
      <>
        <CustomCursor />
        <Header />
        <Outlet />
        <Footer />
      </>
    )}
  </>
)
}

export default App

