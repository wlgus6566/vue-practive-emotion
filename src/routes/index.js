import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import AboutIndex from "@/views/about/index";
import About from "@/views/about/About";
import AboutView from "@/views/about/AboutView";
import Contact from "@/views/Contact";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutIndex,
      children: [
        {
          path: "/",
          name: "aboutList",
          component: About,
        },
        {
          path: ":id",
          name: "aboutView",
          component: AboutView,
        },
      ],
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 };
    if (savedPosition) {
      position = savedPosition;
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position);
      }, 300);
    });
  },
});
