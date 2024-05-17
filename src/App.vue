<template>
  <SplashScreen v-if="loading" />
  <main class="relative w-screen transition-all tracking-wide">
    <TopNavbar />
    <router-view />
    <BaseModal :modalActive="applicationModal">
      <div
        class="lg:w-[50%] w-full max-h-[90vh] overflow-hidden overflow-y-auto flex flex-col items-start border border-gray-300 bg-[white] px-4 rounded-md"
      >
        <ApplicationForm />
      </div>
    </BaseModal>
  </main>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import SplashScreen from "@/components/SplashScreen.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import ApplicationForm from "./components/forms/ApplicationForm.vue";

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

    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const loading = ref(true);
    const getData = async () => {
      loading.value = true;
      try {
        const coachesResponse = await axios.get(`${baseUrl}${coachesUrl}`);
        const successesResponse = await axios.get(`${baseUrl}${successesUrl}`);
        const testimonialsResponse = await axios.get(
          `${baseUrl}${testimonialsUrl}`
        );

        if (
          coachesResponse.status === 200 &&
          successesResponse.status === 200 &&
          testimonialsResponse.status === 200
        ) {
          loading.value = false;
          console.log(loading.value);
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
        store.commit("setAppLoading", false);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line no-unused-vars
    const applicationModal = computed(() => store.state.app.applicationModal);
    // eslint-disable-next-line no-unused-vars
    const modalActive = computed(() => store.state.app.modalActive);
    // eslint-disable-next-line no-unused-vars
    const appLoading = computed(() => store.state.app.appLoading);
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
      // appLoading: computed(() => store.state.app.appLoading),
      loading,
      // applicationModal: computed(() => store.state.app.applicationModal),
      applicationModal,
      modalActive,
      appLoading,
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
