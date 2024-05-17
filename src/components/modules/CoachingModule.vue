<template>
  <div
    class="coaching-background w-full h-full flex flex-1 lg:flex-row flex-col"
  >
    <VerticalAnimatedText content="Coaching" v-if="windowWidth >= 1025" />
    <HorizontalAnimatedText v-else content="Coaching" />
    <div class="relative w-full h-full lg:grid grid-cols-2 flex flex-col">
      <div class="left w-full md:h-full h-[345px]">
        <div class="coaching-img w-full h-full"></div>
      </div>
      <div
        class="right md:w-[calc(100%-130px)] w-auto h-full md:pt-[130px] pt-[56px] md:mx-0 mx-4 md:ml-[58px] md:mb-0 mb-6 flex flex-col justify-start"
      >
        <h2 class="text-[48px] leading-[50px] font-[600] mb-4">
          Our career coaches help you to...
        </h2>
        <p
          v-show="!accordionActive"
          class="leading-[24px] text-[rgba(0,0,0,0.7)]"
        >
          We help you to discover your career path and create career plans to
          get you from where you are today to your ideal job.
        </p>
        <div class="items-wrap mt-9">
          <Accordion :accordionData="items" />
        </div>
        <div class="w-full text-center">
          <router-link to="/coaches" class="block my-4">
            <button
              class="fill-btn overflow-hidden py-2 px-4 border border-black relative"
              id="dynamic-coaches-pseudo-content"
            >
              See Our Coaches
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import Accordion from "@/components/disclosure/DisclosureComponent.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    VerticalAnimatedText,
    Accordion,
    HorizontalAnimatedText,
  },
  setup() {
    const store = useStore();

    const items = ref([
      {
        id: 1,
        title: "Help you understand yourself.",
        content:
          "Feel unsure of your skills and competencies? Struggle to articulate them on your CV or in interviews? Talk to us. We’re experts at teasing them out of you.",
      },
      {
        id: 2,
        title: "Help you understand the graduate career market.",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 3,
        title: "Help you discover the career that's right for you. ",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
    ]);
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      window.addEventListener("resize", updateWidth());
      // Get the element
      const fillBtn = document.getElementById("dynamic-coaches-pseudo-content");

      // Update the CSS variable dynamically
      fillBtn.addEventListener("mouseover", () => {
        fillBtn.style.setProperty("--dynamic-content", '"See Our Coaches"');
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth());
    });
    return {
      items,
      windowWidth,
      accordionActive: computed(() => store.state.app.accordionActive),
    };
  },
};
</script>

<style>
.coaching-img {
  background: url(../../assets/webp/coaching-image-1.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: initial;
  image-resolution: 300dpi;
}
@media only screen and (max-width: 48em) {
  .coaching-img {
    background: url(../../assets/webp/coaching-image-small.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: initial;
    image-resolution: 300dpi;
  }
}
</style>
