<template>
  <div
    class="learn-more-background w-full h-full flex lg:flex-row flex-col flex-1"
  >
    <VerticalAnimatedText
      :content="landingPageData?.LearnMoreComponent?.sectionTitle"
      v-if="windowWidth >= 1025"
    />
    <HorizontalAnimatedText
      v-else
      :content="landingPageData?.LearnMoreComponent?.sectionTitle"
    />
    <div class="flex lg:flex-row flex-col w-full h-full">
      <div
        class="left footer-img-container relative lg:w-[63.3%] w-full h-screen lg:max-h-full max-h-[489px]"
      >
        <!-- <img src="" alt="">
        <img src="" alt="">
        <img src="" alt=""> -->
      </div>
      <div class="right">
        <div
          class="lg:px-[45px] md:px-[25px] px-4 md:pt-[100px] pt-12 pb-4 h-full relative flex flex-col justify-between"
        >
          <div class="w-full md:mb-0 mb-6">
            <h2
              class="lg:text-[35px] text-[30px] lg:leading-[40px] leading-[30px] font-[700] mb-8"
            >
              {{ landingPageData?.LearnMoreComponent?.title }}
            </h2>
            <div class="w-full flex items-center justify-end">
              <div class="mb-6 grid grid-cols-3 max-w-[50%]">
                <button @click="openWWModal">
                  <!-- WeChat -->
                  <img
                    src="../../assets/svg/wechat.svg"
                    alt=""
                    class="w-8 h-8"
                  />
                </button>
                <div
                  v-for="(url, i) in urls"
                  :key="`${url.name}-${i}`"
                  class="text-[18px] py-3 px-2"
                >
                  <a :href="url.url">
                    <img
                      :src="url.icon"
                      :alt="`${url.name}-icon`"
                      class="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              v-html="landingPageData?.LearnMoreComponent?.officeAddress?.title"
              target="_blank"
              :href="landingPageData?.LearnMoreComponent?.officeAddress?.url"
              class="block md:text-right text-left"
            ></a>
            <!-- <a
              target="_blank"
              href="https://www.google.com/maps/dir/?api=1&destination=New%20Broad%20Street%20House,%2035%20New%20Broad%20St,%20London%20EC2M%201NH,%20United%20Kingdom"
              class="block md:text-right text-left"
            >
              3 New Broad Street House, 35 New Broad Street, <br />London,
              England, <br />EC2M 1NH
            </a> -->
          </div>
          <div class="md:text-right text-left text-[rgba(0,0,0,0.7)] w-full">
            <a
              :href="landingPageData?.LearnMoreComponent?.privacy?.url"
              class="underline mb-2"
              >{{ landingPageData?.LearnMoreComponent?.privacy?.title }}</a
            >
            <div
              v-html="landingPageData?.LearnMoreComponent?.copyright"
              class="text-xs"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <BaseModal :modalActive="modalActive.status === true && selectWW === true">
      <div
        v-if="selectWW"
        class="w-[400px] h-auto flex flex-col items-start border border-gray-700 bg-[#772a8b] px-4"
      >
        <div class="top-utils w-full flex items-center justify-between my-2">
          <h4 class="font-[500] text-28px text-white">Connect</h4>
          <button
            @click="closeModal"
            class="block border border-transparent hover:border-[#e5e7eb] text-[#e5e7eb] hover:rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="w-full max-w-md px-2 py-4 sm:px-0">
          <TabGroup>
            <TabList class="flex space-x-1 bg-blue-900/20 p-1">
              <!-- <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'w-full py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-[#772a8b] shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  ]"
                >
                  WhatsApp
                </button>
              </Tab> -->
              <Tab as="template" v-slot="{ selected }">
                <button
                  :class="[
                    'w-full py-2.5 text-sm font-medium leading-5',
                    selected
                      ? 'bg-white text-[#772a8b] shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  ]"
                >
                  WeChat
                </button>
              </Tab>
            </TabList>
            <TabPanels class="mt-2">
              <!-- <TabPanel
                :class="[
                  'bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <div class="relative p-3 hover:bg-gray-100">
                  Chat with us on WhatsApp by clicking this
                  <a
                    href="#"
                    :class="[
                      'relative inset-0',
                      'text-[#772a8b]',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                      'underline',
                    ]"
                  >
                    link
                  </a>
                </div>
              </TabPanel> -->
              <TabPanel
                :class="[
                  ' bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <div class="relative p-3 hover:bg-gray-100">
                  <a
                    href="#"
                    :class="[
                      'relative inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                      'w-full h-auto',
                    ]"
                  >
                    <div class="font-[500] text-[16px] text-center">
                      Scan the QR code to start a chat
                    </div>
                    <img src="../../assets/webp/wechat-qr.webp" alt="WeChat" />
                  </a>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import BaseModal from "@/components/modal/BaseModal.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  components: {
    VerticalAnimatedText,
    HorizontalAnimatedText,
    BaseModal,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const store = useStore();
    const landingPageData = computed(() => store.state.app.landingPageData);

    const urls = [
      // { name: "Whatsapp/WeChat", url: "#" },
      {
        name: "LinkedIn",
        url: "#",
        icon: require("../../assets/svg/linkedin.svg"),
      },
      {
        name: "Instagram",
        url: "#",
        icon: require("../../assets/svg/instagram.svg"),
      },
      {
        name: "Facebook",
        url: "#",
        icon: require("../../assets/svg/facebook.svg"),
      },
      {
        name: "Whatsapp",
        url: "#",
        icon: require("../../assets/svg/whatsapp.svg"),
      },
      { name: "X.com", url: "#", icon: require("../../assets/svg/x.svg") },
    ];
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    const currentDate = computed(() => {
      return new Date().getFullYear();
    });
    const selectWW = ref(false);
    const openWWModal = () => {
      selectWW.value = !selectWW.value;
      // console.log("clicked");
      store.dispatch("setModalActive", {
        status: true,
        message: null,
      });
    };
    const closeModal = () => {
      selectWW.value = false;
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
    };
    onMounted(() => {
      window.addEventListener("resize", updateWidth());
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth());
    });
    return {
      urls,
      windowWidth,
      currentDate,
      openWWModal,
      modalActive: computed(() => store.state.app.modalActive),
      selectWW,
      closeModal,
      landingPageData,
    };
  },
};
</script>

<style>
.footer-img-container {
  background: url(../../assets/webp/footer-img.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  image-resolution: 300dpi;
}
</style>
