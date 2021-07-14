import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import Highlight from "./pages/Highlight";
import WhyRedPeak from "./pages/WhyRedPeak";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function Redpeak() {
    return (
        <>
        <Navbar />
        <Hero />
        <Highlight />
        <WhyRedPeak />
        <Contact />
        <Footer />
      </>
    )
}

export default Redpeak
