import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700 py-4 px-6 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-bold text-red-500 flex items-center gap-2"
        >
          🎬 MovieExplorer
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-red-400 transition font-medium">
            Home
          </Link>
          <Link
            to="/movies"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer"
          >
            Explore Movies
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer text-2xl"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-700">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-400 transition font-medium px-2 py-1"
          >
            Home
          </Link>
          <Link
            to="/movies"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition text-center cursor-pointer"
          >
            Explore Movies
          </Link>
        </div>
      )}
    </nav>
  );
}
