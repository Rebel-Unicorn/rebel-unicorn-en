<template>
  <div class="scroll-wrapper flex flex-nowrap overflow-x-hidden w-screen">
    <section
      id="home"
      class="scroll-section section-1 bg-[white] text-black h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section One</h1>
    </section>
    <section
      id="services"
      class="scroll-section section-2 bg-[black] text-white h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section Two</h1>
    </section>
    <section
      id="successes"
      class="scroll-section section-3 bg-[white] text-black h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section Three</h1>
    </section>
    <section
      id="coaching"
      class="scroll-section section-4 bg-[black] text-white h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section Four</h1>
    </section>
    <section
      id="testimonials"
      class="scroll-section section-5 bg-[white] text-black h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section Five</h1>
    </section>
    <section
      id="learn-more"
      class="scroll-section section-6 bg-[black] text-white h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <h1 class="text-[48px] font-bold uppercase">Section Six</h1>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, onBeforeMount, computed, ref, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onBeforeMount(() => {
      gsap.registerPlugin(ScrollTrigger);
    });
    console.log(windowWidth.value);
    onMounted(() => {
      document.addEventListener("resize", updateWidth());

      const updatedWindowWidth = computed(() => windowWidth.value);
      // const tl = gsap.timeline();
      let sections = gsap.utils.toArray(".scroll-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-wrapper",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + updatedWindowWidth.value,
        },
      });
    });
    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });

    return {};
  },
};
</script>
<style></style>
