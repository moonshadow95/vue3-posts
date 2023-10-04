// axios
import axios from 'axios'

const BASE_URL = 'http://localhost:5000/posts'

export function getPosts(params) {
  return axios.get(`${BASE_URL}`, { params })
}

export function getPostById(id) {
  return axios.get(`${BASE_URL}/${id}`)
}

export function createPost(data) {
  return axios.post(`${BASE_URL}`, data)
}
export function updatePost(id, data) {
  return axios.put(`${BASE_URL}/${id}`, data)
}
export function deletePost(id) {
  return axios.delete(`${BASE_URL}/${id}`)
}
