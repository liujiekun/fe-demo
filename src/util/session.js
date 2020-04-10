import sessionapi from '@/store/sessionapi'
const preFix = '/web/#'

export default {
  async beforeCreate () {
    const TOKEN = localStorage.getItem('TOKEN')
    if (!TOKEN) {
      window.location = preFix + '/login'
      return
    }
    let [resources, user] = await Promise.all([
      sessionapi.resources(),
      sessionapi.user()
    ])
    if (resources.head && resources.head.errCode && resources.head.errCode !== 0) {
      window.location = preFix + '/login'
      return
    } else {
      if (resources.rID) {
        this.$store.commit('setResources', resources.rID)
        this.$store.commit('setMobile', resources.mobile)
      }
    }
    if (user) {
      user.name = user.displayName
      this.$store.commit('setUser', user)
    }
  }
}
