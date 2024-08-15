import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

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
    <>
      <div className=' h-[5vh] w-full bg-black mt-[1vh] '><h1 className='text-white text-3xl text-center w-full'>||  Search Your Desire  ||</h1></div>
      <div className='searchBox h-[70vh] w-full relative'>
        <form onSubmit={handleSubmit} className="w-[50vw] flex items-center justify-center max-w-md mx-auto relative">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full px-4 py-2 text-lg text-gray-700 bg-white  rounded-3xl focus:outline-none absolute top-[33vh]"
          />
          <CiSearch className='text-2xl absolute right-[1vw] top-[34vh] cursor-pointer'/>
        </form>
        <img src="/Images/carrotanim.png" alt="" className='h-[20vh] w-[5vw] absolute left-[34.5vw] top-[21vh]'/>
        <img src="/Images/tomatotree.png" alt="" className='h-[45vh] w-[10vw] absolute left-0 bottom-0'/>
        <img src="/Images/r_spoon.png" alt="" className='h-[23vh] w-[15vw] absolute right-0'/>
        <img src="/Images/tadka.png" alt="" className='h-[19vh] w-[13vw] absolute right-0 bottom-0'/>
      </div>
      <div className=' h-[1vh] w-full bg-black '></div>

    </>
  );
}

export default SearchBox;
