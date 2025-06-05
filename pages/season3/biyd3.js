import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const [bgColor, setBgColor] = useState("white");
    const [showButtons, setShowButtons] = useState(true);
    const router = useRouter();

    const handleColorChange = (color) => {
        setBgColor(color);
        setShowButtons(false);
    };

    const handleReset = () => {
        setBgColor("white");
        setShowButtons(true);
    };

    const handleBackToFile = () => {
        router.push("/biyd1"); 
    };

    return (
        <div className="h-screen flex items-center justify-center relative" style={{ backgroundColor: bgColor }}>
            <button 
                className="absolute  top-5 left-5 px-6 py-2 bg-red-500 text-white rounded"
                onClick={() => router.push("/")} 
            >
                Back
            </button>

            {showButtons ? (
                <div className="space-x-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("red")}>Red</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("green")}>Green</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("blue")}>Blue</button>
                </div>
            ) : (
                <div className="flex space-x-4">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={handleReset}>Back</button>
                </div>
            )}
        </div>
    );
}
