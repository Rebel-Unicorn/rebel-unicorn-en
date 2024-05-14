<template>
  <div>
    <router-view></router-view>
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
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "TestimonialsLayout",
  setup() {
    const router = useRouter();
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      // document.addEventListener("resize", updateWidth());
      window.addEventListener("resize", () => {
        updateWidth();
        console.log("resized");
        window.location.reload();
      });
    });
    onUnmounted(() => {
      // document.addEventListener("resize", updateWidth());
      window.removeEventListener("resize", () => {
        updateWidth();
        console.log("resized");
        window.location.reload();
      });
    });
    const urls = ref([
      { id: 1, name: "Home", href: "home", active: true },
      { id: 2, name: "Services", href: "services", active: false },
      { id: 3, name: "Successes", href: "successes", active: false },
      { id: 4, name: "Coaching", href: "coaching", active: false },
      { id: 5, name: "Testimonials", href: "testimonials", active: false },
      { id: 6, name: "Learn more", href: "learn-more", active: false },
    ]);
    const viewList = (id) => {
      router.push({ name: "Testimonials Page", params: { id: id } });
    };
    return {
      viewList,
      urls,
      windowWidth,
    };
  },
};
</script>

<style lang="scss" scoped></style>
