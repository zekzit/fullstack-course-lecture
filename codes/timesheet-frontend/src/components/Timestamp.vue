<template>
  <div>
    <button @click="loadHistory">Load History</button>
    <button @click="checkin">มาทำงานล่ะ</button>
    <button @click="checkout">กลับล่ะจ่ะ</button>
    <ul>
      <li v-for="timestamp in timestamps" :key="timestamp.id">{{timestamp}}</li>
    </ul>
  </div>
</template>

<script>
import * as api from '../services/api'
export default {
  name: 'timestamp',
  data () {
    return {
      timestamps: []
    }
  },
  methods: {
    loadHistory () {
      api.history().then(timestamps => {
        console.log(timestamps.data)
        this.timestamps = timestamps.data
      })
      .catch(err => { alert('เกิดข้อผิดพลาด'); console.log(err) })
    },
    checkin () {
      api.checkin().then(timestamps => {
        window.alert('อนุมัติครับ')
        this.loadHistory()
      })
      .catch(err => { alert('เกิดข้อผิดพลาด'); console.log(err) })
    },
    checkout () {
      api.checkout().then(timestamps => {
        window.alert('อนุมัติครับ ลาก่อน')
        api.logout()
        this.$router.replace({ name: 'Hello' })
      })
      .catch(err => { alert('เกิดข้อผิดพลาด'); console.log(err) })
    }
  }
}
</script>
