import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import TestimonialView from "../views/TestimonialView.vue";
// import CoachesView from "../views/CoachesView.vue";
// import SuccessesView from "../views/SuccessesView.vue";
// import TestimonialPage from "@/components/modules/TestimonialPage.vue";
import CoachPage from "@/components/modules/CoachPage.vue";
// import TestimonialsLayout from "@/components/layouts/TestimonialsLayout.vue";
import { useStore } from "vuex";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    props: () => {
      const store = useStore();
      return { key: store.getters.locale };
    },
  },
  {
    path: "/testimonials",
    name: "TestimonialsLayout",
    component: () => import("@/components/layouts/TestimonialsLayout.vue"),
    children: [
      {
        path: "",
        name: "AllTestimonials",
        component: () => import("../views/TestimonialView.vue"),
      },
      {
        path: "/testimonials/:id",
        name: "TestimonialPage",
        component: () => import("@/components/modules/TestimonialPage.vue"),
      },
    ],
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: () => import("../views/CoachesView.vue"),
    children: [
      {
        path: "/coaches/:id",
        name: "CoachPage",
        component: CoachPage,
      },
    ],
  },
  {
    path: "/successes",
    name: "Successes",
    component: () => import("../views/SuccessesView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
