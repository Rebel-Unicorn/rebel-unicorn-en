<template>
  <div
    class="coaching-background w-full h-full flex flex-1 lg:flex-row flex-col"
  >
    <VerticalAnimatedText
      :content="landingPageData?.CoachingComponent?.sectionTitle"
      v-if="windowWidth >= 1025"
    />
    <HorizontalAnimatedText
      v-else
      :content="landingPageData?.CoachingComponent?.sectionTitle"
    />
    <div class="relative w-full h-full lg:grid grid-cols-2 flex flex-col">
      <div class="left w-full md:h-full h-[345px]">
        <div id="coaching-img" class="coaching-img w-full h-full"></div>
      </div>
      <div
        class="right md:w-[calc(100%-130px)] w-auto h-full md:pt-[130px] pt-[56px] md:mx-0 mx-4 md:ml-[58px] md:mb-0 mb-6 flex flex-col justify-start"
      >
        <h2 class="text-[48px] leading-[50px] font-[600] mb-4">
          {{ landingPageData?.CoachingComponent?.heading }}
        </h2>
        <p
          v-show="!accordionActive"
          class="leading-[24px] text-[rgba(0,0,0,0.7)]"
        >
          {{ landingPageData?.CoachingComponent?.subHeading }}
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
              {{ landingPageData?.CoachingComponent?.coachesCTA.title }}
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
import { ref, onMounted, onUnmounted, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    VerticalAnimatedText,
    Accordion,
    HorizontalAnimatedText,
  },
  setup() {
    const store = useStore();
    const landingPageData = computed(() => store.state.app.landingPageData);

    const items = ref([]);
    onBeforeMount(() => {
      items.value = landingPageData.value?.CoachingComponent?.coachActivity;
    });

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
        fillBtn.style.setProperty(
          "--dynamic-content",
          `"${landingPageData.value?.CoachingComponent?.coachesCTA.title}"`
        );
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth());
    });
    // coaching-img
    onMounted(() => {
      const imageContainer = document.getElementById("coaching-img");
      imageContainer.style.backgroundImage = `url(${landingPageData.value?.CoachingComponent?.coachingImage?.data?.attributes?.url})`;
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
