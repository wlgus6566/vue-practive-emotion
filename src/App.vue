<template>
  <div id="app">
    <div style="position:fixed; bottom:0; left:0; font-size:50px; z-index: 2">
      {{test}}
    </div>
    <HeaderVue/>

    <transition
        :include="['home', 'about', 'contact']"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
        appear
    >
      <keep-alive>
        <router-view :key='$route.fullPath'/>
      </keep-alive>
    </transition>
    {{$route.fullPath}}
  </div>

</template>
<script>
import HeaderVue from "@/components/HeaderVue";
import { Power4, TweenMax, TimelineMax } from 'gsap'
export default {
  components: {
    HeaderVue,
  },
  computed :{
    test(){
      return this.$route.fullPath || 'home'
    }
  },
  methods : {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      })
      tl.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
      })
      tl.to(el, 0.5, {
        y: 0,
        ease: Power4.easeOut
      });

      tl.to(el, 1, {
        scale: 1,
        ease: Power4.easeOut
      });
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done
      });
    }
  },
}
</script>
<style>
#app {
  overflow: hidden;
}
.num {
  color: deeppink;
  font-size: 200px;
}
</style>
