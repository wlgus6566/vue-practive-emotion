<template>
  <div id="app">
    <HeaderVue />
    <transition
      @enter="enter"
      @leave="leave"
      v-bind:css="false"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import HeaderVue from "@/components/HeaderVue";
import { Power2, TweenMax } from "gsap";
export default {
  components: {
    HeaderVue,
  },
  computed: {},
  methods: {
    enter(el, done) {
      console.log(el);
      TweenMax.fromTo(
        el,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: Power2.easeOut,
          duration: 0.3,
          onComplete: done,
        }
      );
    },
    leave(el, done) {
      TweenMax.to(el, 0.3, {
        y: -50,
        opacity: 0,
        ease: Power2.easeOut,
        onComplete: done,
      });
    },
  },
  watch: {
    $route(val) {
      console.log(val.matched[0].path);
    },
  },
};
</script>
<style>
#app {
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
}
.num {
  color: deeppink;
  font-size: 200px;
}
</style>
