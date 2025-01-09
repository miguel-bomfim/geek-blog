import { CategoryType, PostsType, SinglePostsType } from "../types";
const HYGRAPH_ENDPOINT = process.env.HYGRAPH_API || "";

export const fetchPosts = async () => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Posts {
            postsConnection(orderBy: createdAt_DESC, first: 5) {
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

export const fetchCategoryPosts = async (slug: string) => {
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query CategoryPostsQuery($slug: String!) {
        postsConnection(where: {categoria_some: {slug: $slug}}) {
          edges {
            node {
              createdAt
              titulo
              slug
              imagemDestaque {
                url
              }
              resumo
              categoria {
                nome
              }
            }
          }
        }
      }`,
      variables: {
        slug,
      },
    }),
  });
  const categoryPosts: PostsType = await response.json();
  return categoryPosts.data.postsConnection.edges;
};
