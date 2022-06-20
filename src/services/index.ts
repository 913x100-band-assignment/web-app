import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://kq51atsidi.execute-api.us-east-1.amazonaws.com/Prod',
  headers: {
    'Content-type': 'application/json'
  }
})
