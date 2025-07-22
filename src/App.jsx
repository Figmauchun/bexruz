import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import Login from "./pages/Login";
import Add from "./pages/add";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
