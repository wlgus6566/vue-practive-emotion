<template>
  <div>
    <h1>I'm Home Component : ) <span class="num">{{ count }}</span></h1>
    <button @click="addHomeCount()"> add home count </button>
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted() {
    console.log(this.$route)
  },
  data() {
    return { count : 0 }
  },
  methods: {
    addHomeCount: function () {
      this.count++
    }
  }
}
</script>
<style scoped>
h1 {
  background-color: darksalmon;
}
</style>