<template>
  <div>
    hello world
  </div>
</template>
<script>
import helpApi from '../store/helpapi'

export default {
	components: {
	},
	data () {
		return {
      helpApi,
      disabled: true,
      dialogVisible: false,
      feed: '',
    }
  },
  created () {
    this.handler()
  },
  methods: {
    handler () {
      helpApi.getById().then(res => {
        console.log(res, 'res')
      })
    }
  }
}
</script>
<style scoped>
h3,p{margin: 0}
h3 {font-size: 26px;line-height: 26px;margin: 10px 0 20px}
.time{color: #666; margin-bottom: 20px;}
.tit{font-size: 20px;line-height: 1.5; margin-bottom: 20px; font-weight: bold}
a{display: inline-block;margin: 0 5px}
.videoWar{width: 100%; margin: 10px 0;}
.feedDialog /deep/ .el-dialog__header .el-dialog__title{ font-weight:bold }
.feedDialog /deep/ .el-dialog__body{padding-top: 0; padding-bottom: 0}
.dialogTip {margin: 10px 0}
</style>
