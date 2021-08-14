import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jornadabrasil.herokuapp.com/'
})

export default api
