function isLocalHost () {
  return [
    'localhost', // 本地
  ].includes(window.location.hostname)
}
let host = window.location.host.replace('www.', '')
if (isLocalHost()) {
  host = localStorage.getItem('host') || 'dev4b.everjiankang.com.cn'
}

// 这个列表的目的是 为了联调方便，XXX模块需要联一下后端的开发机
// 列表里面的规则为：permission 下的接口会替换成 开发机 192.168.0.111， sob 下的接口 连120
// 该替换规则 只会在 url是localhost的 地址下才生效（如果改了会影响其他fe的localhost 请求，注意一下）
// 具体的替换逻辑在 http.js renderDebugUrl function 里面
// 通过localStorage设置需要调试的接口，和需要调试的后端服务
// 注意：设置localStorage的格式为 localStorage.setItem(prefix + postModel, ip:port)
// 例如：localStorage.setItem('_devHost_thc/base/', '192.168.248.248:9090') 表示 将发送到thc/base/到接口都转发到192.168.248.248:9090上

const prefix = '_devHost_'
const debugHostList = Object.keys(localStorage)
  .filter(item => item.startsWith(prefix))
  .map(item => ({
    postModel: item.replace(prefix, ''),
    debugHost: localStorage.getItem(item) || ('api.' + host)
  }))
// 也可以在代码中设置
const hostList = [
  // { postModel: 'thc-platform-core', debugHost: '192.168.250.38:8015' },
  // { postModel: 'follow-up/template/', debugHost: '192.168.251.13:8080' },
]
Array.prototype.push.call(debugHostList, ...hostList)

let baseHost = {
  host: host,
  debugHostList: debugHostList
}

export { baseHost, isLocalHost }
