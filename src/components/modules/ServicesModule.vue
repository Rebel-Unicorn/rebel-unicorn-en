<template>
  <div
    class="service-background w-full h-full flex flex-1 md:flex-row flex-col"
  >
    <VerticalAnimatedText content="Services" v-if="windowWidth >= 767" />
    <HorizontalAnimatedText v-else content="Services" />
    <div
      class="lg:pt-[130px] sm:pt-[130px] pt-[60px] lg:pb-0 pb-7 sm:mx-[58px] lg:mx-10 mx-4 relative lg:w-full w-auto h-full flex lg:flex-row flex-col items-centers justify-between"
    >
      <div
        class="left w-full h-full lg:max-w-[644px] lg:mb-0 sm:mb-[65px] mb-[45px]"
      >
        <h2
          class="lg:text-[48px] text-[38px] lg:leading-[50px] leading-[38px] font-[600] mb-4 lg:max-w-[644px] max-w-[504px]"
        >
          Graduate career coaching services
        </h2>
        <p class="leading-[24px] text-[rgba(0,0,0,0.7)]">
          Our professional coaches provide career coaching and advice for
          graduates, helping you to achieve your full potential. We are experts
          in full career and 1-2-1 interview coaching, conducted face-to-face in
          London, or via video calls.
        </p>
        <div class="disclosure mt-[29px] w-full rounded-2xl bg-white">
          <Accordion :accordionData="items" />
        </div>
      </div>
      <div
        class="right w-full lg:max-w-[440px] max-w-full h-full lg:pl-[20px] pl-0"
      >
        <div class="ft-img w-full lg:h-[644px] sm:h-full h-[420px]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import Accordion from "@/components/disclosure/DisclosureComponent.vue";
import { ref, onMounted, onUnmounted } from "vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
export default {
  components: {
    VerticalAnimatedText,
    Accordion,
    HorizontalAnimatedText,
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      document.addEventListener("resize", updateWidth());
    });
    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });
    const items = ref([
      {
        id: 1,
        title: "One-to-One Graduate Career Coaching",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 2,
        title: "Digital Internship",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 3,
        title: "Graduate Interview Coaching",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 4,
        title: "Online Career Courses",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 5,
        title: "Books",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
      {
        id: 6,
        title: "Free Resources",
        content:
          "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      },
    ]);
    return {
      items,
      windowWidth,
    };
  },
};
</script>

<style>
.ft-img {
  background: url(../../assets/webp/services-image-1.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: initial;
  image-resolution: 300dpi;
  image-rendering: high-quality;
}
</style>
