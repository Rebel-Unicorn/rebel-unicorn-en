<template>
  <SplashScreen v-show="appLoading" />
  <div class="mt-20 py-8 px-4 lg:max-w-[calc(100vw-180px)] mx-auto">
    <h1 class="my-4 text-[36px] leading-[46px] font-bold">
      {{ landingPageData?.CoachPage?.title }}
    </h1>
    <p class="mb-8 lg:text-[20px] lg:leading-[30px]">
      {{ landingPageData?.CoachPage?.subtitle }}
    </p>
    <div class="cards w-full">
      <div
        class="cards-container w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-6"
      >
        <div v-for="card in coaches" :key="`${card?.id}`">
          <CoachesCard
            :image="`${card?.attributes?.image?.data?.attributes?.url}`"
            :name="card?.attributes?.name"
            :specialization="card?.attributes?.specializations"
            :biography="card?.attributes?.biography"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-[max-content] max-w-[max-content] fixed bottom-[50px] left-[50%] translate-x-[-50%] rounded-full p-1 backdrop-blur-lg backdrop-opacity-80 shadow-md bg-[#80808073] sm:mx-0 mx-1 hidden"
  >
    <nav
      v-if="windowWidth > 1281"
      class="bottom-nav w-[max-content] rounded-full flex items-center overflow-x-auto"
    >
      <div
        v-for="url in urls"
        :key="url.id"
        :data-section="url.href"
        :class="[
          `sm:py-2 py-[5px] sm:px-4 px-2 rounded-full font-normal text-[16px] leading-[19.36px] !tracking-[0.6px] text-white cursor-pointer transition duration-300 delay-500 ease-in-out whitespace-nowrap`,
        ]"
      >
        {{ url.name }}
      </div>
    </nav>
    <nav
      v-else
      class="bottom-nav w-full md:max-w-[max-content] max-w-[calc(100vw-35px)] mx-auto rounded-full flex items-center overflow-x-auto"
    >
      <a
        v-for="url in urls"
        :key="url.id"
        :data-section="url.href"
        :href="`#${url.href}`"
        :class="[
          `sm:py-2 py-[5px] sm:px-4 px-2 rounded-full font-normal text-[16px] leading-[19.36px] text-white cursor-pointer transition duration-300 delay-50 ease-in-out whitespace-nowrap`,
        ]"
      >
        {{ url.name }}
      </a>
    </nav>
  </div>
</template>

<script>
import CoachesCard from "@/components/CoachesCard.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import SplashScreen from "./../components/SplashScreen.vue";

export default {
  components: {
    CoachesCard,
    SplashScreen,
  },
  setup() {
    const store = useStore();
    const windowWidth = ref(window.innerWidth);
    const appLoading = computed(() => store.state.app.appLoading);
    const coaches = computed(() => store.state.app.availableCoaches);
    const landingPageData = computed(() => store.state.app.landingPageData);

    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(async () => {
      // document.addEventListener("resize", updateWidth());
      window.addEventListener("resize", () => {
        updateWidth();
        console.log("resized");
      });
      // const header = document.getElementsByTagName("header");
      // if (header) {
      //   console.log(header);
      //   header[0].style.backgroundColor = "#ffffffd1";
      //   header[0].style.backdropBlur = "3px";
      //   header[0].classList.add("shadow-lg");
      // }
    });
    onUnmounted(async () => {
      // document.addEventListener("resize", updateWidth());
      window.removeEventListener("resize", () => {
        updateWidth();
        console.log("resized");
      });
    });
    const urls = ref([
      { id: 1, name: "Home", href: "home", active: true },
      { id: 2, name: "Services", href: "services", active: false },
      { id: 3, name: "Successes", href: "successes", active: false },
      { id: 4, name: "Coaching", href: "coaching", active: false },
      { id: 5, name: "Testimonials", href: "testimonials", active: false },
      { id: 6, name: "Learn more", href: "learn-more", active: false },
    ]);
    return { urls, coaches, windowWidth, appLoading, landingPageData };
  },
};
</script>

<style lang="scss" scoped></style>
