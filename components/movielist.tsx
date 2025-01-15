//const imageSize = "w500";
// const tmdbImagesURL = `https://image.tmdb.org/t/p/${imageSize}`;

type Movie = {
  title: string
  releaseDate: string
  poster: string
  review: string
}

export default function MovieList({ movies }: { movies: Movie[] }) {
  return <p className="text-black hidden">{movies[0].title}</p>;
}
