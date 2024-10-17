import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../constants/firebaseConfig.jsx'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {

  //logic for login and logout
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setIsAuthenticated(false);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      navigate('/'); // Redirect to the homepage or login page after logout
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };
  
  const [selected, setSelected] = useState();

  return (
    <nav className="sticky top-0 z-50 w-full px-20 font-['Neue Montreal'] flex justify-between items-center shadow text-white backdrop-blur-md" >
      <div className='bg-cover'>
        <img src="./Images/logo.png" alt="logo" className='logo w-30 h-14 ' />
      </div>
      <div className="links flex gap-10 ">
        <div className="text-md links flex gap-10">
          <Link to='/' onClick={()=>setSelected('home')} className={`${selected=='home' ? 'text-orange-400 underline' : 'text-white'}`} >Home</Link>
          <Link to='/recipe' onClick={()=>setSelected('recipe')} className={`${selected=='recipe' ? 'text-orange-400 underline' : 'text-white'}`}>Recipe</Link>
          <Link to='/generator' onClick={()=>setSelected('generator')} className={`${selected=='generator' ? 'text-orange-400 underline' : 'text-white'}`}>Generator</Link>
          <Link to='/tutorial' onClick={()=>setSelected('tutorial')} className={`${selected=='tutorial' ? 'text-orange-400 underline' : 'text-white'}`}>Tutorial</Link>
          <Link to='/shop' onClick={()=>setSelected('shop')} className={`${selected=='shop' ? 'text-orange-400 underline' : 'text-white'}`}>Shop</Link>
          <Link to='/dashboard' onClick={()=>setSelected('dashboard')} className={`${selected=='dashboard underline' ? 'text-orange-400' : 'text-white'}`}>Dashboard</Link>
        </div>
        {/* <Link to='/login'><span className='bg-orange-400 py-1 px-2 rounded-md '>Log In</span></Link> */}
        {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-orange-400 py-1 px-2 rounded-md">Logout</button>
        ) : (
          <Link to="/login" className="bg-orange-400 py-1 px-2 rounded-md">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;