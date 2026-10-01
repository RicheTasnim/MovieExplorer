import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { fetchShows, searchShows } from "../services/api";

export default function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load initial shows
  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchShows();
      setMovies(data.slice(0, 24)); // 24 shows
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      loadMovies();
      return;
    }
    setLoading(true);
    try {
      const results = await searchShows(searchQuery);
      setMovies(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto p-6">
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mb-8 flex flex-col sm:flex-row gap-3 w-full"
        >
          <input
            type="text"
            placeholder="🔍 Search for a movie or show title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer whitespace-nowrap"
          >
            Search
          </button>
        </form>

        {/* Movie Grid */}
        {loading ? (
          <p className="text-center text-gray-400 py-12">Loading movies...</p>
        ) : movies.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            No movies found. Try another search!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal Overlay */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </div>
  );
}
