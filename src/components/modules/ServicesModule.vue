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
          Graduate Career Coaching Services
        </h2>
        <p class="text-[15px] leading-[24px] text-[rgba(0,0,0,0.7)]">
          Elevate your career with expert coaching tailored to your journey.
          From mastering interviews to entering the professional world, our
          dedicated team ensures your success. Experience personalized career
          coaching and bespoke interview preparation, available in London or via
          global video calls. Unleash your potential with proven strategies and
          insights from leading professionals.
        </p>
        <div class="disclosure mt-5 w-full rounded-2xl bg-white">
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
        title: "Graduate Career Mastery Program",
        content:
          "Transform your career trajectory with our structured coaching program, designed to navigate you through every stage of the job application process:",
        details: [
          "Strategic Application Planning — We tailor your approach, from crafting standout CVs to mastering company-specific research.",
          "Online Application Mastery — Get personalized support to excel in application forms and psychometric tests.",
          "Video Interview Perfection — Learn techniques and partake in mock interviews to enhance your presence on screen.",
          "Assessment Centre Excellence — Engage in real-world scenarios with our case study and group exercise simulations.",
          "Final Interview Preparation — Receive in-depth coaching tailored to the specifics of your prospective role.",
        ],
      },
      {
        id: 2,
        title: "Internship Accelerator Program",
        content:
          "Start your career journey with our Internship Accelerator, designed to transform theoretical knowledge into practical expertise. Our program includes:",
        details: [
          "Career Path Guidance — Personalized advice to refine your professional goals.",
          "Enhanced Interview Skills — Specialized coaching to boost your confidence and effectiveness.",
          "Professional CV and Cover Letter Services — Make your first impression count with expertly crafted application documents.",
          "Exclusive Industry Referrals — Leverage our network across 30+ industries for internship placements that often lead to full-time offers.",
        ],
      },
      {
        id: 3,
        title: "Traineeship Transformation Program",
        content:
          "Take a significant leap in your career with our Traineeship Program, which offers:",
        details: [
          "Customized Mentorship — Gain insights and training from industry leaders in top global companies.",
          "Targeted Career Initiatives — Specialized programs focusing on high-demand roles in project management, marketing, and more.",
          "Continual Professional Development — Engage in extensive one-on-one training sessions that prepare you for the professional world.",
        ],
      },
      {
        id: 4,
        title: "Visa Consultation Services",
        content:
          "Simplify your UK visa application process with our Visa Consultation Services, designed to help you navigate the complexities with ease:",
        details: [
          "Expert Navigation — Our seasoned team guides you through every step, from choosing the right visa to final submission.",
          "Comprehensive Coverage — We handle all visa types, including Skilled Worker Visa and Global Talent Visa, ensuring you meet every requirement.",
          "Success-Driven Support — Benefit from our end-to-end assistance aimed at securing your visa approval efficiently.",
        ],
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
