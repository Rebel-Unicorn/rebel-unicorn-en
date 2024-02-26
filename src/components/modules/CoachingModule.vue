<template>
  <div class="coaching-background w-full h-full flex flex-1">
    <VerticalAnimatedText content="Coaching" />
    <div class="relative w-full h-full grid grid-cols-2">
      <div class="left w-full h-full">
        <div class="coaching-img w-full h-full"></div>
      </div>
      <div
        class="right w-[calc(100%-130px)] h-full pt-[130px] ml-[58px] flex flex-col justify-start"
      >
        <h2 class="text-[48px] leading-[50px] font-[600] mb-4">
          Our career coaches help you to...
        </h2>
        <p class="leading-[24px] text-[rgba(0,0,0,0.7)]">
          We help you to discover your career path and create career plans to
          get you from where you are today to your ideal job.
        </p>
        <div class="items-wrap mt-9">
          <Accordion :accordionData="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import Accordion from "@/components/disclosure/DisclosureComponent.vue";
import { ref } from "vue";

export default {
  components: {
    VerticalAnimatedText,
    Accordion,
  },
  setup() {
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
    return { items };
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
</style>
