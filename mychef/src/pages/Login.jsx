// LoginSignupComponent.js
import React, { useState } from 'react';
import { auth } from '../constants/firebaseConfig.jsx'; // Adjust the path as necessary
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/loginBg.jpg'

const LoginSignupComponent = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // For Sign In
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in: ', error);
      setError(error.message); // Set error message
    }
  };

  // For Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Switch to login after successful signup
      setIsLogin(true);
    } catch (error) {
      console.error('Error signing up: ', error);
      setError(error.message); // Set error message
    }
  };

  // style={{ backgroundImage: `url(${loginBg})` }} 
  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${loginBg})` }} >
      <div className="w-full max-w-md p-8 space-y-8 text-white rounded-lg shadow-md backdrop-blur-md">
        <h1 className="text-2xl font-bold text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h1>
        {error && <p className="text-red-500">{error}</p>}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
              Sign In
            </button>
            <p className="text-center">
              Don't have an account?{' '}
              <span className="text-orange-500 cursor-pointer" onClick={() => setIsLogin(false)}>
                Sign Up
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none">
              Sign Up
            </button>
            <p className="text-center">
              Already have an account?{' '}
              <span className="text-orange-500 cursor-pointer" onClick={() => setIsLogin(true)}>
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupComponent;
