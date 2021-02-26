<template>
  <div>
    <h1>I'm About Component : 0  <span class="num">{{ count }}</span></h1>
    <button @click="addAboutCount()"> add About count </button>
  </div>
</template>
<script>
export default {
  name: 'about',
  mounted() {
    console.log(this.$route)
  },
  data() {
    return { count : 0 }
  },
  methods: {
    addAboutCount: function () {
      this.count++
    },

  }
}
</script>
<style lang="scss" scoped>
div{

  h1{
    background-color: brown;
    color: #fff;
    font-style: italic;
  }
}

</style>