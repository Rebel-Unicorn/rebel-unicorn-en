import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/global.css";
import "./assets/css/mediaQueries.css";
import VueTyped from "vue3-typed-js";
// import { gsap } from "gsap";

// window.gsap = gsap;

createApp(App).use(store).use(router).use(VueTyped).mount("#app");
