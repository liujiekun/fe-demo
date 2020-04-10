import { mainapi as axios } from '../util/api'
const url = '/thc-platform-core/unify/'

function user () {
  return axios.post(url + 'getCurrentUser').then(results => {
    return results.data
  })
}

function resources () {
  return axios.post(url + 'getElementsByUser').then(results => {
    return results.data
  })
}

export default {
  user,
  resources
}
