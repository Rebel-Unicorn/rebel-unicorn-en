<template>
  <header
    class="w-full py-[40px] flex items-center justify-between fixed top-0 left-0 z-50 xl:px-[90px] md:px-6 px-4"
  >
    <RouterLink to="/">
      <Logo />
    </RouterLink>
    <button
      @click="addApplication"
      class="md:text-sm text-[13px] leading-[19.36px] text-black rounded-full border shadow-sm py-2 md:px-4 px-3 bg-[#ffffff7d] mix-blend-difference"
    >
      Apply now
    </button>
  </header>
</template>

<script>
import Logo from "@/components/LogoComponent.vue";
import { useStore } from "vuex";

export default {
  components: {
    Logo,
  },
  setup() {
    const store = useStore();
    const addApplication = () => {
      store.commit("setApplicationModal", true);
    };

    return {
      addApplication,
    };
  },
};
</script>

<style lang="scss" scoped></style>
