import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Home from "./Pages/Home.vue";
import SecondPage from "./Pages/SecondPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/second-page",
        name: "SecondPage",
        component: SecondPage
    },
  ],
});

createApp(App).use(router).mount("#app");
