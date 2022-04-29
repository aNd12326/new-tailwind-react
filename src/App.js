import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewSletter from "./components/NewSletter";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewSletter />
    </div>
  );
}

export default App;
