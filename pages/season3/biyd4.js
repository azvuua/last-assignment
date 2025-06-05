import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const [ner, setNer] = useState("");
    const router = useRouter();
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-24">
            <button
                onClick={() => router.push("/")} 
                className="absolute top-5 left-5 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
                Back
            </button>
            
            <div className="flex flex-col items-center">
                <button 
                    className="mt-16 p-3 rounded-lg bg-blue-400 cursor-pointer text-white w-40 text-center"
                    onClick={() => setNer("ohio")}
                >
                    Click me
                </button>
                
                <button 
                    className="mt-4 p-3 bg-red-700 text-white rounded-lg w-40 text-center"
                    onClick={() => setNer("")}
                >
                    Remove
                </button>
            </div>
            
            <p className="mt-8 text-lg font-semibold">{ner}</p>
        </div>
    );
}