import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/global.css";
// import { gsap } from "gsap";

// window.gsap = gsap;

createApp(App).use(store).use(router).mount("#app");
