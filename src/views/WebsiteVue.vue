<template>
  <div>
    <h1>I'm website Component : 8</h1>
    <button @click="addCount()"> add home count </button>
  </div>
</template>
<script>
export default {
  name: 'Website',
  data() {
    return { count : 0 }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
</script>