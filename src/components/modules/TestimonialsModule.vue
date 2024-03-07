<template>
  <div
    class="testimonials-background w-full h-full flex md:flex-row flex-col flex-1 relative"
  >
    <VerticalAnimatedText content="Testimonials" v-if="windowWidth >= 769" />
    <HorizontalAnimatedText v-else content="Testimonials" />
    <div
      class="h-full md:w-full w-auto md:mx-10 mx-4 md:pt-[158px] pt-8 md:pb-10 pb-[100px] relative"
    >
      <div
        class="cards-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-8"
      >
        <Card
          v-for="card in cardsData"
          :key="`${card.id}-${card.title}`"
          :image="card.image"
          :title="card.title"
          :content="card.content"
          :footerContent="card.footerContent"
          @click="selectTestimonial(card)"
        />
      </div>
      <div class="cta absolute bottom-10 md:right-10 left-0">
        <button class="rounded-full py-2 px-4 border border-black">
          Read More Testimonials
        </button>
      </div>
    </div>
    <BaseModal :modalActive="modalActive.status === true">
      <div
        v-if="selectedCard"
        class="flex flex-col items-center justify-center w-full md:max-w-[calc(100%-250px)] max-w-full mx-auto h-auto px-8 lg:pb-0 py-10 bg-white relative"
      >
        <span class="absolute block right-2 top-2">
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
        </span>
        <div class="flex flex-col h-full w-full">
          <p class="text-[20px] leading-[30px] font-[600] mb-3">
            {{ selectedCard.footerContent }}
          </p>
          <div class="content flex lg:flex-row flex-col h-full w-full">
            <div class="left lg:h-[40%] h-full lg:w-[40%] py-4">
              <div class="card-img">
                <img
                  :src="selectedCard.image"
                  :alt="selectedCard.title"
                  class="w-full lg:mb-3"
                />
              </div>
            </div>
            <div class="right lg:h-[60%] h-full lg:w-[60%] w-full lg:px-6 py-4">
              <p class="mb-3 text-[18px] leading-[28px]">
                {{ selectedCard.title }}
              </p>
              <p class="text-sm text-[rgba(0,0,0,0.8)] mb-3">
                {{ selectedCard.content }}
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

export default {
  components: {
    VerticalAnimatedText,
    HorizontalAnimatedText,
    Card,
    BaseModal,
  },
  setup() {
    const store = useStore();

    const cardsData = ref([
      {
        id: 1,
        image: require("../../assets/webp/testimonial-1.webp"),
        title: "Chris is an excellent coach!",
        content:
          "Chris has been a huge help to me in getting a job. He turned my cv around so that it was easy and comprehendible to read, really pushed me to think of my key skills and helped me to discover where it was that my skills would be best placed. For me the most helpful thing was the ability and confidence that I was given to answer the hundreds of competency questions that I encountered at phone interview, assessment days and final interviews. In such a competitive environment where one example is not enough, Chris helped me think of numerous creative examples. Chris is extremely friendly and approachable which made it easier for me to tell him exactly what I wanted from a job.",
        footerContent: "Simon, International Graduate",
      },
      {
        id: 2,
        image: require("../../assets/webp/testimonial-2.webp"),
        title: "Chris is an excellent coach!",
        content:
          "Chris Davies is sparklingly intelligent, and sharply perceptive. He has a brilliant knack for understanding the talents and drives of others (which they themselves might not know) and the experience and know-how for getting that first foot in the door. I would urge anyone who is feeling lost since leaving education to pick up The Student Book. You may be surprised at where it takes you. When I first met Chris, I was lost and overwhelmed, in a maze of potential career paths with conflicting advice on which to follow. Having achieved top grades across the board at school I’d gone on to complete a BSc and MSc at one of the world’s top universities before a brief and unfulfilling stint in academic publishing.",
        footerContent: "Simon, International Graduate",
      },
      {
        id: 3,
        image: require("../../assets/webp/testimonial-3.webp"),
        title: "Chris is an excellent coach!",
        content:
          "Working with him was a real pleasure because I could sense his passion and enthusiasm for what he does. With his help I refined my interview skills and my first interview, after only one week with him, was a huge success. Due to his extensive work experience and unique insights, he could give me a lot of good advice on how I can stay on top of my industry.",
        footerContent: "Simon, International Graduate",
      },
    ]);
    const selectedCard = ref();
    const selectTestimonial = (selected) => {
      selectedCard.value = selected;
      store.dispatch("setModalActive", {
        status: true,
        message: null,
      });
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
      document.addEventListener("resize", updateWidth());
    });
    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
      closeModal();
    });

    return {
      cardsData,
      windowWidth,
      closeModal,
      modalActive: computed(() => store.state.app.modalActive),
      selectedCard,
      selectTestimonial,
    };
  },
};
</script>

<style></style>
