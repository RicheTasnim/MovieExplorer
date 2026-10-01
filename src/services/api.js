const BASE_URL = "https://api.tvmaze.com";

// Fetch all shows/movies
export const fetchShows = async () => {
  const response = await fetch(`${BASE_URL}/shows`);
  if (!response.ok) throw new Error("Failed to fetch shows");
  return response.json();
};

// Search by title
export const searchShows = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`,
  );
  if (!response.ok) throw new Error("Failed to search shows");
  const data = await response.json();

  // the show objects
  return data.map((item) => item.show);
};
