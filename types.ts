export interface PostsType {
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

export interface SinglePostsType {
  data: {
    post: {
      autor: {
        bio: string;
        foto: {
          url: string;
        };
        nome: string;
      };
      conteudo: {
        html: string;
      };
      titulo: string;
    };
  };
}

export interface CategoryType {
  nome: string;
  slug: string;
}
