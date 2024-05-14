<template>
  <div
    class="successes-background lg:w-screen w-[inherit] lg:h-screen h-screen flex lg:flex-row flex-col flex-1"
  >
    <VerticalAnimatedText content="Successes" v-if="windowWidth >= 1025" />
    <HorizontalAnimatedText v-else content="Successes" />
    <!-- <div
      class="success-wrapper xl:w-screen lg:w-[revert-layer] md:w-[calc(100vw-120px)] lg:mx-0 mx-auto xl:h-screen h-[200vh] flex xl:flex-row xl:flex-nowrap flex-col xl:py-0 py-8"
    >
      <div
        class="sm:mx-[58px] md:mx-0 mx-4 relative xl:w-[calc(100vw-121px)] w-auto h-full flex xl:flex-row xl:flex-nowrap flex-col xl:py-0 py-8 xl:pt-0 sm:pt-[130px] pt-[60px]"
      >
        <div
          class="left xl:ml-[58px] xl:w-[calc(100%-130px)] w-full lg:h-[30%] xl:h-full lg:pb-[130px] pb-[52px] flex flex-col xl:justify-end"
        >
          <h2
            class="lg:text-[48px] text-[38px] lg:leading-[50px] leading-[38px] font-[600] mb-4"
          >
            Hear more about our successes
          </h2>
          <p class="leading-[24px] text-[rgba(0,0,0,0.7)]">
            Watch and read testimonials from parents, as well as both UK and
            <a
              href="https://graduatecoach.co.uk/international-graduate-coaching/"
              target="_blank"
              rel="noopener noreferrer"
              >international students</a
            >, who have benefited from our
            <a
              href="https://graduatecoach.co.uk/one-to-one-coaching/"
              target="_blank"
              rel="noopener noreferrer"
              >career coaching</a
            >
            sessions.
          </p>
        </div>
        <div class="right w-full h-full">
          <div class="success-vid-img w-full h-full">
            <button class="vid-utils">
              <span class="block play-icon hover:scale-90 transition-all">
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="55"
                    cy="55"
                    r="55"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <g filter="url(#filter0_b_200_344)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M54.4928 95.0725C77.5447 95.0725 96.2319 76.3853 96.2319 53.3334C96.2319 30.2815 77.5447 11.5942 54.4928 11.5942C31.4409 11.5942 12.7537 30.2815 12.7537 53.3334C12.7537 76.3853 31.4409 95.0725 54.4928 95.0725ZM47.9711 68.6434L71.4493 55.5205C73.1884 54.5485 73.1884 52.1183 71.4493 51.1462L47.9711 38.0233C46.2319 37.0512 44.058 38.2663 44.058 40.2105L44.058 66.4563C44.058 68.4004 46.2319 69.6155 47.9711 68.6434Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_200_344"
                      x="-3.24634"
                      y="-4.40576"
                      width="115.478"
                      height="115.478"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="8"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_200_344"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_200_344"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <span
                class="block rounded-full text-white hover:text-black transition-all text-sm font-normal py-2 px-4 border-white border mt-10 hover:bg-[#ffffff7d]"
              >
                Watch story
              </span>
            </button>
          </div>
        </div>
      </div>

      <SuccessProofModule />
    </div> -->
    <div class="w-full py-[120px] lg:px-8 px-4">
      <div
        class="heading w-full md:max-w-[63.3%] max-w-full md:mb-10 mb-[62px]"
      >
        <h2
          class="lg:text-[48px] text-[38px] lg:leading-[50px] leading-[38px] font-[600] mb-3"
        >
          Hear About Our Successes
        </h2>
        <p class="text-[18px] leading-[32px] text-[rgba(0,0,0,0.7)]">
          We have helped over 5000 students land roles with organizations like
          these
        </p>
      </div>
      <div
        class="companies-wrapper w-full h-full max-h-[70%] grid md:grid-cols-4 grid-cols-3 items-center justify-items-center gap-5 lg:gap-y-5 lg:gap-x-5 pb-8"
      >
        <img
          v-for="(company, id) in companyLogos.slice(0, 12)"
          :key="`${company.name}-$${id}`"
          class="my-2"
          :src="company.url"
          :alt="`${company.name} logo`"
        />
      </div>
      <div class="cta w-full flex items-center justify-center">
        <router-link to="/successes">
          <button
            class="fill-btn overflow-hidden py-2 px-4 border border-black relative"
            id="dynamic-successes-pseudo-content"
          >
            See Recent Successes
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
// import SuccessProofModule from "./SuccessProof.vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    VerticalAnimatedText,
    HorizontalAnimatedText,
    // SuccessProofModule,
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    const companyLogos = ref([
      { name: "tesco", url: require("../../assets/svg/tesco-logo.svg") },
      {
        name: "civil service",
        url: require("../../assets/svg/civil-service-logo.svg"),
      },
      {
        name: "Sainsbury",
        url: require("../../assets/svg/sainsbury-logo.svg"),
      },
      {
        name: "Transport For London",
        url: require("../../assets/svg/london-transport-logo.svg"),
      },
      { name: "Barclays", url: require("../../assets/svg/barclays-logo.svg") },
      { name: "Google", url: require("../../assets/svg/google-logo.svg") },
      { name: "NHS", url: require("../../assets/svg/nhs-logo.svg") },
      {
        name: "LLoyds Bank",
        url: require("../../assets/svg/lloyds-bank-logo.svg"),
      },
      { name: "facebook", url: require("../../assets/svg/facebook-logo.svg") },
      { name: "Amazon", url: require("../../assets/svg/amazon-logo.svg") },
      {
        name: "Bloomberg",
        url: require("../../assets/svg/bloomberg-logo.svg"),
      },
      { name: "Aviva", url: require("../../assets/svg/aviva-logo.svg") },
      { name: "Savills", url: require("../../assets/svg/savills-logo.svg") },
      {
        name: "NetworkRail",
        url: require("../../assets/svg/networkrail-logo.svg"),
      },
      { name: "Delloite.", url: require("../../assets/svg/deloitte-logo.svg") },
      {
        name: "Goldman Sachs",
        url: require("../../assets/svg/goldmansachs-logo.svg"),
      },
      { name: "pwc", url: require("../../assets/svg/pwc-logo.svg") },
      { name: "Coca Cola", url: require("../../assets/svg/cocacola-logo.svg") },
      { name: "JP Morgan", url: require("../../assets/svg/jpmorgan-logo.svg") },
      {
        name: "Walt Disney",
        url: require("../../assets/svg/waltdisney-logo.svg"),
      },
    ]);
    onMounted(() => {
      document.addEventListener("resize", updateWidth());

      const fillBtn = document.getElementById(
        "dynamic-successes-pseudo-content"
      );

      // Update the CSS variable dynamically
      fillBtn.addEventListener("mouseover", () => {
        fillBtn.style.setProperty(
          "--dynamic-content",
          '"See Recent Successes"'
        );
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });
    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });
    return { windowWidth, companyLogos };
  },
};
</script>

<style>
.successes-background a {
  text-decoration: underline;
}
.success-vid-img {
  background: url(../../assets/webp/success-video-image.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: initial;
  image-resolution: 300dpi;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
