<template>
  <div
    class="testimonials-background w-full h-full flex lg:flex-row flex-col flex-1 relative"
  >
    <VerticalAnimatedText content="Testimonials" v-if="windowWidth >= 1025" />
    <HorizontalAnimatedText v-else content="Testimonials" />
    <div
      class="h-full lg:w-full w-auto md:mx-10 mx-4 md:pt-[158px] pt-8 md:pb-10 pb-[100px] relative"
    >
      <div class="cards w-full">
        <div
          class="cards-container w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-6"
        >
          <RouterLink
            :to="`/testimonials/${card?.id}`"
            v-for="card in testimonials.slice(0, 4)"
            :key="`${card?.id}`"
          >
            <Card
              :image="`${card?.attributes?.image?.data?.attributes?.url}`"
              :title="card?.attributes?.name"
              :graduated="card?.attributes?.graduate"
              :content="card?.attributes?.brief"
              @click="selectTestimonial(card?.id)"
            />
          </RouterLink>
          <!-- <Card
          v-for="card in cardsData"
          :key="`${card.id}-${card.title}`"
          :image="card.image"
          :title="card.title"
          :content="card.content"
          :footerContent="card.footerContent"
          @click="selectTestimonial(card)"
        /> -->
          <!-- {{ testimonials[0]?.attributes?.image }} -->
        </div>
      </div>
      <div class="cta text-center mt-6">
        <RouterLink to="/testimonials">
          <button
            class="fill-btn overflow-hidden py-2 px-4 border border-black relative"
            id="dynamic-testimonials-pseudo-content"
          >
            Read More Testimonials
          </button>
        </RouterLink>
      </div>
    </div>
    <BaseModal :modalActive="modalActive.status === true && selectedCard">
      <div
        v-if="selectedCard"
        class="flex flex-col items-center justify-center w-full md:max-w-[calc(100%-250px)] max-w-full mx-auto h-auto px-8 lg:pb-0 py-10 bg-white relative rounded-sm z-[2000]"
      >
        <button
          @click="closeModal"
          class="absolute block right-2 top-2 border border-transparent hover:border-[#e5e7eb] hover:rounded-lg"
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
        <div class="flex flex-col h-full w-full overflow-y-auto">
          <p class="text-[20px] leading-[30px] font-[600] mb-3">
            {{ selectedCard?.graduated }}
          </p>
          <div class="content flex lg:flex-row flex-col h-full w-full">
            <div class="left lg:h-[150px] h-full lg:w-[150px] py-4">
              <div class="card-img">
                <img
                  :src="selectedCard?.image?.data?.attributes?.url"
                  :alt="selectedCard?.name"
                  class="w-full lg:mb-3 blur-lg"
                />
              </div>
            </div>
            <div class="right lg:h-[60%] h-full lg:px-6 py-4">
              <p class="mb-3 text-[18px] leading-[28px]">
                {{ selectedCard?.name }}
              </p>
              <p class="text-sm text-[rgba(0,0,0,0.8)] mb-3">
                {{ selectedCard?.brief }}
              </p>
            </div>
          </div>
        </div>
        <!-- <p>{{ selectedCard.title }}</p> -->
        <!-- <div class="flex items-center justify-center w-full">
          <button
            @click="closeModal"
            class="font-Rubik mt-6 border-b border-teal font-medium py-[12px] md:px-[20px] px-[32px] text-white text-[13px] leading-[15.41px] rounded-[6px] bg-black md:max-w-[100px] max-w-[100%] w-[50%]"
          >
            Dismiss
          </button>
        </div> -->
      </div>
    </BaseModal>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import Card from "@/components/TestimonialCard.vue";
import BaseModal from "@/components/modal/BaseModal.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    VerticalAnimatedText,
    HorizontalAnimatedText,
    Card,
    BaseModal,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const testimonials = computed(() => store.state.app.availableTestimonials);
    const cmsBaseUrl = process.env.VUE_APP_CMS_BASEURL;

    const goToTestimonial = (id) => {
      router.push({ name: "Testimonial Page", params: { id: id } });
    };
    const selectedCard = ref();
    const selectTestimonial = (selected) => {
      selectedCard.value = selected;
      // console.log(selectedCard.value, "selected");
      // router.push(`/testimonials/${selectedCard.value}`);
      // store.dispatch("setModalActive", {
      //   status: true,
      //   message: null,
      // });
    };
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    const closeModal = () => {
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
    };
    onMounted(() => {
      window.addEventListener("resize", updateWidth());
      // Get the element
      const fillBtn = document.getElementById(
        "dynamic-testimonials-pseudo-content"
      );

      // Update the CSS variable dynamically
      fillBtn.addEventListener("mouseover", () => {
        fillBtn.style.setProperty(
          "--dynamic-content",
          '"Read More Testimonials"'
        );
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth());
      closeModal();
    });

    return {
      windowWidth,
      closeModal,
      modalActive: computed(() => store.state.app.modalActive),
      selectedCard,
      selectTestimonial,
      testimonials,
      cmsBaseUrl,
      goToTestimonial,
    };
  },
};
</script>

<style></style>
