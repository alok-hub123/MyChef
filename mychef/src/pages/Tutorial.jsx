import React from 'react'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function Tutorial() {

  const [activeTab, setActiveTab] = useState('tutorial');
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const tutorials = [
    { title: 'South Indian Recipe - Sambar', videoUrl: 'tutorial1.mp4' },
    { title: 'North Indian Recipe - Butter Chicken', videoUrl: 'tutorial2.mp4' },
    { title: 'Punjabi Recipe - Chole Bhature', videoUrl: 'tutorial3.mp4' },
    { title: 'Bengali Recipe - Fish Curry', videoUrl: 'tutorial4.mp4' },
    { title: 'Gujarati Recipe - Dhokla', videoUrl: 'tutorial5.mp4' },
    { title: 'Rajasthani Recipe - Dal Baati', videoUrl: 'tutorial6.mp4' },
  ];

  const clips = [
    { title: 'Quick Biryani in 5 Minutes', videoUrl: 'clip1.mp4' },
    { title: 'Instant Paneer Tikka', videoUrl: 'clip2.mp4' },
    { title: 'Fastest Roti Making', videoUrl: 'clip3.mp4' },
    { title: 'Easy Naan in 10 Minutes', videoUrl: 'clip4.mp4' },
    { title: 'Spicy Masala Dosa', videoUrl: 'clip5.mp4' },
  ];

  const handleNextClip = () => {
    setCurrentClipIndex((prevIndex) => (prevIndex + 1) % clips.length);
  };

  const handlePreviousClip = () => {
    setCurrentClipIndex((prevIndex) => (prevIndex - 1 + clips.length) % clips.length);
  };


  return (
    <div className=' bg-zinc-400'>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="text-center">
          {/* Tabs for Tutorial and Clips */}
          <div className='flex justify-between mb-2'>
            <div className="space-x-6 mb-6">
              <button
                className={`text-lg font-semibold ${activeTab === 'tutorial' ? 'underline text-orange-400' : 'text-gray-500'}`}
                onClick={() => setActiveTab('tutorial')}
              >
                Tutorial
              </button>
              <button
                className={`text-lg font-semibold ${activeTab === 'clip' ? 'underline text-orange-400' : 'text-gray-500'}`}
                onClick={() => setActiveTab('clip')}
              >
                Clip
              </button>
            </div>
            <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-orange-400"
            />
            </div>
          </div>

          {/* Tutorial Section */}
          {activeTab === 'tutorial' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.filter((tutorial) => tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())).map((tutorial, index) => (
                <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
                  <video className="w-full rounded-lg" controls>
                    <source src={tutorial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="mt-2 text-lg font-semibold">{tutorial.title}</p>
                </div>
              ))}
            </div>
          )}

          {/* Clip Section (similar to YouTube Shorts) */}
          {activeTab === 'clip' && (
            <div className='flex flex-col justify-center items-center'>
              <div className="relative w-[20vw] h-[70vh]">
                <div className="bg-white p-4 shadow-lg rounded-lg w-full h-full">
                  <video className="w-full h-[95%] rounded-lg" controls>
                    <source src={clips[currentClipIndex].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p className="mt-2 text-lg font-semibold">{clips[currentClipIndex].title}</p>
                </div>

                {/* Left Arrow */}
                <button
                  onClick={handlePreviousClip}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  <FaArrowLeft />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNextClip}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tutorial
