<template>
  <div class="scroll-wrapper flex flex-nowrap overflow-x-hidden w-screen">
    <section
      id="home"
      class="scroll-section section-1 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <HomeModule />
    </section>
    <section
      id="services"
      class="scroll-section section-2 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <ServicesModule />
    </section>
    <section
      id="successes"
      class="scroll-section section-3 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <SuccessesModule />
    </section>
    <section
      id="coaching"
      class="scroll-section section-4 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <CoachingModule />
    </section>
    <section
      id="testimonials"
      class="scroll-section section-5 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <TestimonialsModule />
    </section>
    <section
      id="learn-more"
      class="scroll-section section-6 h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <LearnMore />
    </section>
  </div>
  <div
    class="hidden w-full max-w-[max-content] fixed bottom-[50px] left-[50%] translate-x-[-50%] rounded-full p-1 backdrop-blur-lg backdrop-opacity-80 shadow-md bg-[#80808073]"
  >
    <nav class="bottom-nav w-full rounded-full">
      <a
        v-for="url in urls"
        :key="url.id"
        :href="url.href"
        :class="[
          `py-2 px-4 rounded-full font-normal text-[16px] leading-[19.36px] text-white`,
        ]"
      >
        {{ url.name }}
      </a>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, onBeforeMount, ref, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HomeModule from "@/components/modules/HomeModule.vue";
import ServicesModule from "@/components/modules/ServicesModule.vue";
import SuccessesModule from "@/components/modules/SuccessesModule.vue";
import CoachingModule from "@/components/modules/CoachingModule.vue";
import TestimonialsModule from "@/components/modules/TestimonialsModule.vue";
import LearnMore from "@/components/modules/LearnMore.vue";

export default {
  name: "HomeView",
  components: {
    HomeModule,
    ServicesModule,
    SuccessesModule,
    CoachingModule,
    TestimonialsModule,
    LearnMore,
  },
  setup() {
    const urls = ref([
      { id: 1, name: "Home", href: "#home", active: true },
      { id: 2, name: "Services", href: "#services", active: false },
      { id: 3, name: "Successes", href: "#successes", active: false },
      { id: 4, name: "Coaching", href: "#coaching", active: false },
      { id: 5, name: "Testimonials", href: "#testimonials", active: false },
      { id: 6, name: "Learn more", href: "#learn-more", active: false },
    ]);
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onBeforeMount(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
    });
    onMounted(() => {
      document.addEventListener("resize", updateWidth());

      const updatedWindowWidth = computed(() => windowWidth.value);
      const sections = gsap.utils.toArray(".scroll-section");
      // const sections = gsap.utils.toArray("section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-wrapper",
          pin: true,
          scrub: 0.3,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + updatedWindowWidth.value,
          // onToggle: (self) => console.log(self.isActive),
        },
      });
    });

    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });

    return { urls };
  },
};
</script>
<style>
section {
  overflow-y: hidden;
}
</style>
