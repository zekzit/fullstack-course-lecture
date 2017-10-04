<template>
  <div>
      <h1>User: {{ userId }}</h1>
      <router-view />
      <p>
        <a @click="next">Next</a>
      </p>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userId: Number(this.$route.params.id)
    }
  },
  methods: {
    next () {
      this.$router.push({ name: 'User', params: { id: this.userId += 1 } })
    }
  },
  watch: {

  }
}
</script>
