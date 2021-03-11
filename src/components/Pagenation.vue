<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span
      v-if="showPreviousLink()"
      class="pagination-btn"
      @click="updatePage(currentPage - 1)"
      ><</span
    >
    {{ currentPage + 1 }} of {{ totalPages() }}
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: ["works", "page"],
};
</script>
<style scoped></style>
