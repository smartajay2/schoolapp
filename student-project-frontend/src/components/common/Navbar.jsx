import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signOut } from '../../config/firebase'; // Adjust import path

function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged in");
        setLog(true);
      } else {
        console.log("User Logged out");
        setLog(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <>
        <div className='py-5 flex justify-between items-center sticky'>
          <h2 className='text-2xl font-bold sticky z-2'>P School</h2>
          <svg
            id="menuicon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:hidden "
            onClick={openSidebar}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='flex gap-5 items-center hidden md:flex'>
            {log && (
              <>
                <Link className='list-none px-5' to={"/Home"}>Home</Link>
                <Link className='list-none px-5' to={"/projects"}>Projects</Link>
                <Link className='list-none px-5' to={"/StDetails"}>StDetails</Link>
                <Link className='list-none px-5' to={"/about"}>About</Link>
              </>
            )}
            {log ? (
              <button
                className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out'
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out'
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </div>
        </div>

        <div
          id='sidenav'
          className={`bg-green-100 fixed z-20 top-0 ${isSidebarOpen ? 'right-0' : 'right-[-100%]'}`}
          style={{ width: "50%", height: "100vh", transition: "right 0.3s" }}
        >
          <div className='text-right p-5'>
            <p id='close-nav' className='inline cursor-pointer text-2xl ml-0 mr-50' onClick={closeSidebar}>x</p>
          </div>
          {log && (
            <ul className='flex flex-col gap-10 items-center text-gray-600'>
              <li><Link className='list-none px-5' to={"/Home"} onClick={closeSidebar}>Home</Link></li>
              <li><Link className='list-none px-5' to={"/projects"} onClick={closeSidebar}>Projects</Link></li>
              <li><Link className='list-none px-5' to={"/StDetails"} onClick={closeSidebar}>StDetails</Link></li>
              <li><Link className='list-none px-5' to={"/about"} onClick={closeSidebar}>About</Link></li>
            </ul>
          )}
          {log ? (
            <button className='button-style button-style-logout' onClick={() => { handleLogout(); closeSidebar(); }}>Logout</button>
          ) : (
            <button className='button-style button-style-login' onClick={() => { navigate("/login"); closeSidebar(); }}>Login</button>
          )}
        </div>
      </>


    </>
  );
}

export default Navbar;
