import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center max-w-4xl mx-auto space-x-4 sm:space-x-8">
        <img 
          src="/ep_back.png"  
          className="w-auto h-auto max-w-[50px]" 
        />
        <img 
          src="/notification.png" 
          className="w-auto h-auto max-w-[50px]" 
        />
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-[150px] break-all font-bold text-black text-3xl">Book Your Flight</div>
        <div className="w-10 h-10 rounded-lg mt-3 bg-[#BBCC95]"><img src="/plaane.png"></img></div>
      </div>
      <div className="flex space-x-20 mt-10 justify-center">
      <div className="bg-[#BBCC95] text-white w-40 flex justify-center h-10 font-medium px-4 py-2 rounded-lg">One-way</div>
      <div className="text-gray-500 font-medium w-40 flex justify-center px-4 py-2 rounded-full hover:bg-gray-100">Return</div>
    </div>
    <div> <p class=" mt-14 ml-5   text-gray-300">From</p>
    <select class="w-full h-14 border border-[#BBCC95] rounded text-black font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option selected >UB</option>
        <option selected >Tsetserleg</option>
        <option selected >Darkhan</option>
        <option selected >Erdenet</option>
      </select></div>
    <div> <p class="mt-7 ml-5   text-gray-300">To</p>
    <select class="w-full h-14 border border-[#BBCC95] rounded text-black font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option selected >Shargaljuult</option>
        <option selected >Gobi</option>
        <option selected >Hushuu</option>
        <option selected >Bogd mountain</option>
        <option selected >Altai</option>
        <option selected >Talbai</option>
        <option selected >Uvurkhangai</option>
      </select></div>
    <div> <p class="mt-7 ml-5   text-gray-300">Date</p>
    <div class="w-full mt-1 border border-[#BBCC95] rounded-lg items-center justify-between px-4 py-2 mb-4 h-14 flex">
      <p className="text-black font-semibold">17th Oct - 21st Oct</p>
       <Image className=""
          src="/calendar.png" 
          
          width={20} 
          height={20} 
          
        />
    </div></div>
    <div className="flex mt-10 justify-between">
      
     <select class="w-60 h-[90px] border font-semibold border-[#BBCC95] rounded text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
      
        <option selected >Economy</option>
        <option selected >Premium Economy</option>
        <option selected >Business</option>
        <option selected >First Class</option>
      </select>
    <select class="w-[120px] font-semibold h-[90px] border border-[#BBCC95] rounded text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400">
        <option selected>1</option>
        <option selected>2</option>
        <option selected>3</option>
        <option selected>4</option>
      </select>
    </div>
    <div onClick={() => router.push("/biydaalt/confirmed")} className="flex justify-center"><button class="mt-10 bg-[#77A480] text-white  rounded-full  w-80 h-[50px]">
      Book now
    </button></div>
    
    </div>
  );
}
