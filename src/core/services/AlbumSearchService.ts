import axios from "axios";
import { Album } from "../model/Album";
import { AlbumsSearchResponse } from "../model/Search";
import { albumsMock } from "./albumsMock";

export class AlbumSearchService {

  constructor() {

  }


  searchAlbums(query: string) {
    return axios.get<AlbumsSearchResponse>('https://api.spotify.com/v1/search', {
      headers: {},
      params: {
        type: 'album', 
        q: query
      },
    }).then(res => res.data.albums.items)
  }


  // searchAlbums(query: string) {
  //   return new Promise<Album[]>((resolve) => {
  //     setTimeout(() => {
  //       resolve(albumsMock as Album[])
  //     }, 1000)
  //   })
  // }
}