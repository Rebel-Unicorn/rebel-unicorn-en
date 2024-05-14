<template>
  <div class="px-4 pb-6">
    <div
      class="w-full lg:max-w-[calc(100vw-200px)] mx-auto mt-[120px] bg-[#F4F4F4] rounded-md py-10 lg:px-10 px-6"
    >
      <!-- {{ testimonial }} -->
      <div
        class="head flex flex-col lg:flex-row items-start justify-normal mb-8"
      >
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
        class="body bg-[#E3E3E3] rounded-md lg:py-8 py-6 lg:px-8 px-4 lg:text-[18px] lg:leading-[28px] tracking-wide"
      >
        {{ testimonial?.attributes?.brief }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { useStore } from "vuex";

export default {
  name: "TestimonialPage",
  setup() {
    // const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const testimonial = ref(null);
    const testimonialId = ref();
    const getCurrentRouteSlug = router.currentRoute.value.params.id;
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;

    onBeforeMount(() => {
      testimonialId.value = route.params.id;
    });

    const getTestimonials = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}testimonials/${Number(getCurrentRouteSlug)}?populate=*`
        );
        testimonial.value = response.data.data;
        // store.commit("setAvailableTestimonials", reorderResponse(res));
      } catch (error) {
        console.error(error);
      }
    };
    getTestimonials();

    return { testimonial };
  },
};
</script>

<style lang="scss" scoped></style>
