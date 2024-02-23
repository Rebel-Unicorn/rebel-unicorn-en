<template>
  <header
    class="w-full py-[40px] flex items-center justify-between fixed top-0 left-0 z-50 px-[90px]"
  >
    <Logo />
    <button
      class="text-[16px] leading-[19.36px] text-black rounded-full border border-black py-2 px-4 mix-blend-difference"
    >
      Apply now
    </button>
  </header>
</template>

<script>
import Logo from "@/components/LogoComponent.vue";

export default {
  components: {
    Logo,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
