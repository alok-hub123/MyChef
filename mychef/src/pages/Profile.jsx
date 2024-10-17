import React from 'react'
import { FaEdit, FaPlus, FaUserFriends, FaClock } from "react-icons/fa";
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth } from '../constants/firebaseConfig.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Profile() {

  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = ref(db, 'users/' + user.uid);
        onValue(userRef, (snapshot) => {
          setUserData(snapshot.val());
        });
      }
      if (!user) {
        // If no user is signed in, redirect to the login page
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);

  const recipes = [
    { name: "Recipe 1", path: "../src/assets/img1.jpg", duration: "10 min" },
    { name: "Recipe 2", path: "../src/assets/img2.jpeg", duration: "10 min" },
    { name: "Recipe 3", path: "../src/assets/img3.jpg", duration: "10 min" },
    { name: "Recipe 4", path: "../src/assets/img4.jpg", duration: "10 min" },
    { name: "Recipe 5", path: "../src/assets/img5.jpg", duration: "10 min" },
    { name: "Recipe 6", path: "../src/assets/img6.jpeg", duration: "10 min" },
    { name: "Recipe 1", path: "../src/assets/img1.jpg", duration: "10 min" },
    { name: "Recipe 2", path: "../src/assets/img2.jpeg", duration: "10 min" },
    { name: "Recipe 3", path: "../src/assets/img3.jpg", duration: "10 min" },
    { name: "Recipe 4", path: "../src/assets/img4.jpg", duration: "10 min" },
    { name: "Recipe 5", path: "../src/assets/img5.jpg", duration: "10 min" },
    { name: "Recipe 6", path: "../src/assets/img6.jpeg", duration: "10 min" },
    { name: "Recipe 1", path: "../src/assets/img1.jpg", duration: "10 min" },
    { name: "Recipe 2", path: "../src/assets/img2.jpeg", duration: "10 min" },
    { name: "Recipe 3", path: "../src/assets/img3.jpg", duration: "10 min" },
    { name: "Recipe 4", path: "../src/assets/img4.jpg", duration: "10 min" },
    { name: "Recipe 5", path: "../src/assets/img5.jpg", duration: "10 min" },
    { name: "Recipe 6", path: "../src/assets/img6.jpeg", duration: "10 min" },
  ]

  return (
    <div className='bg-zinc-800 text-white h-[95vh] '>
      <div className="container mx-auto p-4">
        {/* Profile Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-orange-400 text-white rounded-full p-1">
                <FaEdit />
              </button>
            </div>
            <div>
              {userData ? (
                <h1 className='text-2xl font-bold'>{userData.firstName} {userData.lastName}</h1>
              ) : (
                <h1>Loading...</h1>
              )}
              <div className="flex space-x-4  text-zinc-400">
                <span className="flex items-center space-x-1">
                  <FaUserFriends />
                  <span>Followers: 10</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaUserFriends />
                  <span>Following: 20</span>
                </span>
              </div>
            </div>
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded">Edit Profile</button>
        </div>

        {/* My Recipes Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">My Recipes</h2>
          <div className="h-[60vh] flex flex-wrap space-x-2 gap-y-4 gap-x-6 overflow-y-scroll ">
            {recipes.map((recipe, index) => (
              <div key={index} className="h-[55%] w-[20%] border p-4 rounded-lg shadow shadow-white hover:shadow-md hover:shadow-white transition-shadow bg-zinc-600">
                <img
                  src={recipe.path}
                  alt="Recipe"
                  className="w-full h-[70%] object-cover rounded"
                />
                <div className="mt-2">
                  <h3 className="font-bold">{recipe.name}</h3>
                  <span className="flex items-center space-x-1 text-zinc-400">
                    <FaClock />
                    <span>{recipe.duration}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Upload Button */}
        <button className="fixed bottom-4 right-4 bg-orange-400 text-white rounded-full p-4 shadow-lg hover:bg-orange-500 transition">
          <FaPlus size={24} />
        </button>
      </div>
    </div>
  )
}

export default Profile
