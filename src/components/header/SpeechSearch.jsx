import { useState } from 'react';
import { BiSolidMicrophone } from 'react-icons/bi';
import { IoSearchSharp } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { Button, Input } from 'rizzui';

const SpeechSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [listening , setListening] = useState(false)

  const handleVoiceSearch = () => {
    if (!window.webkitSpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }
    setListening(true)
    
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setListening(false)
    };

    recognition.onerror = (event) => {
      setListening(false)
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();
  };

  return (
    <div className="flex items-center w-full gap-1">
       <div className="flex items-center border-2 rounded-full justify-between flex-grow  px-3 py-1">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='border-0 outline-none flex-grow text-sm w-32 sm:w-58'
        type=""
        placeholder="Search..."
      />
      {!searchQuery && !listening && (
        <BiSolidMicrophone 
          onClick={handleVoiceSearch} 
          className="cursor-pointer text-gray-600 h-6 w-6 p-1 hover:text-gray-800 transition duration-200" 
        />
      )}
      {searchQuery && (
        <MdCancel 
          onClick={() => setSearchQuery('')} 
          className="cursor-pointer text-gray-600 h-6 w-6 p-1 hover:text-gray-800 transition duration-200" 
        />
      )}
      {!listening && (
        <IoSearchSharp 
          onClick={() => alert(searchQuery)} 
          className="cursor-pointer bg-sidebarTheme-dark h-6 w-6 p-1 rounded-full text-white transition duration-200" 
        />
      )}
    </div>
    {/* <Button
      className="text-white rounded-full font-bold bg-sidebarTheme-dark shadow-md  transition"
      size="sm"
   
      onClick={()=>alert(searchQuery)}
    >
      <IoSearchSharp className="font-bold" />
    </Button> */}
  </div> 
  );
};

export default SpeechSearch;

