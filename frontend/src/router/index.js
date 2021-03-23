import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Wedding from "../views/Wedding.vue";
import Thanks from "../views/Thanks.vue";
import Growth from "../views/Growth.vue";
import Memorial from "../views/Memorial.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/wedding",
      name: "Wedding",
      component: Wedding,
    },
    {
      path: "/thanks",
      name: "Thanks",
      component: Thanks,
    },
    {
      path: "/growth",
      name: "Growth",
      component: Growth,
    },
    {
      path: "/memorial",
      name: "Memorial",
      component: Memorial,
    },
  ],
});

export default router;
