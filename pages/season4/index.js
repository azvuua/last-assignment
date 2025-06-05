"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Lab1 from "components/Lab1"; 
import Hello from "components/Hello";

const sideBar = [
    { name: "Лаб 2", url: "Lab1" },
    { name: "Лаб 3", url: "/lab3" },
];

export default function Lab2() {
    const [ner, setNer] = useState("");
    const [page, setPage] = useState("Lab1");
    const router = useRouter();

    return (
        <div className="flex gap-x-4 bg-white p-4">
            {/* Left sidebar */}
            <div className="w-[20%] h-[96vh] p-8 rounded-xl shadow-2xl flex flex-col bg-white items-center">
                <img
                    src="https://images.genius.com/1d343a4621e3225c87aad445f0926e1d.953x953x1.jpg"
                    className="h-24 rounded-full w-24"
                    alt="Profile"
                />
                <p className="mt-4 text-2xl text-gray-600 font-bold">Azzaya</p>
                <div className="h-[60%] mt-8 w-full space-y-2 flex flex-col text-gray-500">
                    {sideBar.map((daalgavar, index) => (
                        <div
                            key={index}
                            className="p-2 rounded-lg flex items-center justify-center bg-white shadow-md cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => setPage(daalgavar.url)}
                        >
                            {daalgavar.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right content */}
            <div className="w-full">
                        {page === "Lab1" ? <Lab1 /> : <Hello />}

            </div>
        </div>
    );
}
