import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Description from "./components/Description";
import Countries from "./components/Countries";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Description />
      <Sponsors />
      <Countries />
      <Footer />
    </>
  );
};

export default App;
