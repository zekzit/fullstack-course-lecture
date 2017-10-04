<template>
  <div>
    <button class="b05_3d_roll" @click="checkin">มาทำงานล่ะ</button>
    <button class="b05_3d_roll" @click="checkout">กลับล่ะจ่ะ</button>
    <button class="b05_3d_roll" @click="logout">ไม่ลงแล้วจ้ะ</button>
    <ul style="padding-left:0">
      <li :class="{ checkin: timestamp.timestampType == 1, checkout: timestamp.timestampType == 2 }" v-for="timestamp in timestamps" :key="timestamp.id">
          <!-- {{timestamp}} -->
          <span v-if="timestamp.timestampType == 1">&gt;&gt;&nbsp;</span>
          {{timestamp.timestamp | formatDate}}
          <span v-if="timestamp.timestampType == 2">&nbsp;&gt;&gt;</span>
      </li>
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
  created: function () {
    this.loadHistory()
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
        this.loadHistory()
      })
      .catch(err => { alert('เกิดข้อผิดพลาด'); console.log(err) })
    },
    logout () {
      api.logout()
      this.$router.replace({ name: 'Hello' })
    }
  }
}
</script>

<style>
    .checkin {
        list-style: none;
        /* color:blue; */
        padding:5px;
    }
    .checkout {
        list-style: none;
        padding:5px;
        /* color: red */
    }

    /* ### ### ### 05 */
    .b05_3d_roll {
        perspective: 500px;
        -webkit-perspective: 500px;
        -moz-perspective: 500px;
    }

    .b05_3d_roll div {
        position: absolute;
        text-align: center;
        width: 100%;
        height: 50px;
        padding: 10px;
        border: #000000 solid 1px;
        pointer-events: none;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    .b05_3d_roll div:nth-child(1) {
        color: #000000;
        background-color: #000000;
        transform: rotateX(90deg);
        -webkit-transform: rotateX(90deg);
        -moz-transform: rotateX(90deg);
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform-origin: 50% 50% -25px;
        -webkit-transform-origin: 50% 50% -25px;
        -moz-transform-origin: 50% 50% -25px;
    }

    .b05_3d_roll div:nth-child(2) {
        color: #000000;
        background-color: #ffffff;
        transform: rotateX(0deg);
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform-origin: 50% 50% -25px;
        -webkit-transform-origin: 50% 50% -25px;
        -moz-transform-origin: 50% 50% -25px;
    }

    .b05_3d_roll:hover div:nth-child(1) {
        color: #ffffff;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform: rotateX(0deg);
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
    }

    .b05_3d_roll:hover div:nth-child(2) {
        background-color: #000000;
        transition: all 0.2s ease;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        transform: rotateX(-90deg);
        -webkit-transform: rotateX(-90deg);
        -moz-transform: rotateX(-90deg);
    }


</style>
