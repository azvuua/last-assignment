import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/clothes"
                );
                const result = await response.json();
                setData(result || []);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    
    const filtered = data?.clothes?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
);
console.log(filtered);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Clothes</h1>
            <input
                type="text"
                placeholder="Search clothes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-1/2 px-4 py-2 mb-6 border text-gray-700 border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filtered?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={item.images[0] || "https://via.placeholder.com/150"}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-600 text-sm">{item.description || "No description available."}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
