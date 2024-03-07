<template>
  <transition>
    <div
      v-if="modalActive"
      @click="closeModal"
      class="p-5 modal bg-[#00000059] fixed h-screen w-screen left-0 top-0 z-[2000] flex items-center justify-center"
    >
      <!-- Modal Content -->
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: ["modalActive"],
  setup() {
    const store = useStore();

    const closeModal = () => {
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
    };
    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
