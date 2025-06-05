import { useState } from 'react';
import { useRouter } from 'next/router'; 

const Counter = () => {
  const [type, setType] = useState("Suragch");
  const router = useRouter(); 

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-24 items-center justify-center min-h-screen">
      <h1 className="mr-4 text-lg md:text-xl">Name:</h1>
      
      <button
        onClick={() => router.push("/")} 
        className="absolute top-5 left-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
      >
        Back
      </button>
      
      <form action="/search" className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <input 
          name="query" 
          value={type} 
          onChange={(event) => setType(event.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2 w-full md:w-auto"
        />
        <p className="mt-2 md:mt-0 md:ml-5 text-lg">{type}</p>
      </form>
    </div>
  );
};

export default Counter;