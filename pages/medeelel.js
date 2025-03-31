import Image from "next/image";
import { useRouter } from 'next/router';
import React from 'react';
// import { IoIosArrowBack } from "react-icons/io";

const Index = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r bg-white">
      <div className="h-[400px] w-[700px] bg-white rounded-xl pt-5 flex mt-[30px] shadow-[0px_0px_100px]">
        <div className="bg-white h-[300px] w-[300px] flex flex-col items-center justify-center">
          <div className="h-[150px] w-[150px] rounded-full mt-6 mb-3 bg-white flex justify-center">
            <Image src="/image.png" width={150} height={150}className="rounded-full" />
          </div>
          <div className="text-black font-sans text-lg font-bold">User23261040</div>
          <div className="mt-3">
            <p className="text-purple-950 font-sans text-xs  pt-12 font-bold">@UFC</p>
          </div>
        </div>
        <div className="h-[320px] w-[1px] bg-gray-400 mt-5 mx-5"></div>
        <div className="pl-10 flex flex-col justify-center">
          <p className="font-sans font-bold text-xs text-purple-950">SURNAME</p>
          <p className="text-black font-sans font-bold text-2xl">Azzaya</p>

          <p className="font-sans font-bold text-xs text-purple-950 mt-5">DATE OF BIRTH</p>
          <p className="text-black font-sans font-bold text-2xl">2008-04-30</p>

          <div className="flex mt-5">
            <div className="mr-10">
              <p className="font-sans font-bold text-xs text-purple-950">OCCUPATION</p>
              <p className="text-black font-sans font-bold text-2xl">Developer</p>
            </div>

            <div>
              <p className="font-sans font-bold text-xs text-purple-950">EXTRACURRICULAR</p>
              <p className="text-black font-sans font-bold text-2xl">Sigma</p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="mr-10">
              <p className="font-sans font-bold text-xs text-purple-950">SKILL</p>
              <p className="text-black font-sans font-bold text-2xl">RIZZ</p>
            </div>

            <div>
              <p className="font-sans font-bold text-xs text-purple-950">POSITION</p>
              <p className="text-black font-sans font-bold text-2xl">CEO</p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute top-5 left-5 p-3 bg-gray-400 rounded-full text-white"
        onClick={() => router.push("/")}
      >
        {/* <IoIosArrowBack /> */}
      </button>
    </div>
  );
};

export default Index;
