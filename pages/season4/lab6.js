'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function UserDashboard() {
  // States for user form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  // States for users data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  // Fetch users data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/users');
        const result = await response.json();
        setData(result || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter users based on search input
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle user form submission
  const handleCreateUser = () => {
    alert(`Creating user: ${firstName} ${lastName}`);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/createUsers', {
        first_name: firstName,
        last_name: lastName,
        age: parseInt(age) || 30,
        email: 'test@gmail.com', // Replace with actual user input if needed
      });
      console.log('User created:', firstName, lastName);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* User Form Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-4">User Form</h1>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 mb-2 w-full rounded text-gray-700"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 mb-2 w-full rounded text-gray-700"
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 mb-4 w-full rounded text-gray-700"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleCreateUser}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create User
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>

      {/* Clothes/User List Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 mb-6 border text-gray-700 border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.images?.[0] || 'https://via.placeholder.com/150'}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600 text-sm">
                  {item.description || 'No description available.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
