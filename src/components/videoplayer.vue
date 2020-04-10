<template>
  <video
    ref="videoPlayer"
    class="video-js vjs-big-play-centered videoCustom">
  </video>
</template>

<script>
import Video from 'video.js'
// import video_zhCN from 'video.js/dist/lang/zh-CN.json'
// import 'video.js/dist/video-js.css'
// Video.addLanguage('zh-CN', video_zhCN)

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = Video(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
<style scoped>

</style>
