import axios, { AxiosError } from "axios";
import { AlbumsSearchResponse } from "../model/Search";
import { AuthService } from "./AuthService";

export class AlbumSearchService {

  constructor() { }


  async searchAlbums(query: string) {
    
    const cancelToken = new axios.CancelToken(cancel => { })

    const res = await axios.get<AlbumsSearchResponse>('search', {
      params: {
        type: 'album',
        q: query
      },
      cancelToken
    });
    return res.data.albums.items;

  }


  // searchAlbums(query: string) {
  //   return new Promise<Album[]>((resolve) => {
  //     setTimeout(() => {
  //       resolve(albumsMock as Album[])
  //     }, 1000)
  //   })
  // }
}