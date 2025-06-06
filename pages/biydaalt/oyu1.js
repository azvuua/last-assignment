import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ArkhangaiDayPLan() {
    const router = useRouter();
    const [selected, setSelected] = useState('shiljilt2');

    return (
        <div className="h-screen bg-white flex flex-col" >
            <div className="relative "  onClick={() => router.push("/biydaalt/page1")}>
                <img 
                    src="https://farandawayadventures.com/wp-content/uploads/2020/12/mongolia-introduction.png"
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover rounded-b-3xl"
                />
                <div className="absolute top-4 left-4 " onClick={() => router.push("/biydaalt/page1")}>
                    <img 
                       src='/ep_back.png'
                    />
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

            <div className="flex flex-col space-y-6 px-4 mt-16 pt-6 pb-4 overflow-y-auto">
            <div className="relative pl-4" onClick={() => setSelected('shiljilt1')}>
    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#bbcc96]"></div>
    <div className={`ml-4 p-4 rounded-2xl shadow flex items-center ${selected === 'shiljilt1' ? 'bg-[#bbcc96] text-white' : 'bg-white text-black'}`}>
    <img src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png" width={24} height={24} alt="Drive Icon" className={`mr-4 ${selected === 'shiljilt1' ? 'invert' : ''}`}/>
        <div>
            <h2 className={`text-sm ${selected === 'shiljilt1' ? 'text-white text-xl font-semibold' : 'text-gray-500 text-xl font-semibold'}`}>Drive To Arkhangai</h2>
            <p className={`text-sm ${selected === 'shiljilt1' ? 'text-white' : 'text-gray-400'}`}>Starting from</p>
            <p className={`text-sm ${selected === 'shiljilt1' ? 'text-white text-xl font-bold' : 'text-gray-500 text-xl font-bold  '}`}>$99.99</p>
        </div>
    </div>
</div>

                <div className="relative pl-4" onClick={() => setSelected('shiljilt2')}>
    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#bbcc96]"></div>
    <div className={`ml-4 p-4 rounded-2xl shadow flex items-center ${selected === 'shiljilt2' ? 'bg-[#bbcc96] text-white' : 'bg-white text-black'}`}>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/face-monochrome-icon/calendar-249.png" width={24} height={24}  className={`mr-4 ${selected === 'shiljilt2' ? 'invert' : ''}`}/>
        <div>
            <h2 className={`text-sm ${selected === 'shiljilt2' ? 'text-white text-xl font-semibold' : 'text-gray-500 text-xl font-semibold'}`}>Arkhangai Resort</h2>
            <p className={`text-sm ${selected === 'shiljilt2' ? 'text-white' : 'text-gray-400'}`}>Starting from</p>
            <p className={`text-sm ${selected === 'shiljilt2' ? 'text-white text-xl font-bold' : 'text-gray-500 text-xl font-bold  '}`}>$299.99</p>
        </div>
    </div>
</div>


<div className="relative pl-4" onClick={() => setSelected('shiljilt3')}>
    <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-[#bbcc96]"></div>
    <div className={`ml-4 p-4 rounded-2xl shadow flex items-center ${selected === 'shiljilt3' ? 'bg-[#bbcc96] text-white' : 'bg-white text-black'}`}>
    <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" width={24} height={24} alt="Tour Icon"  className={`mr-4 ${selected === 'shiljilt3' ? 'invert' : ''}`}/>
        <div>
            <h2 className={`text-sm ${selected === 'shiljilt3' ? 'text-white text-xl font-semibold' : 'text-gray-500 text-xl font-semibold'}`}>Tour Of Arkhangai</h2>
            <p className={`text-sm ${selected === 'shiljilt3' ? 'text-white' : 'text-gray-400'}`}>Starting from</p>
            <p className={`text-sm ${selected === 'shiljilt3' ? 'text-white text-xl font-bold' : 'text-gray-500 text-xl font-bold  '}`}>$199.99</p>
        </div>
    </div>
</div>
            </div>

            <div className="p-4 mt-32   ">
                <button className="w-full py-3 bg-[#bbcc96] text-white rounded-2xl text-lg  font-medium" onClick={() => router.push("/biydaalt/book")}>
                    Next
                </button>
            </div>
        </div>
    );
}
