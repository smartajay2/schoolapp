import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { auth } from "./config/firebase"; // Updated path
import { useState,useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/common/Home";
import Navbar from "./components/common/Navbar";
import Projects from "./components/Projects";
import About from "./components/common/About";
import StDetails from "./components/common/StDetails";
import ProtectedRoute from "./components/ProtectRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Optionally, add a loading spinner or placeholder here while checking auth state
    return <div>Loading...</div>;
  }

  return (
    <div className="px-10  bg-white border rounded-md">
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Home />} />} />
          <Route path="/projects" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Projects />} />} />
          <Route path="/about" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<About />} />} />
          <Route path="/StDetails" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<StDetails/>} />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login for any other route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
