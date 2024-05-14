import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestimonialView from "../views/TestimonialView.vue";
import CoachesView from "../views/CoachesView.vue";
import SuccessesView from "../views/SuccessesView.vue";
import TestimonialPage from "@/components/modules/TestimonialPage.vue";
import CoachPage from "@/components/modules/CoachPage.vue";
import TestimonialsLayout from "@/components/layouts/TestimonialsLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/testimonials",
    name: "TestimonialsLayout",
    component: TestimonialsLayout,
    children: [
      {
        path: "",
        name: "AllTestimonials",
        component: TestimonialView,
      },
      {
        path: "/testimonials/:id",
        name: "TestimonialPage",
        component: TestimonialPage,
      },
    ],
  },
  {
    path: "/coaches",
    name: "Coaches",
    component: CoachesView,
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
    component: SuccessesView,
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
