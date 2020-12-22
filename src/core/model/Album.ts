import { Artist } from "./Artist";
import { Image } from "./Image";
import { PaginigObject } from "./PaginigObject";
import { Track } from "./Track";
import { Copyright, ExternalIDS, ExternalUrls } from "./Search";


export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: PaginigObject<Track>;
  type: string;
  uri: string;
}
