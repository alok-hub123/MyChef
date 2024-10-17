import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bgImage from '../assets/bgImage.jpg'

export default function RecipeVideos() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false);

  // YouTube API key and base URL
  const API_KEY = 'AIzaSyBq6h_38Fwn5d2sQm5PIiMEF_bV0L6EqF4';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  // Default fetch on page load for recipe videos
  useEffect(() => {
    fetchRecipeVideos('Indian recipes');
  }, []);

  // Fetch videos based on the search query
  const fetchRecipeVideos = async (query) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: query,
          type: 'video',
          part: 'snippet',
          maxResults: 10,
        },
      });
      const videoItems = response.data.items;

      if (videoItems.length > 0) {
        setVideos(videoItems);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setNotFound(true);
    }
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      fetchRecipeVideos('Indian recipes'); // Default fallback
    } else {
      fetchRecipeVideos(searchQuery);
    }
  };

  return (
    <div className="recipe-videos-page text-white bg-no-repeat bg-cover bg-zinc-800" style={{ backgroundImage: `url(${bgImage})` }} >

      <div className='flex justify-between py-5 px-2'>
        <h1 className='text-2xl underline ml-5 '>Recipe Tutorial Videos</h1>

        {/* Search Box */}
        <form onSubmit={handleSearch} className='flex gap-2'>
          <input
            type="text"
            placeholder="Search for recipe tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='h-[5vh] w-[15vw] p-3 text-orange-400 bg-white rounded-xl focus:outline-none'
          />
          <button type="submit" className='h-[5vh] rounded-xl px-2 bg-orange-400 hover:bg-orange-500'>Search</button>
        </form>
      </div>

      {/* Not Found Message */}
      {notFound && <p className='h-[75vh] w-full flex flex-col items-center justify-center'>No recipe videos found. Please try another search term. <br /> Or excced the request limit</p>}

      {/* Video List */}
      <div className="grid grid-cols-4 ml-[3vw] mt-[3vh]">
        {videos.map((video) => (
          <div key={video.id.videoId} className='h-[32vh] w-[20vw] bg-white mb-3 rounded-xl overflow-hidden'>
            <div className='h-[80%] w-[99.5%] rounded-xl flex flex-col justify-center items-center border-2 shadow-md'>
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
                className="h-[97%] w-[98%] rounded-xl "
              />
            </div>
            <div className='text-black px-3 border-t-2 mt-2 border-black font-semibold'>
              <h3 className='truncate'>{video.snippet.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
