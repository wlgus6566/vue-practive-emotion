<template>
  <div>
    <ul>
      <li v-for="work in works" :key="work.id" class="list">
        <router-link v-bind:to="`about/${work.id}`">
          <h3 class="project-name">{{ work.projectServiceName }}</h3>
          <img
            :src="`http://devapi.emotion.co.kr/${work.pcBigImagePhysicalName}`"
            alt="이미지"
          />
        </router-link>
      </li>
    </ul>
    <!--    <el-pagination
      class="page"
      layout="prev, pager, next"
      :total="totalElements"
      :page-size="length"
      @current-change="handleCurrentChange"
    >
    </el-pagination>-->
  </div>
</template>
<script>
import { fetchWork } from "@/api";
export default {
  name: "about-list",
  data() {
    return {
      bottom: false,
      works: [],
      page: 0,
      size: 2,
      totalElements: 0,
      ing: false,
    };
  },
  methods: {
    /*   handleCurrentChange(val) {
      console.log(val);
      this.page = val - 1;
      this.fetchWorks();
    },*/
    async fetchWorks() {
      if (this.ing) return;
      this.ing = true;
      const {
        data: { data: response },
      } = await fetchWork(this.page, this.size);
      this.works = this.works.concat(response.content);
      this.totalElements = response.totalElements;
      this.ing = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        this.page < this.totalElements - 1
      ) {
        this.page = this.page + 1;
        this.fetchWorks();
      }
    });
  },
  created() {
    this.fetchWorks();
  },
};
</script>
<style lang="scss" scoped>
div {
  h1 {
    background-color: brown;
    color: #fff;
    font-style: italic;
  }
  .page {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
  .project-name {
    margin: 0;
    position: absolute;
    left: 5%;
    top: 5%;
    font-size: 30px;
  }
  .list {
    position: relative;
    font-size: 50px;
    line-height: 80px;
    color: black;
    margin-left: 30px;
    list-style: none;
    &:nth-child(2n) {
      margin-left: 30%;
    }
  }
}
</style>
