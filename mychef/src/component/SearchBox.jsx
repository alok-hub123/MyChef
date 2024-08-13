import React, { useState } from 'react';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // You can add your logic to handle the search here
  };

  return (
    <div className='searchBox h-[80vh] w-full  flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit} className="flex items-center justify-center max-w-md mx-auto mt-4">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button type="submit"
          className="px-4 py-2 ml-2 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
