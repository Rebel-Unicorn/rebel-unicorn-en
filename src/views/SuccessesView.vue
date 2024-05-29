<template>
  <div
    class="w-full lg:max-w-[calc(100vw-180px)] px-4 mx-auto py-10 mt-20 relative"
  >
    <div class="py-10">
      <div
        class="heading w-full md:max-w-[63.3%] max-w-full md:mb-10 mb-[62px] flex items-center justify-between"
      >
        <h3
          class="lg:text-[48px] text-[38px] lg:leading-[50px] leading-[38px] font-[600] mb-3"
        >
          {{ landingPageData?.SuccessPage?.title }}
        </h3>
        <p class="text-[18px] leading-[32px] text-[rgba(0,0,0,0.7)]">
          {{ landingPageData?.SuccessPage?.subtitle }}
        </p>
      </div>
      <div class="successes-table w-full overflow-x-auto">
        <table
          class="table-auto border-collapse w-full border border-gray-400 !text-left"
        >
          <thead class="bg-[#E5E5E5]">
            <tr class="border-b border-b-gray-400">
              <th class="py-2 px-4 border border-gray-400">Name</th>
              <th class="py-2 px-4 border border-gray-400">Company</th>
              <th class="py-2 px-4 border border-gray-400">University</th>
              <th class="py-2 px-4 border border-gray-400">Major</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(ind, indId) in successesData"
              :key="indId"
              class="border-t border-t-gray-400"
            >
              <td class="py-2 px-4 border border-gray-400">{{ ind?.Name }}</td>
              <td class="py-2 px-4 border border-gray-400">
                {{ ind?.Company }}
              </td>
              <td class="py-2 px-4 border border-gray-400">
                {{ ind?.University }}
              </td>
              <td class="py-2 px-4 border border-gray-400">{{ ind?.Major }}</td>
            </tr>
          </tbody>
        </table>
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
import axios from "axios";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const successesUrl = process.env.VUE_APP_CMS_RECENTSUCCESSES_ENDPOINT;
    const successesData = ref(null);
    const storedLocale = computed(() => store.state.app.locale);
    const landingPageData = computed(() => store.state.app.landingPageData);

    const urls = ref([
      { id: 1, name: "Home", href: "home", active: true },
      { id: 2, name: "Services", href: "services", active: false },
      { id: 3, name: "Successes", href: "successes", active: false },
      { id: 4, name: "Coaching", href: "coaching", active: false },
      { id: 5, name: "Testimonials", href: "testimonials", active: false },
      { id: 6, name: "Learn more", href: "learn-more", active: false },
    ]);
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const getSuccesses = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}${successesUrl}&locale=${storedLocale.value}`
        );
        let res = response.data.data;
        successesData.value = reorderResponse(res);
        let refinedData;
        refinedData = successesData.value.map((obj) => ({
          id: obj.id,
          Name: obj.attributes.Name,
          University: obj.attributes.University,
          Major: obj.attributes.Major,
          Company: obj.attributes.Company,
        }));
        successesData.value = refinedData;
        // console.log(successesData.value, "resss");
        store.commit("setAvailableSuccesses", reorderResponse(res));
      } catch (error) {
        console.error(error);
      }
    };
    getSuccesses();
    onMounted(() => {
      // document.addEventListener("resize", updateWidth());
      window.addEventListener("resize", () => {
        updateWidth();
        console.log("resized");
      });
    });
    onUnmounted(() => {
      // document.addEventListener("resize", updateWidth());
      window.removeEventListener("resize", () => {
        updateWidth();
        console.log("resized");
      });
    });
    const companyLogos = ref([
      { name: "tesco", url: require("../assets/svg/tesco-logo.svg") },
      {
        name: "civil service",
        url: require("../assets/svg/civil-service-logo.svg"),
      },
      {
        name: "Sainsbury",
        url: require("../assets/svg/sainsbury-logo.svg"),
      },
      {
        name: "Transport For London",
        url: require("../assets/svg/london-transport-logo.svg"),
      },
      { name: "Barclays", url: require("../assets/svg/barclays-logo.svg") },
      { name: "Google", url: require("../assets/svg/google-logo.svg") },
      { name: "NHS", url: require("../assets/svg/nhs-logo.svg") },
      {
        name: "LLoyds Bank",
        url: require("../assets/svg/lloyds-bank-logo.svg"),
      },
      { name: "facebook", url: require("../assets/svg/facebook-logo.svg") },
      { name: "Amazon", url: require("../assets/svg/amazon-logo.svg") },
      {
        name: "Bloomberg",
        url: require("../assets/svg/bloomberg-logo.svg"),
      },
      { name: "Aviva", url: require("../assets/svg/aviva-logo.svg") },
      { name: "Savills", url: require("../assets/svg/savills-logo.svg") },
      {
        name: "NetworkRail",
        url: require("../assets/svg/networkrail-logo.svg"),
      },
      { name: "Delloite.", url: require("../assets/svg/deloitte-logo.svg") },
      {
        name: "Goldman Sachs",
        url: require("../assets/svg/goldmansachs-logo.svg"),
      },
      { name: "pwc", url: require("../assets/svg/pwc-logo.svg") },
      { name: "Coca Cola", url: require("../assets/svg/cocacola-logo.svg") },
      { name: "JP Morgan", url: require("../assets/svg/jpmorgan-logo.svg") },
      {
        name: "Walt Disney",
        url: require("../assets/svg/waltdisney-logo.svg"),
      },
    ]);
    return { urls, companyLogos, windowWidth, successesData, landingPageData };
  },
};
</script>

<style lang="scss" scoped></style>
