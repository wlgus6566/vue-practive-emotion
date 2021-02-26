import Vue from 'vue';
import VueRouter from "vue-router";
import createHelper from 'vue-router-keep-alive-helper'
import WebsiteVue from "@/views/WebsiteVue";


import Home from "@/views/Home";
import About from "@/views/About";
import Contact from "@/views/Contact";


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name : 'home',
            component:Home,
        },
        {
            path: '/about',
            name : 'about',
            component:About,
        },
        {
            path: '/contact',
            name: 'contact',
            component:Contact,
        },
        {
            path: '/website',
            component:WebsiteVue,
        },

    ]
})

createHelper({Vue, router});