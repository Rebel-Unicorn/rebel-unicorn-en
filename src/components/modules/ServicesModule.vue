<template>
  <div class="service-background w-full h-full flex flex-1">
    <VerticalAnimatedText content="Services" />
    <div
      class="pt-[130px] mx-[58px] relative w-full h-full flex items-centers justify-between"
    >
      <div class="left w-full h-full max-w-[644px]">
        <h2 class="text-[48px] leading-[50px] font-[600] mb-4">
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
      <div class="right w-[440px] h-full pr-[10px]">
        <div class="ft-img w-full h-[644px]"></div>
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
}
</style>
