import { fetchSinglePost, fetchPosts } from "@/services/hygraphApi";
import PostDetails from "@/components/postDetails";
import Author from "@/components/author";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchSinglePost(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-2 lg:px-6 pb-12">
      <h1 className="text-3xl text-bold text-center p-6">{post.titulo}</h1>
      <PostDetails conteudo={post.conteudo.html} />
      <Author
        name={post.autor.nome}
        photoUrl={post.autor.foto.url}
        bio={post.autor.bio}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
