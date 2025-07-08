import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "home" && <Hero />}
      {activeTab === "gallery" && <Gallery />}
      {activeTab === "contact" && <Contact />}
      
      <Footer />
    </div>
  );
};

export default Homepage;