<template>
  <div
    class="service-background w-full h-full flex flex-1 lg:flex-row flex-col"
  >
    <VerticalAnimatedText content="Services" v-if="windowWidth >= 1025" />
    <HorizontalAnimatedText v-else content="Services" />
    <div
      class="lg:pt-[130px] sm:pt-[130px] pt-[60px] lg:pb-0 pb-7 sm:mx-[58px] lg:mx-10 mx-4 relative xl:w-full lg:!w-[calc(100vw-18px)] w-auto xl:h-full h-screen flex xl:flex-row flex-col items-center xl:justify-between"
    >
      <div
        class="left w-full xl:h-full lg:max-w-[644px] lg:mb-0 sm:mb-[65px] mb-[45px]"
      >
        <h2
          class="lg:text-[48px] text-[38px] lg:leading-[50px] leading-[38px] font-[600] mb-4 lg:max-w-[644px] max-w-[504px]"
        >
          Graduate Scheme Interview 1-on-1 Coaching
        </h2>
        <p class="leading-[24px] text-[rgba(0,0,0,0.7)]">
          Transform and elevate your career prospects with personalized
          mentorship, practical tasks and networking opportunities.
        </p>
        <div class="disclosure mt-[29px] w-full rounded-2xl bg-white">
          <Accordion :accordionData="items" />
        </div>
      </div>
      <div
        class="right w-full xl:max-w-[440px] max-w-full xl:h-full lg:pl-[20px] pl-0"
      >
        <div class="ft-img w-full lg:h-[644px] md:h-[600px] sm:h-[400px]"></div>
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
          "Our one-to-one graduate coaching transforms your career prospects with offers comprehensive job application support including tailored strategies, CV revisions, online test assistance, video interview coaching, assessment center preparation, and final round interview practice.",
      },
      {
        id: 2,
        title: "Digital Internship",
        content:
          "At Rebel Unicorn Career we offer a comprehensive internship program, guiding students from consultation to job acquisition, emphasizing early immersion, internal referrals, and tailored career support across various industries.",
      },
      {
        id: 3,
        title: "Trainee Program",
        content:
          "Expand your career journey one step further with our personalized mentorship, tailored guidance, and transition opportunities, including 15 hours of one-on-one classes with Top 500 company mentors and access to 10 key positions.",
      },
      {
        id: 4,
        title: "Visa Success, Worldwide Access.",
        content:
          "Streamlined visa application process with expert legal team, offering comprehensive services for T5, T2, and Global Talent Visas, ensuring reliable support from assessment to PR & Nationality Application.",
      },
      // {
      //   id: 5,
      //   title: "Books",
      //   content:
      //     "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      // },
      // {
      //   id: 6,
      //   title: "Free Resources",
      //   content:
      //     "Our one-to-one graduate coaching transforms your career prospects with lifelong skills gained through personal mentorship, practical tasks and an introduction to a network of contacts.",
      // },
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
