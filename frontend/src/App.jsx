import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Doctor from "./pages/doctor/Doctor";
import Blog from "./pages/blog/Blog";
import Insurance from "./pages/insurance/insurance";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance-providers" element={<Insurance />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/blogs" element={<Blog />} />

          {/* Login and Profile routes */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
