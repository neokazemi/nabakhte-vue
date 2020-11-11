export const state = () => ({
  showNotification: false,
  notificationShowTime: 2000,
  notification: '',
  type: 'success'
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
  },
  updateType (state, newInfo) {
    state.type = newInfo
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
  },
  type (state) {
    return state.type
  }
}
