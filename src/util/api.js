import axios from '@/util/http'
import ever from '@/store/common'

const url = ever.api

var mainapi = axios.create({
  baseURL: url,
  withCredentials: true
})

mainapi.interceptors.request.use(function (config) {
  if (!config.data) {
    config.data = {}
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

mainapi.interceptors.response.use(function (response) {
  return response.data
})

export { mainapi }
