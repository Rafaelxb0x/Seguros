import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/Admin-Table",
        component: () => import("components/admin/Admin-Table.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("src/components/admin/Dasboard.vue"),
      },
      {
        path: "/proveedores",
        component: () => import("components/admin/Proveedores/IndexBlade.vue"),
      },
      {
        path: "/seguros",
        component: () => import("components/admin/Seguros/IndexBlade.vue"),
      },
    ],
  },

  {
    path: "/auth/login",
    name: "login.Auth",
    component: () => import("components/auth/Login-Auth.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default routes;
router;
