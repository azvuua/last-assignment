import Image from "next/image";
import { useRouter } from 'next/router'
import React from 'react'
export default function Front() {
  const router = useRouter(); 
  return (
    <div className="h-[800px] w-[1470px] bg-[url('/nest.png')]  bg-white bg-cover">
         <button className="p-3 shadow-lg shadow-indigo-500/40   text-purple-800  bg-white rounded-md mt-[600px] ml-[750px]" onClick={() => router.push("/dashboard")}>Dashboard</button>
         <button className="p-3 w-24  bg-white rounded-md shadow-lg  text-purple-800  shadow-indigo-500/40  ml-10" onClick={() => router.push("/cv")}>CV</button>
         <button className="p-3 w-24  bg-white rounded-md shadow-lg  text-purple-800  shadow-indigo-500/40 ml-10" onClick={() => router.push("/template")}>Template</button>
         <button className="p-3 w-24  bg-white rounded-md shadow-lg  text-purple-800  shadow-indigo-500/40 ml-10" onClick={() => router.push("/ourblog")}>Ourblog</button>
         <button className="p-3 w-24  bg-white shadow-lg shadow-indigo-500/40  text-purple-800 rounded-md ml-10" onClick={() => router.push("/medeelel")}>Medeelel</button>
         
    </div>
    
    
  )

}
  