<template>
  <SplashScreen v-if="appLoading" />
  <main
    v-if="landingPageData || !appLoading"
    class="relative w-screen transition-all tracking-wide"
  >
    <TopNavbar v-if="landingPageData" />
    <router-view />
    <BaseModal :modalActive="applicationModal">
      <ApplicationForm :key="storedLocale" />
    </BaseModal>
  </main>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import SplashScreen from "@/components/SplashScreen.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import ApplicationForm from "./components/forms/ApplicationForm.vue";
import CMSService from "./services/cms.service";

export default {
  components: {
    TopNavbar,
    SplashScreen,
    BaseModal,
    ApplicationForm,
  },
  setup() {
    const store = useStore();
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const successesUrl = process.env.VUE_APP_CMS_RECENTSUCCESSES_ENDPOINT;
    const coachesUrl = process.env.VUE_APP_CMS_COACHES_ENDPOINT;
    const testimonialsUrl = process.env.VUE_APP_CMS_TESTIMONIALS_ENDPOINT;
    const appLoading = computed(() => store.state.app.appLoading);
    const storedLocale = computed(() => store.state.app.locale);
    // eslint-disable-next-line no-unused-vars
    const applicationModal = computed(() => store.state.app.applicationModal);
    // eslint-disable-next-line no-unused-vars
    const modalActive = computed(() => store.state.app.modalActive);
    const landingPageData = computed(() => store.state.app.landingPageData);

    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const loading = ref(true);
    const getData = async () => {
      // appLoading.value = true;
      store.commit("setAppLoading", true);

      try {
        const coachesResponse = await axios.get(
          `${baseUrl}${coachesUrl}&locale=${storedLocale.value}`
        );
        const successesResponse = await axios.get(
          `${baseUrl}${successesUrl}&locale=${storedLocale.value}`
        );
        const testimonialsResponse = await axios.get(
          `${baseUrl}${testimonialsUrl}&locale=${storedLocale.value}`
        );
        const allDataResponse = await CMSService.getAllDataByLocale(
          storedLocale.value
        );

        if (
          coachesResponse.status === 200 &&
          successesResponse.status === 200 &&
          testimonialsResponse.status === 200 &&
          allDataResponse.status === 200
        ) {
          // appLoading.value = false;
          store.commit("setAppLoading", false);
        }
        // console.log(res, "resss");
        store.commit(
          "setAvailableCoaches",
          reorderResponse(coachesResponse.data.data)
        );
        store.commit(
          "setAvailableSuccesses",
          reorderResponse(successesResponse.data.data)
        );
        store.commit(
          "setAvailableTestimonials",
          reorderResponse(testimonialsResponse.data.data)
        );
        store.commit(
          "setLandingPageData",
          allDataResponse.data?.data?.attributes
        );

        store.commit("setAppLoading", false);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line no-unused-vars
    onMounted(() => {
      window.addEventListener("load", (event) => {
        console.log(event, "page is fully loaded");
      });
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
      store.commit("setApplicationModal", false);
      getData();
    });
    watchEffect(() => {
      if (storedLocale.value !== "en") {
        getData();
      } else {
        getData();
      }
    });

    return {
      appLoading,
      loading,
      applicationModal,
      modalActive,
      landingPageData,
      storedLocale,
    };
  },
};
</script>

<style>
/* main {
  isolation: isolate;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
