<template>
  <div>{{ testimonial }}</div>
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
    const testimonialsUrl = process.env.VUE_APP_CMS_TESTIMONIALS_ENDPOINT;

    onBeforeMount(() => {
      testimonialId.value = route.params.id;
    });

    const getTestimonials = async () => {
      let res;
      try {
        const response = await axios.get(`${baseUrl}${testimonialsUrl}`);
        res = response.data.data;
        testimonial.value = res.find(
          (r) => r?.id === Number(getCurrentRouteSlug)
        );
        // console.log(res, "resss");
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
