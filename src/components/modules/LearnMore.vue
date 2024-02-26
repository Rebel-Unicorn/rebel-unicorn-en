<template>
  <div class="learn-more-background w-full h-full flex flex-1">
    <VerticalAnimatedText content="Learn more" />
    <div class="flex w-full h-full">
      <div class="left footer-img-container relative w-[63.3%]">
        <!-- <img src="" alt="">
        <img src="" alt="">
        <img src="" alt=""> -->
      </div>
      <div class="right">
        <div
          class="px-[65px] pt-[100px] pb-10 h-full relative flex flex-col justify-between"
        >
          <div class="w-full">
            <h2 class="text-[48px] leading-[50.8px] font-[600] mb-8">
              Learn more about by...
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
            <p class="text-right">
              Graduate CoachSpaces, 25 Wilton Rd, London <br />SW1V 1LW
            </p>
          </div>
          <div class="text-right text-[rgba(0,0,0,0.7)] w-full">
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
export default {
  components: {
    VerticalAnimatedText,
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
    return { urls };
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
