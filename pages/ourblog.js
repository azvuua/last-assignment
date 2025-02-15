import { useRouter } from 'next/router';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';

const Index = () => {
  const router = useRouter();  

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r bg-white">
      <button className="p-3 text-black rounded-md" onClick={() => router.push("/")}>
      <IoIosArrowBack />
      </button>
      <div className="bg-white p-6 shadow-xl h-[600px] w-full sm:w-[600px] lg:w-[800px]">
        <h1 className="flex justify-center items-center text-3xl text-black">Our Blog</h1>

        <div className="flex justify-center w-full">
          <div className="w-20 h-0.5 bg-black mt-3"></div>
        </div>

        <div className="flex mt-6">
       
          <div className="flex-1 p-4 border-gray-300 m-2">
            <div className="relative mt-4 ml-5">
              <Image 
                width={150} 
                height={150} 
                src="/image.png"  
              />
              <p className="flex justify-center text-black mt-20">Post 1 Headline</p>
              <p className="justify-center text-black mt-5 text-xs">
                Sample small text. Lorem ipsum dolow sit amet.
              </p>
              <p className="flex justify-center text-amber-900 mt-5">
                Wed Jul 22 2020
              </p>
              <div className="flex justify-center h-8 w-24 bg-amber-900 ml-8 mt-4">
                <p className="flex justify-center mt-1">Read More</p>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex-1 p-4 bg-pink-300 border border-black m-2">
            <div className="relative mt-4 ml-5">
              <Image 
                width={150} 
                height={150} 
                src="/image.png"  
              />
              <p className="flex justify-center text-black mt-20">Post 2 Headline</p>
              <p className="justify-center text-black mt-5 text-xs">
                Sample small text. Lorem ipsum dolow sit amet.
              </p>
              <p className="flex justify-center text-amber-900 mt-5">
                Wed Jul 23 2020
              </p>
              <div className="flex justify-center h-8 w-24 bg-amber-900 ml-8 mt-4">
                <p className="flex justify-center mt-1">Read More</p>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="flex-1 p-4 border-gray-300 m-2">
            <div className="relative mt-4 ml-5">
              <Image 
                width={150} 
                height={150} 
                src="/image.png"  
              />
              <p className="flex justify-center text-black mt-20">Post 3 Headline</p>
              <p className="justify-center text-black mt-5 text-xs">
                Sample small text. Lorem ipsum dolow sit amet.
              </p>
              <p className="flex justify-center text-amber-900 mt-5">
                Wed Jul 24 2020
              </p>
              <div className="flex justify-center h-8 w-24 bg-amber-900 ml-8 mt-4">
                <p className="flex justify-center mt-1">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
