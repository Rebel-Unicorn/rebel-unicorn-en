<template>
  <SplashScreen v-if="appLoading" />
  <main class="relative w-screen transition-all tracking-wide">
    <TopNavbar />
    <router-view />
    <BaseModal :modalActive="applicationModal">
      <ApplicationForm />
    </BaseModal>
  </main>
</template>

<!-- Create a dropdown switch that holds all available locales to be accessible anywhere within the app, preferably on the top nav -->
<!-- Create a function that fetches all data from the website according to the local selected and stores the data in vuex store - English first as the default locale -->
<!-- Use the provided data response that was gotten from the request and sent to the vuex store (the localized data) to populate the rest of the website -->
<!-- Should store the selected locale (either in vuex store persisting/local storage) -->
<!-- Whenever a refresh is made the selected locale should be used to fetch the data for that locale -->
<!-- Anywhere the user switches the locale on the website, it should trigger an entire refetch of all data in the newly selected locale -->

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { computed, onMounted, ref } from "vue";
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
    // const landingPageData = computed(() => store.state.app.landingPageData);

    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const loading = ref(true);
    const getData = async () => {
      // appLoading.value = true;
      store.commit("setAppLoading", true);

      try {
        const coachesResponse = await axios.get(`${baseUrl}${coachesUrl}`);
        const successesResponse = await axios.get(`${baseUrl}${successesUrl}`);
        const testimonialsResponse = await axios.get(
          `${baseUrl}${testimonialsUrl}`
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
      // const body = document.getElementsByTagName("body");
      // if (applicationModal.value) {
      //   body[0].style.overflow = "hidden";
      // }
      // console.log(
      //   applicationModal.value,
      //   modalActive.value.status,
      //   appLoading.value,
      //   body[0].style.overflow
      // );
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

    return {
      appLoading,
      loading,
      applicationModal,
      modalActive,
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
