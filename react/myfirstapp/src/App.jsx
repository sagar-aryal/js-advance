import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;

/* 
import Counter from "./components/Counter"; 

const App = () => {
  return (
    <div>       <Counter /> </div>
  )
}

export default App; 
*/
