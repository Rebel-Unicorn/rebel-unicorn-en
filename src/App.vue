<template>
  <main class="relative w-screen">
    <TopNavbar />
    <router-view />
  </main>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  components: {
    TopNavbar,
  },
  setup() {
    const store = useStore();
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const successesUrl = process.env.VUE_APP_CMS_RECENTSUCCESSES_ENDPOINT;
    const coachesUrl = process.env.VUE_APP_CMS_COACHES_ENDPOINT;

    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };

    const getCoaches = async () => {
      try {
        const response = await axios.get(`${baseUrl}${coachesUrl}`);
        let res = response.data.data;
        console.log(res, "resss");
        store.commit("setAvailableCoaches", reorderResponse(res));
      } catch (error) {
        console.error(error);
      }
    };
    const getSuccesses = async () => {
      try {
        const response = await axios.get(`${baseUrl}${successesUrl}`);
        let res = response.data.data;
        // console.log(res, "resss");
        store.commit("setAvailableSuccesses", reorderResponse(res));
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      console.log(
        "message from app",
        store.state.app,
        process.env.VUE_APP_CMS_COACHES_ENDPOINT
      );
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
      getCoaches();
      getSuccesses();
      // store.commit("setModalActive", {
      //   status: false,
      //   message: null,
      // });
    });

    return {};
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
