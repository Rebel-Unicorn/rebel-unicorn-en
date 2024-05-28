<template>
  <div
    class="service-background w-full h-full flex flex-1 lg:flex-row flex-col"
  >
    <VerticalAnimatedText
      :content="landingPageData?.ServicesComponent?.sectionTitle"
      v-if="windowWidth >= 1025"
    />
    <HorizontalAnimatedText
      v-else
      :content="landingPageData?.ServicesComponent?.sectionTitle"
    />
    <div
      class="lg:pt-[130px] sm:pt-[130px] pt-[60px] lg:pb-0 pb-7 sm:mx-[58px] lg:mx-10 mx-4 relative xl:w-full lg:!w-[calc(100vw-18px)] w-auto xl:h-full h-screen flex xl:flex-row flex-col items-center xl:justify-between"
    >
      <div
        class="left w-full xl:h-full lg:max-w-[644px] lg:mb-0 sm:mb-[65px] mb-[45px]"
      >
        <h2
          class="lg:text-[45px] text-[38px] lg:leading-[48px] leading-[38px] font-[600] mb-4 lg:max-w-[644px] max-w-[504px]"
        >
          {{ landingPageData?.ServicesComponent?.title }}
          <!-- Graduate Career Coaching Services -->
        </h2>
        <div
          v-html="landingPageData?.ServicesComponent?.subtitle"
          v-show="!accordionActive"
          class="text-[14px] leading-[24px] text-[rgba(0,0,0,0.7)]"
        ></div>
        <!-- <p
          v-show="!accordionActive"
          class="text-[14px] leading-[24px] text-[rgba(0,0,0,0.7)]"
        >
          Elevate your career with expert coaching tailored to your journey.
          From mastering interviews to entering the professional world, our
          dedicated team ensures your success. Experience personalized career
          coaching and bespoke interview preparation, available in London or via
          global video calls. Unleash your potential with proven strategies and
          insights from leading professionals.
        </p> -->
        <div class="disclosure mt-5 w-full rounded-2xl bg-white">
          <Accordion :accordionData="items" />
        </div>
      </div>
      <div
        class="right w-full xl:max-w-[440px] max-w-full xl:h-full lg:pl-[20px] pl-0"
      >
        <div
          id="ft-img"
          class="ft-img w-full lg:h-[644px] md:h-[600px] sm:h-[400px]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import Accordion from "@/components/disclosure/DisclosureComponent.vue";
import { ref, onMounted, onUnmounted, computed, onBeforeMount } from "vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { useStore } from "vuex";

export default {
  components: {
    VerticalAnimatedText,
    Accordion,
    HorizontalAnimatedText,
  },
  setup() {
    const store = useStore();
    const windowWidth = ref(window.innerWidth);
    const landingPageData = computed(() => store.state.app.landingPageData);

    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      window.addEventListener("resize", updateWidth());
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth());
    });
    const items = ref([]);
    onBeforeMount(() => {
      const landingPageData = computed(() => store.state.app.landingPageData);
      items.value = landingPageData.value?.ServicesComponent?.servicesAccordion;
    });
    onMounted(() => {
      const imageContainer = document.getElementById("ft-img");
      imageContainer.style.backgroundImage = `url(${landingPageData.value?.ServicesComponent?.servicesImage?.data?.attributes?.url})`;
    });
    return {
      items,
      windowWidth,
      accordionActive: computed(() => store.state.app.accordionActive),
      landingPageData,
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
