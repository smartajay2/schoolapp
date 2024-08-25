import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; // Updated path

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Err, setError] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged(function (user) {
            if (user) {
                navigate("/home")
            }
        })
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate login process
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log("success retrievd" + res)
            navigate("Home")
        }).catch(() => {
            setError("Error Please try Signin")
        })
        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route
    };

    return (
        <div className="flex justify-center  items-center h-screen bg-gray-100 mt-0 mb-0">

            <form onSubmit={handleLogin} className="p-8 bg-white rounded-lg shadow-md" style={{ width: "75%", marginTop: "10px" }}>
                <h1 className="text-2xl font-bold mb-5 text-gray-800 flex text-center">STUDENT MANEGMENT SYSTEM</h1>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <p className='text-red-600 cursor-pointer my-2'>{Err}</p>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out">Login</button>

            </form>
        </div>
    );
}

export default Login;
