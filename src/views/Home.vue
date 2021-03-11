<template>
  <div>
    <h1>
      I'm Home Component : ) <span class="num">{{ count }}</span>
    </h1>
    <ul>
      <li v-for="item in magazines" :key="item.id">
        {{ item.magazineTitle }}
      </li>
    </ul>
    <button @click="addHomeCount()">add home count</button>
  </div>
</template>
<script>
import { fetchMagazine } from "@/api";

export default {
  name: "home",
  data() {
    return { count: 0, magazines: [], page: 0, size: 20 };
  },
  methods: {
    addHomeCount: function () {
      this.count++;
    },
    async test() {
      const {
        data: { data: ddd },
      } = await fetchMagazine(this.page, this.size);
      this.magazines = ddd.content;
      console.log(ddd);
    },
  },
  created() {
    this.test();
  },
  /*   fetchMagList()
      .then((response) => {
        this.magazines = response.data.data.content;
        console.log(this.magazines);
      })
      .catch((error) => console.log(error));
  },*/
};
</script>
<style scoped>
h1 {
  background-color: darksalmon;
}
</style>
