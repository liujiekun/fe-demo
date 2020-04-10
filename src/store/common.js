import { baseHost } from './basehost'
import bus from '@/util/eventbus'

var ever = {
  api: window.location.protocol + '//' + baseHost.host + '/api'
}

ever.install = function (Vue) {
  Vue.prototype.$ever = ever
  Vue.prototype.$bus = bus
}
export default ever
