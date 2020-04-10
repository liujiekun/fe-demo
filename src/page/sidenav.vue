<template>
  <div class="war">
    <div class="sch">
      <el-input
        placeholder="请输入想搜索的内容"
        suffix-icon="el-icon-search"
        size="small"
        v-model="kw">
      </el-input>
      <div class="version">THC 3.1.4</div>
    </div>
    <div class="cnt oxhya">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :default-openeds="openedids"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <span>客户中心</span>
          </template>
          <!-- <el-menu-item-group> -->
          <el-menu-item index="1-1">分诊台基础功能</el-menu-item>
          <el-menu-item index="1-2">当日患者综合业务</el-menu-item>
          <el-menu-item index="1-3">挂号业务</el-menu-item>
          <el-menu-item index="1-4">随访工作站</el-menu-item>
          <el-menu-item index="1-5">内置套餐下单与核销</el-menu-item>
          <!-- </el-menu-item-group> -->
          <!-- <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-submenu index="2">
          <span slot="title">互联网医院业务</span>
          <el-menu-item index="2-1">分诊台基础功能</el-menu-item>
          <el-menu-item index="2-2">当日患者综合业务</el-menu-item>
          <el-menu-item index="2-3">挂号业务</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <span slot="title">客户中心</span>
          <el-menu-item index="2-1">分诊台基础功能</el-menu-item>
          <el-menu-item index="2-2">当日患者综合业务</el-menu-item>
          <el-menu-item index="2-3">挂号业务</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <span slot="title">客户中心</span>
          <el-menu-item index="2-1">分诊台基础功能</el-menu-item>
          <el-menu-item index="2-2">当日患者综合业务</el-menu-item>
          <el-menu-item index="2-3">挂号业务</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <span slot="title">客户中心</span>
          <el-menu-item index="2-1">分诊台基础功能</el-menu-item>
          <el-menu-item index="2-2">当日患者综合业务</el-menu-item>
          <el-menu-item index="2-3">挂号业务</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kw: '',
      openedids: ['1', '2', '3']
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    sch (val) {
      console.log(val, 'dddd')
    }
  },
  watch: {
    kw (val) {
      if (val) {
        this.sch(val)
      }
    }
  }
}
</script>
<style scoped>
.war{ height: 100%; overflow: hidden; display: flex; flex-direction: column}
.war .sch{margin: 15px 15px 0 0;}
.war .version{font-size: 18px;margin: 10px 0;}
.war .cnt{flex: 1;}

.el-menu{border-right: 0;}
.el-submenu{margin-top: 10px;}
.el-submenu /deep/ .el-submenu__title{padding: 0 15px 0 0!important; height: 40px; line-height: 40px; font-weight: bold; font-size: 16px}
.el-submenu /deep/ .el-submenu__title:focus,.el-submenu /deep/ .el-submenu__title:hover{background: #fff}
.el-submenu /deep/ .el-menu-item{ padding: 0 15px 0 0!important;height: 40px; line-height: 40px; font-size: 14px}
.el-submenu /deep/ .el-menu-item:focus, .el-submenu /deep/ .el-menu-item:hover{background: #fff}
</style>

