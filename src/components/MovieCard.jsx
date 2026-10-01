// src/components/MovieCard.jsx
export default function MovieCard({ movie, onSelect }) {
  const { name, image, rating, premiered } = movie;
  const year = premiered ? premiered.split("-")[0] : "N/A";

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between border border-gray-700 hover:border-gray-500 transition">
      <img
        src={
          image?.medium || "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-lg text-white truncate mb-2">{name}</h3>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
            <span>⭐ {rating?.average || "N/A"}</span>
            <span>📅 {year}</span>
          </div>
        </div>
        <button
          onClick={() => onSelect(movie)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
