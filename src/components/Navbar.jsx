import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 py-4 px-6 flex justify-between items-center sticky top-0 z-10">
      <Link
        to="/"
        className="text-2xl font-bold text-red-500 flex items-center gap-2"
      >
        🎬 MovieExplorer
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-red-400 transition">
          Home
        </Link>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}
