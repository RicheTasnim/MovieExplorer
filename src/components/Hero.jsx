import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-24 px-6 text-center text-white flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        DISCOVER MOVIES & SHOWS
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Explore and discover your favorite movies and TV series from around the
        world with real-time details and ratings.
      </p>
      <Link
        to="/movies"
        className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition duration-200 transform hover:scale-105"
      >
        Explore Now
      </Link>
    </div>
  );
}
