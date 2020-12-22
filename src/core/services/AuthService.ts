import oauth2 from 'client-oauth2'


export class AuthService {
  token: oauth2.Token | null = null;
  autologin = true
  client: oauth2;
  
  constructor(options: oauth2.Options) {
    this.client = new oauth2(options)
  }
  
  getToken() {
    return this.token?.accessToken
  }
  
  async init() {
    try {
      const rawToken = sessionStorage.getItem('token')
      const token = rawToken && JSON.parse(rawToken)
      this.token = token && this.client.createToken(token)
    } catch (error) { }

    try {
      this.token = await this.client.token.getToken(window.location.href)
      window.location.hash = ''
      sessionStorage.setItem('token', JSON.stringify(this.token.data))
    } catch (err) {
      if (!this.token?.accessToken && this.autologin) { this.authorize() }
    }
  }

  authorize() {
    const url = this.client.token.getUri({})
    window.location.href = (url)
  }

  logout() {
    this.token = null;
  }
}
