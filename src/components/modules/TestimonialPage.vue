<template>
  <SplashScreen v-show="appLoading" />
  <div v-show="!appLoading" class="px-4 pb-6 relative">
    <div
      v-if="testimonial"
      class="w-full lg:max-w-[calc(100vw-200px)] mx-auto mt-[120px] bg-[#F4F4F4] rounded-md py-10 lg:px-10 px-6"
    >
      <!-- {{ testimonial }} -->
      <div
        class="head flex flex-col lg:flex-row items-start justify-normal mb-8 relative"
      >
        <div class="w-full absolute flex items-center justify-end right-0 to-0">
          <router-link
            to="/testimonials"
            type="button"
            class="bg-gray-300 text-white font-medium rounded-full w-12 h-12"
          >
            <img
              src="../../assets/svg/cancel.svg"
              alt="cancel"
              class="w-full h-full"
            />
          </router-link>
        </div>
        <div
          class="image w-[250px] h-[250px] rounded-full overflow-hidden lg:mb-0 mb-6"
        >
          <img
            :src="testimonial?.attributes?.image?.data?.attributes?.url"
            :alt="`${testimonial?.attributes?.name}-avatar`"
            class="w-full h-full"
          />
          {{ testimonial?.attributes?.image?.data?.attributes?.url }}
        </div>
        <div class="details lg:ml-12 lg:w-[calc(100%-250px)] w-full">
          <h2 class="text-[35px] leading-[45px] font-bold">
            {{ testimonial?.attributes?.name }}
          </h2>
          <hr class="my-4" />
          <div class="">
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <td class="lg:w-[110px] w-[90px]"></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-medium lg:text-[20px] align-text-top">
                    Graduated:
                  </td>
                  <td class="lg:text-[18px]">
                    {{ testimonial?.attributes?.graduate }}
                  </td>
                </tr>
                <tr>
                  <td class="font-medium lg:text-[20px] align-text-top">
                    Employed:
                  </td>
                  <td class="lg:text-[18px]">
                    {{ testimonial?.attributes?.specialization }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        v-html="testimonial?.attributes?.brief"
        class="body bg-[#E3E3E3] rounded-md lg:py-8 py-6 lg:px-8 px-4 lg:text-[18px] lg:leading-[28px] tracking-wide"
      ></div>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center h-screen w-screen"
    >
      <p>Entry not found</p>
      <router-link to="/testimonials" class="underline">Go back</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { computed, onBeforeMount, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import SplashScreen from "../SplashScreen.vue";
import { useStore } from "vuex";

export default {
  name: "TestimonialPage",
  components: {
    SplashScreen,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const testimonial = ref(null);
    const testimonialId = ref();
    const getCurrentRouteSlug = router.currentRoute.value.params.id;
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const appLoading = computed(() => store.state.app.appLoading);
    const storedLocale = computed(() => store.state.app.locale);
    // const availableTestimonials = computed(
    //   () => store.state.app.availableTestimonials
    // );
    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    onBeforeMount(() => {
      testimonialId.value = route.params.id;
    });

    const getTestimonials = async () => {
      store.commit("setAppLoading", true);
      try {
        const response = await axios.get(
          `${baseUrl}testimonials?locale=${storedLocale.value}&populate=*`
        );
        if (response.status === 200) {
          console.log(response.data.data, "page");

          store.commit(
            "setAvailableTestimonials",
            reorderResponse(response.data.data)
          );
          store.commit("setAppLoading", false);
          const data = response.data.data;
          testimonial.value = data?.find(
            (obj) => obj.id == getCurrentRouteSlug
          );
          console.log(testimonial.value, "okrrr");
        }
        // store.commit("setAvailableTestimonials", reorderResponse(res));
      } catch (error) {
        console.error(error);
      }
    };

    watchEffect(() => {
      getTestimonials();
    });

    return { testimonial, appLoading };
  },
};
</script>

<style>
.body p > span {
  font-family: "Urbanist", sans-serif !important;
}
</style>
