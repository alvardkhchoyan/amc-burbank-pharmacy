import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/Landing";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { ROUTES } from "./constants/paths";
import About from "./pages/about/About";
import React from "react";
import "./App.css";
import Product from "./pages/product/Product";
import Compounding from "./pages/compounding/Compounding";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.Compounding} element={<Compounding />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
