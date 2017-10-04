import Vue from 'vue'
import moment from 'moment'

Vue.filter('upper', text => {
  if (typeof text !== 'string') {
    return ''
  }
  return text.toUpperCase()
})

const ticker = new Vue({
  data () {
    return ({
      tick: 0,
      intervalId: 0
    })
  },
  created () {
    this.intervalId = setInterval(() => {
      this.tick = Date.now()
    }, 1000)
  },
  destroyed () {
    clearInterval(this.intervalId)
  }
})

Vue.filter('fromNow', (date) => {
  ticker.tick
  return moment(date).fromNow()
})
