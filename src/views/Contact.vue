<template>
  <div>
    <div>{{ careers }}</div>
    <h1>
      I'm Contact Component : 0 <span class="num">{{ count }}</span>
    </h1>
    <button @click="addContactCount()">add Contact count</button>
  </div>
</template>
<script>
import { fetchCareer } from "@/api/index.js";
export default {
  name: "contact",
  data() {
    return { count: 0, careers: [] };
  },
  methods: {
    addContactCount: function () {
      this.count++;
    },
  },
  created() {
    fetchCareer()
      .then(function (response) {
        console.log(response.data);
        this.careers = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style scoped lang="scss">
h1 {
  background-color: coral;
}
</style>
