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
                <div className='bg-white'>
                    <p className="text-xl mt-10  [color:#bbcc96] text-gray-500">Hi, Alex</p>
                    <h1 className="text-4xl text-black font-bold">Good <br></br> morning!</h1>
                </div>
                
            </header>

            <div className="grid grid-cols-4 gap-2 text-center text-sm p-2 mt-4">
                <div className='flex flex-col items-center text-gray-400 gap-2 justify-center'><img src='/planr.png'></img>Flight</div>
                <div className='flex flex-col items-center text-gray-400 gap-2 justify-center'><img src='/hotel.png'></img>Hotel</div>
                <div className='flex flex-col items-center text-gray-400 gap-2 justify-center'><img src='/location.png'></img>Location</div>
                <div className='flex flex-col items-center text-gray-400 gap-2 justify-center'><img src='/car.png'></img>Car Hire</div>
            </div>

            <main className="flex-1 p-4 overflow-y-auto bg-white">
                <section className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-gray-600 text-lg">Recommendations</h2>
                        <a className="[color:#bbcc96] text-sm" href="#">See all</a>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">Prices include all fees</p>

                    <div className="mt-4 space-y-4">
                        {[
                            {
                                title: 'Shargaljuut, Mongolia',
                                image: '/mountain.png',
                                rating: 4.32,

                                distance: '312 km',
                                date: 'May 16-22',
                                price: '$80 for 3 nights'
                            },
                            {
                                title: 'Gobi, Mongolia',
                                image: '/desert.png',
                                rating: 5.00,
                                distance: '312 km',
                                date: 'May 16-22',
                                price: '$80 for 3 nights'
                            },
                            {
                                title: 'Hushuu, Mongolia',
                                image: '/tsonjin.png',
                                rating: 5.00,
                                distance: '100 km',
                                date: 'May 10-22',
                                price: '$80 for 1 night'
                            },
                            {
                                title: 'Bogd Mountain, Mongolia',
                                image: '/bogd.png',
                                rating: 4.32,

                                distance: '312 km',
                                date: 'May 16-22',
                                price: '$80 for 3 nights'
                            }
                        ].map((item, i) => (
                            <div onClick={() => router.push("/biydaalt/oyu1")} key={i} className="bg-white shadow rounded-xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-3">
                                    <h3 className="font-semibold text-gray-700">{item.title}</h3>
                                    {item.distance && (
                                        <p className="text-sm text-gray-400">{item.distance} away</p>
                                    )}
                                    {item.date && <p className="text-sm text-gray-400">{item.date}</p>}
                                    {item.price && <p className="text-sm font-medium text-gray-400">{item.price}</p>}
                                    <div className='flex flex-row'> <img className='h-3 mt-1.5 mr-1' src='/vector.png'></img> 
                                    <p className="text-sm mt-1 text-yellow-500"> {item.rating}</p> </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="h-24 flex justify-around items-center  [background-color:#bbcc96] text-sm">
                <div className="text-center"><img src='/home.png'></img></div>
                <div onClick={() => router.push("/biydaalt/oyu")} className="text-center"><img src='/calendar.png'></img></div>
                <div onClick={() => router.push("/biydaalt/wishlist")}  className="text-center"><img src='/like.png'></img></div>
                <div onClick={() => router.push("/biydaalt/profile")} className="text-center"><img src='/profile.png'></img></div>
            </footer>

        </div>
    );
}
