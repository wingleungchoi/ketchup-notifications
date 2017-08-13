<template>
  <div class="notifications">
    <notification v-for="notification in notifications" :notification="notification">
    </notification>
  </div>
</template>

<script>
import Vue from  'vue'
import Notification from './notification.vue'

export default Vue.extend({
  components: {
    notification: Notification
  },
  data () {
    return {
      notifications: NotificationStore.state
    }
  },
	computed () {
		notifications () {
			return this.$store.getters.ketchupNotifications
		}
	},
  methods: {
    removeNotification: function (notification) {
      NotificationStore.removeNotification(notification)
    }
  }
})
</script>

<style>
.notifications {
	position: fixed;
	right: 10px;
	bottom: 10px;
	width: 350px;
	z-index: 300;
}
</style>
