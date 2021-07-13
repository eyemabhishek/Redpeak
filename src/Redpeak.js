import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Hero";
import Highlight from "./pages/Highlight";
import Whyredpeak from "./pages/Whyredpeak";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function Redpeak() {
    return (
        <>
        <Navbar />
        <Hero />
        <Highlight />
        <Whyredpeak />
        <Contact />
        <Footer />
      </>
    )
}

export default Redpeak
