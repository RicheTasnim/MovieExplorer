// src/components/MovieModal.jsx
export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const { name, image, summary, rating, premiered, genres, language } = movie;
  const cleanSummary = summary
    ? summary.replace(/<[^>]*>?/gm, "")
    : "No description available.";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center p-4 z-50 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-800 rounded-2xl max-w-2xl w-full p-6 relative border border-gray-700 max-h-[90vh] overflow-y-auto cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold cursor-pointer"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={
              image?.original ||
              image?.medium ||
              "https://via.placeholder.com/210x295?text=No+Image"
            }
            alt={name}
            className="w-full md:w-48 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
            <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-300">
              <span className="bg-gray-700 px-2 py-1 rounded">
                ⭐ {rating?.average || "N/A"}
              </span>
              <span className="bg-gray-700 px-2 py-1 rounded">
                📅 {premiered || "N/A"}
              </span>
              {language && (
                <span className="bg-gray-700 px-2 py-1 rounded">
                  🗣️ {language}
                </span>
              )}
            </div>
            {genres?.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1">
                {genres.map((g) => (
                  <span
                    key={g}
                    className="bg-red-600/30 text-red-400 text-xs px-2 py-1 rounded-full"
                  >
                    {g}
                  </span>
                ))}
              </div>
            )}
            <p className="text-gray-300 text-sm leading-relaxed">
              {cleanSummary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
