<template>
  <div
    class="home-background w-full h-full min-h-screen lg:flex flex-row flex-nowrap md:pb-0 pb-7"
  >
    <div
      class="left lg:w-[45%] w-auto h-screen xl:h-full flex flex-col items-start xl:justify-start justify-center pt-[122px] sm:mx-10 xl:mx-[90px] mx-4 relative"
    >
      <h1
        class="mt-[70px] mb-3 xl:text-[62px] lg:text-[55px] text-[48px] xl:leading-[62.75px] lg:leading-[55.8px] leading-[48.8px] font-[700] min-h-[125px] flex items-start"
      >
        <VueTyped
          :strings="typedStrings"
          :startDelay="1000"
          :typeSpeed="100"
          :backSpeed="50"
          :loop="true"
          :showCursor="false"
        >
          <span class="typing block"></span>
        </VueTyped>
      </h1>
      <div
        v-html="landingPageData?.mainHeading?.subtitle"
        class="leading-6 text-[rgba(0,0,0,0.7)] mb-[75px]"
      ></div>
      <div class="button-container relative ml-8">
        <!-- <button id="sign-up" class="sign-up-btn">
          <span class="block w-[40px]">
            <svg
              width="41"
              height="38"
              viewBox="0 0 41 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.3553 19.1359V19.1338V19.1316C35.3546 18.7599 35.1979 18.3883 34.8849 18.1047L23.6447 7.91748C23.0176 7.34912 22.0009 7.34912 21.3738 7.91748C20.7467 8.48576 20.7467 9.40725 21.3738 9.97561L29.912 17.714H6.49102C5.42826 17.714 4.88092 18.3496 4.88092 19.1338C4.88092 19.9179 5.42826 20.5536 6.49102 20.5536H29.912L21.3738 28.2919C20.7467 28.8603 20.7467 29.7818 21.3738 30.3501C22.0009 30.9184 23.0176 30.9184 23.6447 30.3501L34.8849 20.1629C35.1979 19.8792 35.3546 19.5076 35.3553 19.1359Z"
                fill="white"
              />
            </svg>
          </span>
        </button> -->
      </div>
    </div>
    <div class="right lg:w-[50%] w-full lg:h-screen md:h-[680px] h-[500px]">
      <div id="hero-img" class="hero-img h-full w-full"></div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    // const appLoaded = computed(() => store.state.app.appLoaded);
    const typedStrings = ref([""]);
    const landingPageData = computed(() => store.state.app.landingPageData);

    if (landingPageData.value) {
      onBeforeMount(() => {
        const landingPageData = computed(() => store.state.app.landingPageData);
        typedStrings.value = [
          ...typedStrings.value,
          landingPageData.value?.mainHeading?.title1,
          landingPageData.value?.mainHeading?.title2,
        ];
      });
      onMounted(() => {
        const imageContainer = document.getElementById("hero-img");
        imageContainer.style.backgroundImage = `url(${landingPageData.value?.mainHeading?.mainHeroImage?.data?.attributes?.url})`;
      });
    }
    return { typedStrings, landingPageData };
  },
};
</script>

<style>
.home-background {
  background: radial-gradient(
      circle at top left,
      rgba(167 0 255 / 38%),
      transparent 400px
    ),
    radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.5),
      transparent 100px
    ),
    radial-gradient(at bottom left, rgba(255, 255, 255, 0.5), transparent 100px),
    radial-gradient(
      at bottom right,
      rgba(255, 255, 255, 0.5),
      transparent 100px
    );
}
.home-background .right .hero-img {
  /* background: url(../../assets/svg/home-img-2.svg); */
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: initial;
  image-resolution: 300dpi;
}
@media only screen and (max-width: 1024px) {
  .home-background .right .hero-img {
    /* background: url(../../assets/webp/home-image-1.webp); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: initial;
    image-resolution: 300dpi;
  }
}

.sign-up-btn {
  background-color: #772a8b;
  color: #fff;
  height: 100px;
  width: 100px;
  font-size: 16px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-up-btn::before {
  content: "";
  background: url(../../assets/webp/cta-vector.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
  position: absolute;
  top: -25px;
  left: -25px;
  bottom: 0;
  right: 0;
  animation-name: rotateVector;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
