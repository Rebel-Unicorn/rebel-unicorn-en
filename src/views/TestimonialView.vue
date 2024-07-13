<template>
  <SplashScreen v-show="!allTestimonials" />
  <div v-show="allTestimonials" class="testimonialss">
    <div class="mt-20 py-8 px-4 lg:max-w-[calc(100vw-180px)] mx-auto">
      <h1 class="mt-4 mb-8 text-[36px] leading-[46px] font-bold">
        Our Testimonials
      </h1>
      <div class="cards w-full">
        <div
          class="cards-container w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-6"
        >
          <RouterLink
            :to="`/testimonials/${card?.id}`"
            v-for="card in allTestimonials"
            :key="`${card?.id}`"
          >
            <Card
              :image="`${card?.attributes?.image?.data?.attributes?.url}`"
              :title="card?.attributes?.name"
              :graduated="card?.attributes?.graduate"
              :content="card?.attributes?.brief"
            />
          </RouterLink>
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
  </div>
</template>

<script>
import SplashScreen from "@/components/SplashScreen.vue";
import Card from "@/components/TestimonialCard.vue";
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  components: {
    Card,
    SplashScreen,
  },
  setup() {
    const store = useStore();
    const allTestimonials = computed(
      () => store.state.app.availableTestimonials
    );
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const testimonialsUrl = process.env.VUE_APP_CMS_TESTIMONIALS_ENDPOINT;
    const appLoading = computed(() => store.state.app.appLoading);
    const storedLocale = computed(() => store.state.app.locale);
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const getTestimonials = async () => {
      store.commit("setAppLoading", true);
      try {
        const response = await axios.get(
          `${baseUrl}${testimonialsUrl}&locale=${storedLocale.value}`
        );
        if (response.status === 200) {
          console.log(response.data.data, "page");

          store.commit(
            "setAvailableTestimonials",
            reorderResponse(response.data.data)
          );
          store.commit("setAppLoading", false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {
      window.addEventListener("resize", () => {
        updateWidth();
        console.log("resized");
      });
    });
    onUnmounted(() => {
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
    watchEffect(() => {
      getTestimonials();
    });

    return { urls, allTestimonials, windowWidth, appLoading };
  },
};
</script>

<style lang="scss" scoped></style>
