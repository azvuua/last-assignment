import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className='bg-white  w-full h-screen'>
            <div className='flex p-20 justify-center'><div className=" h-12 w-48  border-2 border-gray-100 rounded-l-lg flex justify-center items-center space-x-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/250px-Flag_of_Mongolia.svg.png" className="w-5 h-5 rounded-full"></img>
                <span className='text-gray-300 '>Монгол</span>
            </div>
                <div className="flex h-12 w-48 bg-gray-100  rounded-r-lg justify-center items-center space-x-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/250px-Flag_of_Mongolia.svg.png" className="w-5 h-5 rounded-full"></img>
                    <span className='text-black '>English</span>
                </div></div>
            <div className='h-20'></div>
            <div className="bg-gray-100  rounded-lg h-[64vh] shadow-md p-4 w-full max-w-sm mx-auto">


                <form className="space-y-4">
                    <div>
                        <label className="text-sm flex justify-center p-8     text-gray-700">Enter your phone number to login</label>
                        <div className="flex items-center border rounded-lg bg-white mt-1">
                            <span className="flex items-center px-2 border-r gap-3 bg-gray-100 text-gray-600 text-sm">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/250px-Flag_of_Mongolia.svg.png" className="w-10 h-5 "></img>
                                +976
                            </span>
                            <input
                                type="text"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="flex-1  text-gray-400 rounded-lg h-12 px-3 py-2 "
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 border text-gray-400 rounded-lg px-3 py-2 "
                        />
                    </div>

                    <div
                        onClick={() => router.push("/biydaalt/page1")} 
                        className="w-full bg-green-500 text-white py-3 rounded-lg items-center justify-center flex"
                    >
                        Log In
                    </div>

                    <div className="text-center">
                        <a className="text-sm text-green-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <div className='h-0.5 rounded-lg w-full bg-gray-300'></div>
                    <div
                        onClick={() => router.push("/biydaalt/yes2")} 
                        className="w-full  bg-red-200 text-white py-3 rounded-lg  hover:bg-red-300 flex items-center justify-center"

                    >
                        Create new account
                    </div>
                </form>
            </div>
        </div>
    );
}