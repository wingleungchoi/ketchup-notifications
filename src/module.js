// @flow

const PREFIX = '@@ketchup/'

const ADD = `${PREFIX}ADD_KETCHUP_NOTIFICATION`
const REMOVE = `${PREFIX}REMOVE_KETCHUP_NOTIFICATION`

export {
  ADD as ADD_KETCHUP_NOTIFICATION,
  REMOVE as REMOVE_KETCHUP_NOTIFICATION
}

function createNotification(id, text, type, timeout, dismissAfter) {
  return {
    id,
    text,
    type,
    timeout,
    dismissAfter
  }
}

export function createModule(options = {}) {
  const {
    dismissInterval = 3000
  } = options

  let maxKetchupId = 0

  const state = {
    notifications: []
  }

  const getters = {
    ketchupNotifications: (state) => state.notifications
  }

  const actions = {
    [ADD] ({ commit }, { text, type = 'info', timeout = true, dismissAfter = dismissInterval }) {
      const id = ++maxKetchupId
      const notification = createNotification(id, text, type, timeout, dismissAfter)

      commit(ADD, notification)
      setTimeout(() => commit(REMOVE, id), dismissAfter)
    },

    [REMOVE] ({ commit }, id) {
      commit(REMOVE, id)
    }
  }

  const mutations = {
    [ADD] (state, data) {
      state.notifications.push(data)
    },

    [REMOVE] (state, notification) {
      state.notifications = state.notifications.filter(n => n.id !== notification.id)
    }
  }

  return {
    state,
    getters,
    actions,
    mutations
  }
}
