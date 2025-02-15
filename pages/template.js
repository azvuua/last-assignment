import { useRouter } from 'next/router'
import React from 'react'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
const Index = () => {
  const router = useRouter();
  return (
    <div className="h-[830px] w-[700px] ml-96 flex justify-center  bg-white">
      <button className="p-3 text-black rounded-md" onClick={() => router.push("/")}>
      <IoIosArrowBack />
      </button>
       <div className='h-[730px] w-[600px] border mt-12 p-5 pt-5'>
        <h1 className='text-black font-bold text-[30px]'>INSERT NAME HERE</h1>
        <p className='text-black mt-3'>[Email ID]</p>
        <p className='text-black '>[Address]</p>
        <p className='text-black '>[Phone Number]</p>
        <p className='text-black '>[Website]</p>
        <h1 className='text-black font-bold text-[25px] mt-5'>OBJECTIVES</h1>
        <p className='text-black '>[Mention your objectives here]</p>
        <h1 className='text-black font-bold text-[25px] mt-5'>EDUCATION</h1>

        <h1 className='text-black font-bold text-[25px] mt-5'>NAME OF SCHOOL</h1>
        <p className='text-red-400 '>[Completion date and name of degree]</p>
        <p className='text-black '>[Type 1st of accomplishment]</p>
        <h1 className='text-black font-bold text-[25px] mt-5'>EXPERIENCE</h1>
        <h1 className='text-black font-bold text-[25px] mt-5'>COMPANY NAME</h1>
        <p className='text-black '>[Type your job title] [Ohio]=[Rizz]</p>
        <p className='text-black mt-5 '>[Type your job resposibilities]</p>
        <h1 className='text-black font-bold text-[25px] mt-5'>SKILLS</h1>
        <li>
          <ul className='text-black'>Skill1</ul>
        </li>
        <li> <ul className='text-black'>Skill2</ul></li>
        


       </div>
       
    </div>
  )
}

export default Index
