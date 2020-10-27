import Vue from "vue";
import Router from "vue-router";
// import LoginForm from "../components/LoginForm.vue";

Vue.use(Router);

const routes = [
  {
    path: "/users",
    name: "Users",
    component: () => import("../components/LoginForm.vue"),
    children: [
      {
        path: ":id",
        name: "HelloWorld",
        component: () => import("../components/HelloWorld.vue"),
      },
    ],
  },
];

const router = new Router({
  routes,
});

export default router;
