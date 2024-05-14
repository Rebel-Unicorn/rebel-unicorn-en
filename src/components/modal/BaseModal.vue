<template>
  <Transition>
    <div
      v-show="modalActive"
      class="p-5 modal bg-[#00000059] fixed h-screen w-screen left-0 top-0 z-[2000] flex items-center justify-center"
    >
      <!-- Modal Content -->
      <slot></slot>
    </div>
  </Transition>
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
