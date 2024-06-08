import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { sampleTrips } from "../constants/sampleTrips";

const Home = () => {
  const { logout } = useContext(AuthContext);

  

  return (
    <div className="min-h-screen bg-[#01AFD1] p-6 relative">
      <button
        onClick={logout}
        className="absolute top-4 right-4 bg-[#01AFD1] hover:bg-[#528f9b] text-white font-bold py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#528f9b]"
        aria-label="Logout"
      >
        Logout
      </button>

      <div
        className={`bg-white p-8 rounded-lg shadow-lg mb-12 max-w-4xl mx-auto transition-transform duration-500`}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Welcome to Wander On
          </h1>
          <p className="text-gray-700 mt-3 text-lg">
            Global Community For Travelers
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Popular Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleTrips.map((trip, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform-gpu hover:scale-105"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800">{trip.title}</h3>
              <p className="text-gray-600 mt-3">{trip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
