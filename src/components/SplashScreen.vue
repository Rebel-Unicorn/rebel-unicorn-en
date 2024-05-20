<template>
  <div
    class="bg-white w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-center transition-all z-[3000]"
  >
    <span class="splash-icon-type block relative w-[40px] mb-10">
      <img src="../assets/webp/ru-purple.webp" alt="ru" />
    </span>
    <!-- <p class="text-xs font-medium tracking-wider">Loading...</p> -->
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  setup() {
    return {};
  },
};
</script>

<style>
.splash-icon-type {
  animation: moveObject 4s linear infinite; /* Animation name, duration, timing function, and iteration count */
}
@keyframes moveObject {
  0% {
    transform: scale(0.8); /* Start position */
  }
  50% {
    transform: scale(1.5); /* Middle position */
  }
  100% {
    transform: scale(0.8); /* End position */
  }
}
</style>
