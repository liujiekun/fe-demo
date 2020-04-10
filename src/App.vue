<template>
  <div id="app" style="height: 100vh;">
    <router-view></router-view>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    // HelloWorld
  },
  watch: {
    '$store.state.pending': function (num) {
      if (num > 0) {
        NProgress.start()
      }
      if (num === 0) {
        NProgress.done()
      }
    }
  }
}
</script>

<style>
</style>
