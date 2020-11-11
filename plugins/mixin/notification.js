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
    },
    notificationColor () {
      if (this.$store.getters['notifications/type'] === 'success') {
        return '#2bbb28'
      } else if (this.$store.getters['notifications/type'] === 'failure') {
        return '#e2401c'
      }
    }
  },
  methods: {
    enableNotification (text, time = 2000, type = 'success') {
      this.$store.commit('notifications/updateShowNotification', true)
      this.$store.commit('notifications/updateNotificationShowTime', time)
      this.$store.commit('notifications/updateNotification', text)
      this.$store.commit('notifications/updateType', type)
    }
  }
}

export default mixinNotification
