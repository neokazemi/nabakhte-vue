import Vue from 'vue'
const Notification = {
  install (Vue) {
    // // add global method or property
    // Vue.myGlobalMethod = function () {
    //   // some logic ...
    // }

    // // add a global asset
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // some logic ...
    //   }
    // })

    // inject some component options
    Vue.mixin({
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
          return '#b8b8b8'
        }
      }
    })

    // add an instance method
    Vue.prototype.$notify = function (text, time = 2000, type = 'success') {
      this.$store.commit('notifications/updateShowNotification', true)
      this.$store.commit('notifications/updateNotificationShowTime', time)
      this.$store.commit('notifications/updateNotification', text)
      this.$store.commit('notifications/updateType', type)
    }
  }
}

Vue.use(Notification)
