import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Home"
  },
  {
    path: "/Home",
    name: "Home",
    component: Home
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
