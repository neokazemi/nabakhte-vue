export const state = () => ({
  showNotification: false,
  notificationShowTime: 2000,
  notification: ''
})

export const mutations = {
  updateShowNotification (state, newInfo) {
    state.showNotification = newInfo
  },
  updateNotificationShowTime (state, newInfo) {
    state.notificationShowTime = newInfo
  },
  updateNotification (state, newInfo) {
    state.notification = newInfo
  }
}

export const getters = {
  showNotification (state) {
    return state.showNotification
  },
  notificationShowTime (state) {
    return state.notificationShowTime
  },
  notification (state) {
    return state.notification
  }
}
