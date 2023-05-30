import React, { useState, useEffect } from "react";

const Table = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const url = "http://localhost:5000/api/userdetails";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="relative">
          <select
            className="block w-full border border-gray-300 rounded-md py-2 px-3 bg-white text-sm leading-tight focus:outline-none focus:border-blue-500"
            defaultValue=""
          >
            <option value="">All</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 00-6 6c0 1.993 1.006 3.762 2.537 4.885l.159.106A1 1 0 009 16h2a1 1 0 00.304-1.934l-.159-.106A4 4 0 1110 4zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add User
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
              Email
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {userData.map((user) => (
            <tr key={user._id}>
              <td className="w-1/3 text-left py-3 px-4">{user.name}</td>
              <td className="w-1/3 text-left py-3 px-4">{user.email}</td>
              <td className="text-left py-3 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
