<template>
  <div class="ketchup-notification" :class="`ketchup-${notification.type}`">
    <button @click="triggerClose(notification)" aria-label="Close alert" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
    <h5 v-if="notification.title">{{notification.title}}</h5>
    <p>
      {{notification.text}}
    </p>
  </div>
</template>

<script>
import Vue from  'vue'
import { REMOVE_KETCHUP_NOTIFICATION } from './module'

export default Vue.extend({
	props: ['notification'],
  data: function () {
  	return { timer: null }
	},
  ready: function () {
  let timeout = this.notification.hasOwnProperty('timeout') ? this.notification.timeout : true
  if (timeout) {
  	let delay = this.notification.dismissAfter || 3000
      this.timer = setTimeout(function () {
        this.triggerClose(this.notification)
      }.bind(this), dismissAfter)
    }
  },

  methods: {
    triggerClose: function (notification) {
    	clearTimeout(this.timer)
      this.$store.dispatch('REMOVE_KETCHUP_NOTIFICATION', notification)
    }
  }
})
</script>

<style>
.ketchup-notification p {
  margin-right: 20px;
}
</style>
