<template>
  <div class="notifications">
    <notification v-for="notification in notifications" :notification="notification" :key="notification.id">
    </notification>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from  'vue'
import Notification from './notification.vue'

export default Vue.extend({
  components: {
    notification: Notification
  },
	computed: {
    ...mapGetters({
       notifications: 'ketchupNotifications'
     })
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
