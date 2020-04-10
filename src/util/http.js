import axios from 'axios'
import store from '../store/index'
import bus from './eventbus'
import { Notification } from 'element-ui'
import { baseHost, isLocalHost } from '@/store/basehost'

const CancelToken = axios.CancelToken
function create (options) {
  let instance = axios.create(options)
  instance.interceptors.request.use(
    function (config) {
      if (localStorage.getItem('TOKEN')) {
        config.headers['x-access-token'] = localStorage.getItem('TOKEN')
      }
      if (localStorage.getItem('TENANTID')) {
        config.headers['x-tenant-id'] = localStorage.getItem('TENANTID')
      }
      if (localStorage.getItem('x-user-ip')) {
        config.headers['x-user-ip'] = localStorage.getItem('x-user-ip')
      }
      store.commit('setPending', 1)
      return config
    },
    function (error) {
      store.commit('setPending', -1)
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      store.commit('setPending', -1)
      if (!response || !response.data || !response.data.head) {
        notify('error', '网络请求失败，请稍后再试')
      } else {
        // 2000 login user's tenantId is null
        if ([901191, 901192, 2000].includes(+response.data.head.errCode)) {
          showError(response.data.head.errCode, '认证超时，或该账号已被其他设备注销，请重新登录', 'error')
          // 后端有些接口会莫名其妙的返回这些值，然后导致自动跳转到登录页，页面跳转了，日志看不到，所以打了补丁 by lvjiangtao@everjiankang.com
          if (!localStorage.getItem('debug')) {
            window.location = '/web/#/login'
          } else {
            console.error(response, '接口错误触发返回登录逻辑')
          }
        } else {
          if (![0, 204, 901102, 903600, 991100, 300001].includes(+response.data.head.errCode)) {
            if (window.location.hostname === 'localhost') {
              console.error('出错了：', response.request.responseURL, response)
            }
            showError(
              response.data.head.errCode,
              response.data.head.errMsg,
              response.data.head.errShowType
            )
          }
        }
      }
      return response
    },
    function (error) {
      store.commit('setPending', -1)
      return Promise.reject(error)
    }
  )
  return instance
}

// http://api.dev4.everjiankang.com.cn/thc-platform-core/common/param/getClinicConfig/
// http://192.168.251.13:8080/thc-platform-core/common/param/getClinicConfig/
// 为了调试方便修改XX开头的请求转发到到后端开发机器 by lvjiangtao@everjiankang.com.cn
function renderDebugUrl (config) {
  let fullUrl = config.url
  if (!fullUrl.includes('http://')) {
    if (!config.baseURL.endsWith('/') && !config.url.startsWith('/')) {
      fullUrl = config.baseURL + '/' + config.url
    } else if (config.baseURL.endsWith('/') && config.url.startsWith('/')) {
      fullUrl = config.baseURL + config.url.substring(1, config.url.length)
    } else {
      fullUrl = config.baseURL + config.url
    }
  }
  if (isLocalHost()) {
    var debugArr = baseHost.debugHostList
    for (var i = 0; i < debugArr.length; i++) {
      if (fullUrl.includes(debugArr[i].postModel)) {
        let re = /\/\/([^/]+)/i
        fullUrl = fullUrl.replace(re, ('//' + debugArr[i].debugHost))
        fullUrl = fullUrl.replace('/api', '')
      }
    }
  }
  return fullUrl
}

function showError (errCode, errMsg, errShowType) {
  if (!errMsg) return
  if (!showError.timer) {
    showError.timer = {}
  }
  let existTimer = showError.timer[String(errCode)]
  if (existTimer) {
    clearTimeout(existTimer)
  }
  showError.timer[String(errCode)] = setTimeout(() => {
    notify(errShowType, errMsg)
    bus.$emit('onError')
  }, 1000)
}

function notify (type = 'warning', message, duration = 2500, title = '提示') {
  Notification({
    type,
    title,
    message,
    duration
  })
}
export default {
  create,
  CancelToken,
  notify,
  renderDebugUrl
}
