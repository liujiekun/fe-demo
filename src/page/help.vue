<template>
  <el-container class="layout_main">
    <el-header class="layout_header" height="85px">
      <a href="/" class="logo"><img src="../assets/logo.png" /></a>
    </el-header>
    <el-container class="layout_inner">
      <el-aside width="200px" class="layout_aside">
        <side-nav></side-nav>
      </el-aside>
      <el-main class="oxhya">
        <help-detail></help-detail>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideNav from './sidenav.vue'
import HelpDetail from './help.detail.vue'
import session from '@/util/session.js'

export default {
  mixins: [session],
  components: {
    SideNav,
    HelpDetail
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.layout_main{width: 1140px; height: 100vh; overflow: hidden; margin: 0 auto;background: #fff}
.layout_header {border-bottom: 1px solid #ddd; padding: 0}
.layout_inner{overflow: hidden; margin-bottom: 20px;}
.logo{display: inline-block; vertical-align: middle; margin: 15px 0 0}
.logo img{height: 50px;}
.layout_aside {border-right: 1px solid #ddd; overflow: hidden;}

</style>

