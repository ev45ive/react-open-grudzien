import axios, { AxiosError } from "axios";
import { AlbumSearchService } from "./AlbumSearchService";
import { AuthService } from "./AuthService";


export const authservice = new AuthService({
  authorizationUri: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:3000/',
  clientId: 'bceba94c95024f3080c7d8b8a4278f1b',
  scopes: [],
  query: {
    // show_dialog: 'true'
  }
})
authservice.init()

axios.defaults.baseURL = 'https://api.spotify.com/v1/'

axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer ' + authservice.getToken()

  return config
})

axios.interceptors.response.use(config => config, (error: AxiosError) => {
  if ((error).isAxiosError && error.response?.data?.error?.message) {
    if(error.response.status === 401){
      authservice.authorize()
      // Retry request after new token:
      // .then().. error.config.headers... return config; 
    }

    return Promise.reject(new Error(error.response.data.error.message))
  } else {
    console.error(error)
    return Promise.reject(new Error('Unexpected error'))
  }
})



export const albumSearch = new AlbumSearchService()
