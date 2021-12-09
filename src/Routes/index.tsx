import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Signup from '../pages/SignUp'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
