import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { About, Contact, Home, Login, Products, Register } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/*    public routes   */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*      private routes   */}
        <Route path="/products" element={<Products />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
