import axios, { AxiosError } from "axios";
import { Album } from "../model/Album";
import { AlbumsSearchResponse } from "../model/Search";
import { albumsMock } from "./albumsMock";

export class AlbumSearchService {

  constructor() {

  }


  searchAlbums(query: string) {
    return axios.get<AlbumsSearchResponse>('https://api.spotify.com/v1/search', {
      headers: { Authorization: 'Bearer  Lubeiplacki' },
      params: {
        type: 'album',
        q: query
      },
    })
      .then(res => res.data.albums.items)
      .catch((error: AxiosError) => {
        if ((error).isAxiosError && error.response?.data?.error?.message) {
          return Promise.reject(new Error(error.response.data.error.message))
        } else {
          console.error(error)
          return Promise.reject(new Error('Unexpected error'))
        }
      })
  }


  // searchAlbums(query: string) {
  //   return new Promise<Album[]>((resolve) => {
  //     setTimeout(() => {
  //       resolve(albumsMock as Album[])
  //     }, 1000)
  //   })
  // }
}