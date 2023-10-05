import axios from 'axios'

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options))
  return instance
}

export const posts = create(`${import.meta.env.VITE_API_URL}`)
// development => http://localhost:5000/posts/
// production => http://some-url/posts/
