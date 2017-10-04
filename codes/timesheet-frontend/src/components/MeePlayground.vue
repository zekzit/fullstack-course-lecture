<template>
  <div class="mee-playground">
    <span>กรุณาใส่ชื่อสิ่งที่คุณชอบ</span>
    <p><input v-model.trim="name" /></p>
    <p v-if="name !== ''">คุณแอบชอบ: {{ name }}</p>
    <button @click="submit">บอกให้โลกรู้สิ!</button>
    <p>
      <em style="font-size:x-large">สิ่งที่คนเค้ามักชอบกัน</em>
      <ul>
        <LikeItem v-for="item in items" :key="item.id" :data="item"></LikeItem>
      </ul>
    </p>
  </div>
</template>

<script>
import LikeItem from './LikeItem'
export default {
  name: 'mee-playground',
  components: {
    LikeItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      items: [{ id: 1, name: 'เกาเหลา', createdAt: '08/01/2017' },
        { id: 2, name: 'ข้าวผัดปู', createdAt: '09/01/2017' },
        { id: 3, name: 'แกงส้มกุ้ง', createdAt: '10/01/2017' }
      ]
    }
  },
  methods: {
    submit () {
      window.alert('กำลังประกาศให้โลกรู้ว่าคุณชอบ "' + this.name + '"')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
