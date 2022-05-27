import React from "react";
import Navbar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Services from "./components/Services/Services";
import "./App.css";

function App() {
  return (
    <div class="App">
      <Navbar />
      <HomePage />
      <Services />
    </div>
  );
}

export default App;
