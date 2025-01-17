import { Movie } from "../types";

const ENDPOINT = `https://api.themoviedb.org/3/movie/popular?language=pt-BR`;

export const fetchMovieDetails = async () => {
  const response = await fetch(ENDPOINT, {
    method: "GET",
    next: { revalidate: 60 },
    headers: {
      Authorization: `Bearer ${process.env.MOVIEDB_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const { results }: { results: Movie[] } = await response.json();

  const movies = results.map((movie) => ({
    title: movie.title,
    releaseDate: movie.release_date,
    poster: movie.poster_path,
    review: movie.vote_average,
  }));

  return movies;
};
