import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/layouts/BasicLayout.vue"),
    redirect: "/table-template",
    children: [
      {
        path: "/table-template",
        name: "TableTemplate",
        component: () => import("../views/table-template.vue"),
      },{
        path: "/table-template-1",
        name: "TableTemplate1",
        component: () => import("../views/table-template1.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
