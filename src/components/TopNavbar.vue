<template>
  <header
    class="w-full py-[40px] flex items-center justify-between fixed top-0 left-0 z-50 xl:px-[90px] md:px-6 px-4"
  >
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <div class="ctas flex items-center">
      <div class="localeSelect md:w-[120px] w-10 relative mr-3">
        <Listbox v-model="selectedLocale">
          <ListboxButton
            class="relative w-full cursor-default flex items-center justify-between rounded-lg bg-white py-[5px] px-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span
              class="flex items-center text-xs tracking-wide whitespace-nowrap"
            >
              <span class="block mr-2 w-3 h-3 rounded-full overflow-hidden">
                <img :src="selectedLocale.icon" :alt="selectedLocale.name" />
              </span>
              {{ selectedLocale.name }}
            </span>
            <span class="w-4 h-4 flex items-center justify-center pl-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </ListboxButton>
          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ selected }"
                v-for="locale in locales"
                :key="locale.id"
                :value="locale"
                as="li"
                @click="getSelectedLocale(locale)"
              >
                <span
                  :class="[
                    selected
                      ? 'bg-[#772a8b] text-white cursor-default'
                      : 'bg-transparent cursor-pointer',
                    'text-xs px-3 py-1 cursor-pointer w-full flex items-center hover:bg-[#782a8b84] hover:text-white whitespace-nowrap',
                  ]"
                >
                  <span class="block mr-1 w-3 h-3 rounded-full overflow-hidden">
                    <img :src="locale.icon" :alt="locale.name" />
                  </span>
                  {{ locale.name }}
                </span>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </Listbox>
      </div>
      <button
        @click="addApplication"
        class="md:text-sm text-[13px] leading-[19.36px] text-black rounded-full border shadow-sm py-2 md:px-4 px-3 bg-[#ffffff7d] mix-blend-difference"
      >
        Apply now
      </button>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/LogoComponent.vue";
import { computed, ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useStore } from "vuex";
import CMSService from "@/services/cms.service";

export default {
  components: {
    Logo,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup() {
    const store = useStore();
    const storedLocale = computed(() => store.state.app.locale);
    const appLoading = computed(() => store.state.app.appLoading);

    const locales = [
      {
        id: 1,
        name: "English",
        locale: "en",
        icon: require("../assets/svg/gb.svg"),
      },
      {
        id: 2,
        name: "Chinese (zh)",
        locale: "zh",
        icon: require("../assets/svg/cn.svg"),
      },
    ];
    const selectedLocale = ref(locales[0]);
    const getSelectedLocale = (s) => {
      selectedLocale.value = s;
      store.commit("setLocale", selectedLocale.value.locale);
      getAppData();
      console.log(storedLocale.value ? storedLocale.value : "not found");
    };

    const getAppData = async () => {
      store.commit("setAppLoading", true);
      try {
        const response = await CMSService.getAllDataByLocale(
          storedLocale.value
        );
        if (response.status === 200) {
          store.commit("setLandingPageData", response.data?.data?.attributes);
          store.commit("setAppLoading", false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const addApplication = () => {
      store.commit("setApplicationModal", true);
    };

    // const coachesUrl = process.env.VUE_APP_CMS_LANDING_PAGE_ENDPOINT;

    return {
      locales,
      selectedLocale,
      getSelectedLocale,
      appLoading,
      addApplication,
    };
  },
};
</script>

<style lang="scss" scoped></style>
