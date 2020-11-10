const mixinNotification = {
  computed: {
    showNotification: {
      get () {
        return this.$store.getters['notifications/showNotification']
      },
      set (newValue) {
        this.$store.commit('notifications/updateShowNotification', newValue)
      }
    },
    notification () {
      return this.$store.getters['notifications/notification']
    },
    notificationShowTime () {
      return this.$store.getters['notifications/notificationShowTime']
    }
  },
  methods: {
    enableNotification (text, time = 200000) {
      this.$store.commit('notifications/updateShowNotification', true)
      this.$store.commit('notifications/updateNotificationShowTime', time)
      this.$store.commit('notifications/updateNotification', text)
    }
  }
}

export default mixinNotification
