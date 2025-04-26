export interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  articles: ArticleResponse[];
}

export interface ArticleResponse {
  source: { id: string | null; name: string };
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}
