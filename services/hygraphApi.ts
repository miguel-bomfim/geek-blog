import { CategoryType, PostsType, SinglePostsType } from "../types";

export const fetchPosts = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API || "";
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Posts {
            postsConnection(last: 6) {
              edges {
                node {
                  autor {
                    bio
                    nome
                    id
                    foto {
                      url
                    }
                  }
                  createdAt
                  slug
                  titulo
                  resumo
                  imagemDestaque {
                    url
                  }
                  categoria {
                    nome
                    slug
                  }
                }
              }
            }
          }`,
    }),
  });
  const postsData: PostsType = await response.json();
  return postsData.data.postsConnection.edges;
};

export const fetchSinglePost = async (slug: string) => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API || "";
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query PostPage($slug: String!) {
        post(where: {slug: $slug}) {
          autor {
            bio
            foto {
              url
            }
            nome
          }
          conteudo {
            html
          }
          titulo
        }
      }`,
      variables: {
        slug,
      },
    }),
  });
  const postsData: SinglePostsType = await response.json();
  return postsData.data.post;
};

export const fetchCategories = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API || "";
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Categories {
        categorias {
          nome
          slug
        }
          }`,
    }),
  });
  const categoriesData: {
    data: {
      categorias: CategoryType[];
    };
  } = await response.json();
  return categoriesData.data.categorias;
};
