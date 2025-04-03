import { useState } from 'react';
import { useRouter } from 'next/router'; 

const Counter = () => {
  const [type, setType] = useState("Suragch");
  const router = useRouter(); 

  return (
    <div className="flex p-96 items-center">
      <h1 className="mr-12">Name: </h1>
      
      <button
        onClick={() => router.push("/")} 
        className="absolute top-5 left-5 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
      >
        Back
      </button>

      <form action="/search">
        <input 
          name="query" 
          value={type} 
          onChange={(event) => setType(event.target.value)}
          className="mr-2"
        />
        <p className="ml-5">{type}</p>
        
       
      </form>
    </div>
  );
};

export default Counter;
