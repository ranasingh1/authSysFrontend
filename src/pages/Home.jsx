import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { sampleTrips } from "../constants/sampleTrips";

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-[#01AFD1] p-4 relative">
      <button
        onClick={logout}
        className="absolute top-6 right-6 bg-[#01AFD1] hover:bg-[#528f9b] text-white font-bold py-2 px-4 rounded-lg transition duration-200"
      >
        Logout
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md mb-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Wander On
          </h1>
          <p className="text-gray-600 mt-2">Global Community For Travelers</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Popular Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sampleTrips.map((trip, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">{trip.title}</h3>
              <p className="text-gray-600 mt-2">{trip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
