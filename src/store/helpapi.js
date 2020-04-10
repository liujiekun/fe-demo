import { mainapi as axios } from '@/util/api'
const url = 'thc-platform-core/'

// 根据id获取帮助详情
function getById (id) {
  return axios.post(url + 'sys/role/getRoleInfos/', {
    id
  }).then(result => {
    return result
  })
}

export default {
  getById,
}
