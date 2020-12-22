import { AlbumSearchService } from "./AlbumSearchService";
import { AuthService } from "./AuthService";


export const authservice = new AuthService({
  authorizationUri: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:3000/',
  clientId: 'bceba94c95024f3080c7d8b8a4278f1b',
  scopes: [],
  query: {
    show_dialog: 'true'
  }
})

export const albumSearch = new AlbumSearchService(authservice)

authservice.init()