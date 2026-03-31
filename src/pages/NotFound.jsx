// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white px-4 text-center">

            {/* Creative 404 Illustration */}
            <div className="text-blue-600 mb-6 animate-bounce">
                <Plane size={80} />
            </div>

            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-6">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <Link
                to="/"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
                ✈️ Back to Home
            </Link>

            <p className="mt-10 text-gray-400">
                Maybe check the navigation bar above to explore our travel destinations.
            </p>
        </div>
    );
}