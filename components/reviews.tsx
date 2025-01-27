import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    imageUrl: "https://picsum.photos/seed/50/800/600",
  },
  {
    id: 2,
    title: "Redemption",
    imageUrl: "https://picsum.photos/seed/70/800/600",
  },
  {
    id: 3,
    title: "The Godfather",
    imageUrl: "https://picsum.photos/seed/80/800/600",
  },
  {
    id: 4,
    title: "The Dark Knight",
    imageUrl: "https://picsum.photos/seed/90/800/600",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    imageUrl: "https://picsum.photos/seed/99/800/600",
  },
];

export default function Reviews() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">
        Últimas críticas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.slice(0, 6).map((movie) => (
          <Link
            href={`criticas/${movie.title.trim()}`}
            key={movie.id}
            className="flex flex-col items-center justify-between"
          >
            <Image
              priority
              src={movie.imageUrl}
              alt={movie.title}
              width={300}
              height={400}
              className="min-h-[136px] grow object-cover rounded-xl transition hover:invert shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />
            <p className="mt-2 text-center font-medium">{movie.title}</p>
          </Link>
        ))}
        <Link
          href="/todos-os-filmes"
          className="flex flex-col hover:text-black items-center justify-center rounded-xl shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out border-white border-2"
        >
          <p className="text-xl font-bold">Ver mais</p>
          <p className="text-sm text-gray-600">Todos as críticas</p>
        </Link>
      </div>
    </div>
  );
}
