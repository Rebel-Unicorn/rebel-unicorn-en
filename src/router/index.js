import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestimonialView from "../views/TestimonialView.vue";
import TestimonialPage from "@/components/modules/TestimonialPage.vue";
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
