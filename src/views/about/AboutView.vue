<template>
  <div class="inner">
    <div class="content">
      <h2>{{ aboutData.projectClientName }}</h2>
      <h3>{{ aboutData.project }}</h3>
      <img
        class="img"
        :src="`http://devapi.emotion.co.kr/${aboutData.pcBigImagePhysicalName}`"
        alt="이미지"
      />
      <ul class="design">
        <li v-for="item in aboutData.designConcept" :key="item.id">
          <h5>{{ item.fieldTitleOne }}</h5>
          <p v-html="item.fieldContents"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { fetchWorkList } from "@/api";
export default {
  name: "AboutView",
  data() {
    return {
      aboutData: [],
    };
  },
  methods: {
    async fetchWorkList(aboutId) {
      const {
        data: { data: response },
      } = await fetchWorkList(aboutId);
      this.aboutData = response;
    },
  },
  created() {
    const aboutId = this.$route.params.id;
    this.fetchWorkList(aboutId);
  },
};
</script>
<style scoped lang="scss">
.inner {
  margin-top: 50px;
}
.content {
  margin-left: 50px;
}
h2 {
  font-size: 80px;
}
h3 {
  color: darkkhaki;
  margin-left: 150px;
  font-size: 50px;
}
.img {
  margin-left: 100px;
}
.design {
  li {
    h5 {
      list-style: none;
      font-size: 30px;
      color: palevioletred;
    }
    p {
      font-size: 20px;
    }
  }
}
</style>
