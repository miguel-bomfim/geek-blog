export const fetchMovieDetails = async () => {
  const ENDPOINT = "https://api.themoviedb.org/3/movie/11";

  const response = await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const movieDetails = await response.json();
  return movieDetails; // Retorna os detalhes do filme
};
