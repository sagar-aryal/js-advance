import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { About, Contact, Home, Login, Products } from "./pages/index";
import PrivateRoutes from "./utils/PrivateRoute";

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

        {/*      private routes   */}
        <Route element={<PrivateRoutes />}>
          <Route path="/products" element={<Products />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
