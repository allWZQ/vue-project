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
  //   path: "/Home2",
  //   name: "Home2",
  //   component: () => import("../views/Home2.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
