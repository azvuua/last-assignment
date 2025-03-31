import { useRouter } from 'next/router';
import React from 'react';
// import { IoIosArrowBack } from "react-icons/io";

const Index = () => {
  const router = useRouter();

  return (
    <div className="w-auto h-auto bg-gray flex">
      <div className='h-[800px] w-64 bg-white pl-5 shadow-xl'>
        <button className="p-3 text-black rounded-md" onClick={() => router.push("/")}>
          {/* <IoIosArrowBack /> */}
        </button>
        <p className='font-bold text-black pt-5 '>Dashboard</p>
        <p className='font-bold text-black pt-8 '>Menu</p>
        <p className='text-black pt-5 '>Home</p>
        <p className='text-black pt-3 '>Profile</p>
        <p className='text-black pt-3 '>Settings</p>
        <p className='text-black pt-3 '>Reports</p>
      </div>

      <div className=''>
        <div className='h-[60px] w-[1250px] pl-[900px] bg-white flex items-center shadow-[20px_-1px_15px]'>
          <div className='ml-20 mt-3 w-40 p-1 border-2 rounded border-gray-400'>
            <p className='text-gray-500 ml-3'>Help</p>
          </div>
          <div className='mt-3 w-20 p-1 bg-blue-500 border rounded ml-3'>
            <p className='text-white ml-4'>Send</p>
          </div>
        </div>

        <div className='h-[740px] w-[1250px] bg-gray-200 pl-5 pt-6'>
          <p className='font-bold text-black'>Welcome to the Dashboard</p>
          <div className='flex'>
            <div className='p-4 border mt-5 rounded bg-white w-[395px] shadow-xl'>
              <p className='font-bold text-xs text-black'>Total Users</p>
              <p className='font-bold text-blue-500 pt-1'>1342</p>
            </div>
            <div className='ml-4 p-4 border mt-5 rounded bg-white w-[395px] shadow-xl'>
              <p className='font-bold text-xs text-black'>New Orders</p>
              <p className='font-bold text-green-500 pt-1'>567</p>
            </div>
            <div className='ml-4 p-4 border mt-5 rounded bg-white w-[395px] shadow-xl'>
              <p className='font-bold text-xs text-black'>Pending Issues</p>
              <p className='font-bold text-red-500 pt-1'>23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
