import axios from 'axios'

export function userSignupRequest(userData){
  return dispacth => {
    return axios.post('/api/users', userData);
  }
}
