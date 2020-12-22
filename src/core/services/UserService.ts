import axios from "axios"
import { UserProfile } from "../model/User"



export class UserService {

  getUserProfile() {
    return axios.get<UserProfile>('/me')
  }
}