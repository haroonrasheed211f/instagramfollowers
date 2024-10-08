import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./Pages/Contact";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import BuyFollowers from "./Pages/BuyFollowers";
import GetStarted from "./Pages/GetStarted";
import Tiktok from "./Pages/Tiktok";
import Threads from "./Pages/Threads";
import Otherservices from "./Pages/Otherservices";
import Home from "./Pages/Home";

const App = () => {
  const theme = {
    colors: {
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",

      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiktok" element={<Tiktok />} />
          <Route path="/threads" element={<Threads />} />
          <Route path="/otherservices" element={<Otherservices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<BuyFollowers />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
