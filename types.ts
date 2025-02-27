export type Author = {
  bio: string;
  nome: string;
  id: string;
  foto: {
    url: string;
  };
};

export interface PostsType {
  data: {
    postsConnection: {
      edges: [
        {
          node: {
            autor?: Author;
            createdAt: string;
            slug: string;
            titulo: string;
            resumo: string;
            imagemDestaque: {
              url: string;
              width: number;
              height: number;
            };
            categoria: CategoryType[];
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
  nome?: string;
  slug?: string;
}

export type Movie = {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
};
