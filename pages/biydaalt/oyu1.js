import { useRouter } from 'next/router';

export default function ArkhangaiDayPLan() {
    const router = useRouter();

    return (
        <div className="h-screen bg-white flex flex-col" >
            <div className="relative "  onClick={() => router.push("/biydaalt/page1")}>
                <img 
                    src="https://farandawayadventures.com/wp-content/uploads/2020/12/mongolia-introduction.png"
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover rounded-b-3xl"
                />
                <div className="absolute top-4 left-4">
                    <button onClick={() => router.back()} className="text-white">
                        ←
                    </button>
                </div>
                <div className="absolute top-4 right-4">
                    <div className="bg-white p-2 rounded-xl shadow-md">
                        ❤️
                    </div>
                </div>
                <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm">Countryside</p>
                    <h1 className="text-white text-3xl font-bold">Arkhangai</h1>
                </div>
            </div>

            <div className="flex flex-col space-y-6 px-4 pt-6 pb-4 overflow-y-auto">
                <div className="relative pl-4">
                    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-green-600"></div>
                    <div className="ml-4 p-4 bg-white rounded-2xl shadow flex items-center">
                        <img src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png" width={24} height={24} alt="Drive Icon" className="mr-4" />
                        <div>
                            <h2 className="font-semibold text-lg">Drive to Arkhangai</h2>
                            <p className="text-sm text-gray-400">Starting from</p>
                            <p className="text-lg font-bold">$99.99</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-4">
                    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-green-200"></div>
                    <div className="ml-4 p-4 bg-[#bbcc96] rounded-2xl shadow text-white flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJyy0pmQKfj9wJCiTGaEw7ukErxVjE3Z8fA&s" width={24} height={24} alt="Resort Icon" className="mr-4 invert" />
                        <div>
                            <h2 className="font-semibold text-lg">Arkhangai Resort</h2>
                            <p className="text-sm">Starting from</p>
                            <p className="text-lg font-bold">$299.99</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-4">
                    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-green-100"></div>
                    <div className="ml-4 p-4 bg-white rounded-2xl shadow flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" width={24} height={24} alt="Tour Icon" className="mr-4" />
                        <div>
                            <h2 className="font-semibold text-lg">Tour of Arkhangai</h2>
                            <p className="text-sm text-gray-400">Starting from</p>
                            <p className="text-lg font-bold">$199.99</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <button className="w-full py-3 bg-[#bbcc96] text-white rounded-2xl text-lg font-medium" onClick={() => router.push("/biydaalt/book")}>
                    Next
                </button>
            </div>
        </div>
    );
}