interface PosterArt {
  url: string;
  width: number;
  height: number;
}

interface Images {
  "Poster Art": PosterArt;
}

export interface FeedItem {
  title: string;
  alternateTitle?: string;
  description?: string;
  programType: "series" | "movie";
  images?: Images;
  releaseYear?: number;
  path?: string;
}
export interface Feed {
  total: number;
  entries: FeedItem[];
}
