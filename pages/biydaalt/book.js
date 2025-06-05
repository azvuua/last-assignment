import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-white p-6">
            <div className="flex justify-between items-center max-w-4xl mx-auto space-x-4 sm:space-x-8">
                <img
                    src="/ep_back.png"
                    className="w-auto h-auto max-w-[50px]"
                />
                <img
                    src="/notification.png"
                    className="w-auto h-auto max-w-[50px]"
                />
            </div>
            <div className="flex justify-between mt-5">
                <div className="w-[150px] break-all font-bold text-black text-3xl">Book Your Flight</div>
                <div className="w-10 h-10 rounded-lg mt-3 bg-[#BBCC95]"> <img
                    src="/plaane.png"
                /></div>
            </div>
            <div className="flex space-x-20 mt-10 justify-center">
                <div className="bg-[#BBCC95] text-white w-40 flex justify-center h-10 font-medium px-4 py-2 rounded-lg">One-way</div>
                <div className="text-gray-500 font-medium w-40 flex justify-center px-4 py-2 rounded-full hover:bg-gray-100">Return</div>
            </div>
            <div> <p class=" mt-14 ml-5   text-gray-300">From</p>
                <div class="w-full mt-1 border border-[#BBCC95] rounded-lg items-center justify-between px-4 py-2 mb-4 h-14 flex">
                    <div className="flex items-center"><p className="text-green-400 text-3xl">•</p> <p className="text-black font-semibold ml-3">UB</p></div>
                    <img
                        src="/menuu.png"
                    />
                </div>
            </div>
            <div> <p class="mt-7 ml-5   text-gray-300">To</p>
                <div class="w-full mt-1 border border-[#BBCC95] rounded-lg items-center justify-between px-4 py-2 mb-4 h-14 flex">
                    <div className="flex items-center"><p className="text-blue-300 text-3xl">•</p> <p className="text-black font-semibold ml-3">Shargaljuult</p></div>
                    <img
                        src="/menuu.png"
                    />
                </div></div>
            <div> <p class="mt-7 ml-5   text-gray-300">Date</p>
                <div class="w-full mt-1 border border-[#BBCC95] rounded-lg items-center justify-between px-4 py-2 mb-4 h-14 flex">
                    <p className="text-black font-semibold">17th Oct - 21st Oct</p>
                    <img
                        src="/menuu.png"

                    />
                </div></div>
            <div className="flex mt-10 justify-between">
                <div class="w-60 mt-1 border border-[#BBCC95] rounded-lg px-4 py-2 mb-4 h-[90px] ">
                    <p className="text-gray-300">Class</p>
                    <div className="flex justify-between"> <div className="flex items-center"><p className="text-black font-semibold">Shargaljuult</p></div>
                        <img
                            src="/menuu.png"
                        />
                    </div></div>
                <div class="w-[120px] mt-1 border border-[#BBCC95] rounded-lg px-4 py-2 mb-4 h-[90px] ">
                    <p className="text-gray-300">Passenger</p>
                    <div className="flex justify-between"> <div className="flex items-center"><p className="text-black font-semibold">1</p></div>
                        <img
                            src="/menuu.png"
                        />
                    </div></div>
            </div>
            <div onClick={() => router.push("/biydaalt/confirmed")} className="flex justify-center"><button class="mt-10 bg-[#77A480] text-white  rounded-full  w-80 h-[50px]">
                Book now
            </button></div>

        </div>
    );
}