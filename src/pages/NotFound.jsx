import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-9xl font-bold text-blue-500">4</h1>
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 animate-spin">
              <svg
                className="w-full h-full text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a8.12 8.12 0 00-6.063 2.559A8.12 8.12 0 004.354 12m15.292 0a8.12 8.12 0 00-2.559-6.063A8.12 8.12 0 0012 4.354M12 19.646a8.12 8.12 0 006.063-2.559 8.12 8.12 0 002.559-6.063M4.354 12a8.12 8.12 0 012.559 6.063A8.12 8.12 0 0012 19.646"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-9xl font-bold text-blue-500">4</h1>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-800">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
