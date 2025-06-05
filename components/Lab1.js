import { useState, useEffect } from "react";
const data = [
    {
        id: 1,
        name: "Taranshan",
        color: "Yellow",
        price: "2m",
        image: "https://as2.ftcdn.net/v2/jpg/03/53/22/33/1000_F_353223372_RuYCkAeNmo7aeWChEAOEsZAY0kDkhFey.jpg",
        item: [
            {
                id: 1,
                name: "case",
                price: "50k",
            },
            {
                id: 1,
                name: "case",
                price: "50k",
            },
        ]
    },

    {
        id: 2,
        name: "Ysuui",
        color: "Yellow",
        price: "5m",
        image: "https://www.globaldownsyndrome.org/wp-content/uploads/2012/02/BrewerWeb.jpg",
        item: [
            {
                id: 1,
                name: "ring",
                price: "5k",
            }
        ]
    },

    {
        id: 3,
        name: "Temujin",
        color: "Brown",
        price: "4m",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqgt-c7wZYNfoGWAAtR7novGBfQgD0ds1tpY5GoPvoBZkHJunVLINgUqSMObNXvs1wB0&usqp=CAU",
        item: [
            {
                id: 1,
                name: "ring",
                price: "400k",
            }
        ]
    },

    {
        id: 4,
        name: "Bat",
        color: "Black",
        price: "5m",
        image: "https://statico.soapcentral.com/editor/2025/04/c9be3-17450004989781.jpg?w=640",
        item: [
            {
                id: 1,
                name: "pen",
                price: "52k",
            }
        ]
    },

    {
        id: 5,
        name: "Zaya",
        color: "White",
        price: "10m",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oBex_gwatjeJ1D1ZX3mVXEQujKe8qPYwzg&s",
        item: [
            {
                id: 1,
                name: "Gum",
                price: "51k",
            }
        ]
    },
    {
        id: 1,
        name: "Taranshan",
        color: "Yellow",
        price: "2m",
        image: "https://as2.ftcdn.net/v2/jpg/03/53/22/33/1000_F_353223372_RuYCkAeNmo7aeWChEAOEsZAY0kDkhFey.jpg",
        item: [
            {
                id: 1,
                name: "case",
                price: "50k",
            }
        ]
    },
    {
        id: 1,
        name: "Taranshan",
        color: "Yellow",
        price: "2m",
        image: "https://as2.ftcdn.net/v2/jpg/03/53/22/33/1000_F_353223372_RuYCkAeNmo7aeWChEAOEsZAY0kDkhFey.jpg",
        item: [
            {
                id: 1,
                name: "case",
                price: "50k",
            }
        ]
    },
    {
        id: 1,
        name: "Taranshan",
        color: "Yellow",
        price: "2m",
        image: "https://as2.ftcdn.net/v2/jpg/03/53/22/33/1000_F_353223372_RuYCkAeNmo7aeWChEAOEsZAY0kDkhFey.jpg",
        item: [
            {
                id: 1,
                name: "case",
                price: "50k",
            }
        ]
    },
    {
        id: 1,
        name: "Taranshan",
        color: "Yellow",
        price: "2m",
        image: "https://as2.ftcdn.net/v2/jpg/03/53/22/33/1000_F_353223372_RuYCkAeNmo7aeWChEAOEsZAY0kDkhFey.jpg",
        item: [
            {
                id: 1,
                name: "case",
                price: "50k",
            }
        ]
    },
]

const sideBar = [
    {
        name: "Lab1",
        url: "/season4/lab1"
    },
    {
        name: "Lab3",
        url: "/season4/lab3"
    }

]
export default function Lab1() {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredItems = data.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.item.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )

    );
    return (
        <>
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search items..."
                    className="border p-2 mb-2 text-gray-700 rounded w-full max-w-xs" />

                {filteredItems.length === 0 ? (
                    <p className="text-gray-700 font-bold items-center flex justify-center mt-4">Baihgui</p>
                ) : null}

            </div>
            <div className=" rounded-xl p-2 bg-white shadow-xl h-[90vh] overflow-auto w-full flex flex-col space-y-4">
                {filteredItems.map((person, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-4 flex flex-row items-center justify-between w-full"
                    >

                        <div className="flex items-center">
                            <img src={person.image} className="rounded-full w-12 h-12" />
                            <p className="text-gray-800 truncate w-24 ml-4 font-bold">{person.name}</p>
                        </div>


                        <div className="flex items-center gap-x-6">
                            <p className="text-blue-400 truncate w-24 font-sans">Color: {person.color}</p>
                            <p className="text-green-400 truncate w-24 font-bold">Price: {person.price}</p>

                            {person.item?.length > 0 && (
                                <div className="text-gray-500 text-sm">
                                    <h3 className="font-semibold">Items:</h3>
                                    <div className="truncate h-5">
                                        {person.item.map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                <p >Name: {item.name}, Price: {item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}