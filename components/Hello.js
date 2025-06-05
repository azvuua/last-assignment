import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Lab3() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
    
                const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
                const instrument = await fetch("https://mongol-api-rest.vercel.app/instruments");
                const history = await fetch("https://mongol-api-rest.vercel.app/historicaltools");
                const group = await fetch("https://mongol-api-rest.vercel.app/ethnicgroups");
                const province = await fetch("https://mongol-api-rest.vercel.app/provinces");
                const figure = await fetch("https://mongol-api-rest.vercel.app/historicalfigures");
                const tourist = await fetch("https://mongol-api-rest.vercel.app/touristattractions");
                

    
                const result = await response.json();        
                const instrumentData = await instrument.json();        
                const historical = await history.json();        
                const groups = await group.json();        
                const provinc = await province.json();        
                const figures = await figure.json();        
                const tourists = await tourist.json(); 
                setData((prev) => [...prev, ...result.clothes, ...instrumentData.instruments, ...historical.historicalTools, ...groups.ethnicGroups, ...provinc.provinces, ...figures.historicalFigures, ...tourists.touristAttractions]);
    
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    
    const filtered = data?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
);
console.log(filtered);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Clothes</h1>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search items..."
                    className="border p-2 mb-2 text-gray-700 rounded w-full max-w-xs" />

                {filtered.length === 0 ? (
                    <p className="text-gray-700 font-bold items-center flex justify-center mt-4">Baihgui</p>
                ) : null}

            </div>

            {loading && <p className="text-center text-gray-500">Loading...</p>}

            <div className="h-[81vh] overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filtered?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >

                        <img
                            src={item.images ||  '/ion.png'}
                            alt={item.name}
                            width={500}
                            height={192}
                            className="w-full h-48 object-cover text-gray-800"
                        />

                        <div className="p-4 text-gray-700">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                            <p className="text-gray-600 text-sm">{item.description || "No description available."}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
