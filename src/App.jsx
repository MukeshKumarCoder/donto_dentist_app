import "./App.css";
import Footer from "./HomeSections/Footer/Footer";
import Copyright from "./HomeSections/Copyright/Copyright";
import { Route, Routes } from "react-router-dom";
import About from "../src/pages/About/About";
import Services from "../src/pages/Servicess/Services";
import Dentist from "../src/pages/Dentist/Dentist";
import Blog from "../src/pages/BLog/Blog";
import Contact from "../src/pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
