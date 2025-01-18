"use client";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";
const imageSize = "w500";
const tmdbImageURL = (posterPath: string) =>
  `https://image.tmdb.org/t/p/${imageSize}/${posterPath}`;

type Movie = {
  title: string;
  releaseDate: string;
  poster: string;
  review: string;
};

export default function MovieList({ movies }: { movies: Movie[] }) {
  const autoPlayInterval = 3000;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(5);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateVisibleItems = (): void => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth; // Largura do container
      const itemWidth = 160; // Largura fixa de cada item
      const items = Math.floor(containerWidth / itemWidth); // Quantos itens cabem
      setVisibleItems(items);
    }
  };

  const brazilianDate = (releaseDate: string) => {
    const date = new Date(releaseDate);
    const brazilianFormat = date.toLocaleDateString("pt-BR");
    return brazilianFormat;
  };

  // Avançar para a próxima imagem
  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movies.length - visibleItems ? prevIndex + 1 : 0
    );
  };

  // Voltar para a imagem anterior
  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movies.length - visibleItems
    );
  };

  useEffect(() => {
    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);
    return () => window.removeEventListener("resize", calculateVisibleItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval]);

  return (
    <section className="mb-14 -mt-6">
      <h2 className="text-black text-xl">Filmes populares</h2>
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <button
          onClick={handlePrev}
          className="absolute  z-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800"
        >
          {"<"}
        </button>
        <div
          className="flex transition-transform gap-4 duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 159.2}px)`,
          }}
        >
          {movies.map((movie, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 w-36 bg-gray-200 rounded overflow-hidden"
              >
                <Image
                  className="w-full object-cover"
                  width={500}
                  height={500}
                  alt=""
                  src={tmdbImageURL(movie.poster)}
                />
                <p className="text-center border-black border-x-4 text-black text-xs">
                  {brazilianDate(movie.releaseDate)}
                </p>
                <span className="text-bold flex justify-center w-full bg-black text-white">
                  {Number(movie.review).toFixed(1)}
                </span>
              </div>
            );
          })}
          <div className="flex-shrink-0 w-36 bg-gray-200 rounded overflow-hidden">
            <Image
              className="w-full object-cover"
              width={500}
              height={500}
              alt=""
              src={tmdbImageURL(movies[0].poster)}
            />
            <p className="text-center border-black border-x-4 text-black text-xs">
              {brazilianDate(movies[0].releaseDate)}
            </p>
            <span className="text-bold flex justify-center w-full bg-black text-white">
              {Number(movies[0].review).toFixed(1)}
            </span>
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800 z-10 disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
