import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-white">
    <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
    <div class="w-20 h-20 rounded-full bg-[#77A480] flex items-center justify-center">
      <img src="/zuv.png" class="w-12 h-12"/>
    </div>
    </div>
    <h1 class="mt-14 text-2xl text-black">Payment Confirmed.</h1>
    <p class="text-gray-300 text-xs">Flight successfully booked!</p>
    <div onClick={() => router.push("/biydaalt/page1")} class="mt-10 flex items-center justify-center bg-[#AACEB1] text-white text-xs rounded-full w-60 h-10">
      Back to Home
    </div>
  </div>
  );
}