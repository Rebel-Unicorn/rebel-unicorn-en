<template>
  <div
    class="learn-more-background w-full h-full flex md:flex-row flex-col flex-1"
  >
    <VerticalAnimatedText content="Learn more" v-if="windowWidth >= 769" />
    <HorizontalAnimatedText v-else content="Learn more" />
    <div class="flex lg:flex-row flex-col w-full h-full">
      <div
        class="left footer-img-container relative lg:w-[63.3%] w-full h-screen lg:max-h-full max-h-[489px]"
      >
        <!-- <img src="" alt="">
        <img src="" alt="">
        <img src="" alt=""> -->
      </div>
      <div class="right">
        <div
          class="lg:px-[65px] md:px-[45px] px-4 md:pt-[100px] pt-12 pb-10 h-full relative flex flex-col justify-between"
        >
          <div class="w-full md:mb-0 mb-6">
            <h2 class="text-[48px] leading-[50.8px] font-[600] mb-8">
              Learn more about us by...
            </h2>
            <ul class="mb-6">
              <li
                v-for="(url, i) in urls"
                :key="`${url.name}-${i}`"
                class="border-b text-[18px] border-[rgba(11,11,11,0.2)] py-4 px-3"
              >
                <a :href="url.url">{{ url.name }}</a>
              </li>
            </ul>
            <p class="md:text-right text-left">
              Graduate CoachSpaces, 25 Wilton Rd, London <br />SW1V 1LW
            </p>
          </div>
          <div class="md:text-right text-left text-[rgba(0,0,0,0.7)] w-full">
            <a href="#">Privacy Policy</a>
            <p>Copyright © 2024 RebelUnicorn. All rights reserved</p>
          </div>
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
    const urls = [
      { name: "Our Blog", url: "#" },
      { name: "Subscribe to Our Newsletter", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "WeChat", url: "#" },
      { name: "X.com", url: "#" },
    ];
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
    return { urls, windowWidth };
  },
};
</script>

<style>
.footer-img-container {
  background: url(../../assets/webp/footer-img.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  image-resolution: 300dpi;
}
</style>
