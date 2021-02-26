<template>
  <div>
    <h1>I'm Contact Component : 0 <span class="num">{{ count }}</span></h1>
    <button @click="addContactCount()"> add Contact count </button>
  </div>
</template>
<script>
export default {
  name: 'contact',
  created() {
    console.log('Contact component')
  },
  data() {
    return { count : 0 }
  },
  methods: {
    addContactCount: function () {
      this.count++
    }
  }
}
</script>
<style scoped lang="scss">
h1{
  background-color: coral;
}

</style>