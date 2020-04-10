import bus from '@/util/eventbus'

export function beforeEach (router) {
  bus.$on('router:login', () => {
    router.push('/login')
  })
  router.beforeEach(async (to, from, next) => {
    //   const TOKEN = localStorage.getItem('TOKEN')
    //   // noRequireAuth 判断是否需要token鉴权
    //   if (!to.meta.noRequireAuth) {
    //     if (!TOKEN) {
    //       next({
    //         path: '/login'
    //         // query: { redirect: to.fullPath }
    //       })
    //     } else {
    //       next()
    //     }
    //   } else {
    //     next()
    //   }
    next()
  })
}
