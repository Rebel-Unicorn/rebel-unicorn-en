<template>
  <div class="px-4 pb-6">
    <div
      class="w-full max-w-[calc(100vw-200px)] mx-auto mt-[120px] bg-[#F4F4F4] rounded-md p-10"
    >
      <!-- {{ testimonial }} -->
      <div class="head flex items-start justify-normal mb-8">
        <div class="image w-[250px] h-[250px] rounded-full overflow-hidden">
          <img
            :src="testimonial?.attributes?.image?.data?.attributes?.url"
            :alt="`${testimonial?.attributes?.name}-avatar`"
            class="w-full h-full"
          />
          {{ testimonial?.attributes?.image?.data?.attributes?.url }}
        </div>
        <div class="details ml-12 w-[calc(100%-250px)]">
          <h2 class="text-[35px] leading-[45px] font-bold">
            {{ testimonial?.attributes?.name }}
          </h2>
          <hr class="my-4" />
          <div class="">
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-medium text-[20px]">Graduated:</td>
                  <td class="text-[18px]">
                    {{ testimonial?.attributes?.graduate }}
                  </td>
                </tr>
                <tr>
                  <td class="font-medium text-[20px]">Employed:</td>
                  <td class="text-[18px]">
                    {{ testimonial?.attributes?.specialization }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        class="body bg-[#E3E3E3] rounded-md p-8 text-[18px] leading-[28px] tracking-wide"
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
