import Help from '../page/help'
import Demo from '../page/demo'
import layout from '../page/layout'

let array1 = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/help',
    meta: {},
    component: Help
  },
  {
    path: '/demo',
    meta: {},
    component: Demo
  },
  {
    path: '/layout',
    meta: {},
    component: layout
  },
]
export default array1
