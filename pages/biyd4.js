import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const [click, setclick] = useState(true);
    const [ner, setNer] = useState(false);
    let a = "Azzaya";
    const router = useRouter();
    
    return(
        <div className="flex">
              <button
        onClick={() => router.push("/frontPg")} 
        className="absolute top-5 left-5 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
      >
        Back
      </button>
      <div className=""> 
            

            <button className="mt-64 ml-96 p-3  flex  rounded-lg bg-blue-400 cursor-pointer" onClick={ () => setNer('ohio')}>
                click me
                <p>
                    {ner == true ? "ohio" : ""}
                </p>
               
            </button>
            <button className="ml-96 mt-4 p-3 bg-red-700 rounded-lg pl-3.5 pr-3.5"  onClick={ () => setNer("")}>
                remove
            </button>
            
        </div> 
        <div className="pt-12"><p className="ml-36 mt-64"> {ner}</p></div>
        </div>
        
    )

}