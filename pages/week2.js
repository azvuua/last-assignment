import { useState } from "react";

export default function Home() {
    const [bgColor, setBgColor] = useState("white");
    const [showButtons, setShowButtons] = useState(true);

    const handleColorChange = (color) => {
        setBgColor(color);
        setShowButtons(false);
    };

    const handleReset = () => {
        setBgColor("white");
        setShowButtons(true);
    };

    return (
        <div className="h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
            {showButtons ? (
                <div className="space-x-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("red")}>Red</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("green")}>Green</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleColorChange("blue")}>Blue</button>
                </div>
            ) : <button className="bg-gray-800 text-white px-4 py-2 rounded" onClick={handleReset}>Back</button>}
        </div>
    );
}
