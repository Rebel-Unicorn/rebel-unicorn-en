<template>
  <div
    class="successes-background lg:w-screen w-[inherit] h-screen flex md:flex-row flex-col flex-1"
  >
    <VerticalAnimatedText content="Successes" v-if="windowWidth >= 767" />
    <HorizontalAnimatedText v-else content="Successes" />
    <div
      class="sm:mx-[58px] lg:mx-0 mx-4 relative lg:w-[inherit] w-auto h-full flex lg:flex-row lg:flex-nowrap flex-col lg:py-0 py-8 xl:pt-0 sm:pt-[130px] pt-[60px]"
    >
      <div
        class="left xl:ml-[58px] lg:w-[calc(100%-130px)] w-full lg:h-[30%] xl:h-full lg:pb-[130px] pb-[52px] flex flex-col xl:justify-end"
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
        <!-- https://graduatecoach.co.uk/international-graduate-coaching/ -->
        <!-- https://graduatecoach.co.uk/one-to-one-coaching/ -->
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
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
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
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    VerticalAnimatedText,
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
    return { windowWidth };
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
