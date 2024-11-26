interface PostsType {
  data: {
    postsConnection: {
      edges: [
        {
          node: {
            autor: {
              bio: string;
              nome: string;
              id: string;
              foto: {
                url: string;
              };
            };
            createdAt: string;
            slug: string;
            titulo: string;
            resumo: string;
            imagemDestaque: {
              url: string;
            };
            categoria: [
              {
                nome: string;
                slug: string;
              }
            ];
          };
        }
      ];
    };
  };
}

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
