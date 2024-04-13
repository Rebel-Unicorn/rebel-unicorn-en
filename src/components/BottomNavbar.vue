<template>
  <div
    class="w-[max-content] max-w-[618px] fixed bottom-[50px] left-[50%] translate-x-[-50%] bg-[rgba(0,0,0,0.3)] rounded-full p-1 z-[-1]"
  >
    <ul class="flex items-center w-full">
      <li v-for="url in urls" :key="url.id">
        <button @click="scrollToSection(url.href)">
          <a :href="`#${url.href}`">{{ url.name }}</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// import gsap from "gsap";

export default {
  setup() {
    const urls = ref([
      { id: 1, name: "Home", href: "home" },
      { id: 2, name: "Services", href: "services" },
      { id: 3, name: "Successes", href: "successes" },
      { id: 4, name: "Coaching", href: "coaching" },
      { id: 5, name: "Testimonials", href: "testimonials" },
      { id: 6, name: "Learn more", href: "learn-more" },
    ]);
    // let sections = gsap.utils.toArray(".scroll-section");
    const sections = ref([]);

    onMounted(() => {
      sections.value = document.querySelectorAll(".scroll-section");
      // console.log(sections.value);
    });

    const scrollToSection = (item) => {
      const anchorElement = document.getElementById(item.href);
      // closeSidebar()
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    return {
      urls,
      scrollToSection,
    };
  },
};
</script>

<style></style>
