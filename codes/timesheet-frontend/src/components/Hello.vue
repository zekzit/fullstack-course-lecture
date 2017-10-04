<template>
  <div class="hello">
    <h1>Timestamp System</h1>
    <small>อย่ามาทำงานสายมากนะจ๊ะ</small>
    <p>
      <form @submit.prevent="login">
        Username: <input type="text" v-model="username" /> Password: <input type="password" v-model="password" />
        <p><input type="submit" value="เข้าระบบ สิ จ๊ะ"></p>
      </form>
    </p>
  </div>
</template>

<script>
import * as api from '../services/api'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      api.login(this.username, this.password).then(loginResult => {
        this.$router.push({ name: 'Timestamps' })
      }).catch((err) => {
        window.alert('error')
        throw err
      })
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
