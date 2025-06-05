import Image from 'next/image';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div className="h-screen bg-white flex flex-col">
            <header className="  bg-white items-center pl-8  pr-8">
                <div className="flex justify-between mt-8 bg-white">
                    <button> <img src="/search.png"></img></button>
                    <button><img src="/notification.png"></img></button>
                </div>
            </header>

            <main className="flex-1 w-full overflow-y-auto bg-white">
                <section className="p-4 mt-2 flex justify-end">
                    <button className='p-2 px-6 rounded-full text-white [background-color:#bbcc96]'>
                        Edit
                    </button>
                </section>
                <section className='p-4'>
                    <p className='font-bold p-2  text-black text-3xl'>Wishlists</p>
                    <div className='mt-2'><img src='/wishlist.png'></img></div>
                    <p className=' text-black'>Recently viewed</p>
                    <p className='text-xs text-gray-400'>1 week ago</p>
                </section>

            </main>

            <footer className="h-24 flex justify-around items-center  [background-color:#bbcc96] text-sm">
                <div onClick={() => router.push("/biydaalt/page1")} className="text-center"><img src='/greenhome.png'></img></div>
                <div className="text-center"><img src='/calendar.png'></img></div>
                <div className="text-center"><img src='/whiteheart.png'></img></div>
                <div className="text-center"><img src='/profile.png'></img></div>
            </footer>

        </div>
    );
}
