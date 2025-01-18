import Link from "next/link";
import { Card } from "@/components/ui/card";
import MovieList from "@/components/movielist";
import { fetchCategoryPosts } from "@/services/hygraphApi";
import { fetchMovieDetails } from "@/services/theMovieDB";

export default async function CategoryPosts({
  params,
}: {
  params: { slug: string };
}) {
  const categoryPosts = await fetchCategoryPosts(params.slug);
  const movies = await fetchMovieDetails();

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a] text-white">
      <main>
        <section className="py-12 px-8 bg-[#F2F2F2]">
          {params.slug.includes("filmes") && <MovieList movies={movies} />}
          <div className="container px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">
              {categoryPosts[0].node.categoria[0].nome}
            </h2>
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-start-1 col-end-3 flex flex-col gap-8">
                {categoryPosts.map((post, i) => (
                  <Card key={i} className="relative overflow-hidden group">
                    <img
                      src={post.node.imagemDestaque.url}
                      alt={`Imagem do Artigo ${i}`}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-110 h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-bold mb-2 text-white text-2xl">
                        {post.node.titulo}
                      </h3>
                      <p className="text-gray-200 mb-4 text-base">
                        {post.node.resumo}
                      </p>
                      <Link
                        href={`/post/${post.node.slug}`}
                        className="mt-4 bg-[#d7263d] px-6 py-3 hover:bg-[#b51d31] transition-colors"
                      >
                        Ler mais
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="max-md:hidden flex flex-col gap-6">
                <div className="w-full rounded-xl h-[400px] bg-blue-100 opacity-50"></div>
                <div className="w-full rounded-xl h-[400px] bg-blue-200 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
