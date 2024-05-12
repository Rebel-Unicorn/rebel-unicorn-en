<template>
  <div
    class="testimonials-background w-full h-full flex lg:flex-row flex-col flex-1 relative"
  >
    <VerticalAnimatedText content="Testimonials" v-if="windowWidth >= 1025" />
    <HorizontalAnimatedText v-else content="Testimonials" />
    <div
      class="h-full lg:w-full w-auto md:mx-10 mx-4 md:pt-[158px] pt-8 md:pb-10 pb-[100px] relative"
    >
      <div
        class="cards-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-8"
      >
        <Card
          v-for="card in coaches.slice(0, 3)"
          :key="`${card.id}`"
          :image="`http://localhost:1337${card?.attributes?.image?.data?.attributes?.url}`"
          :title="card?.attributes?.name"
          :graduated="card?.attributes?.graduate"
          :content="card?.attributes?.brief"
          @click="selectTestimonial(card)"
        />
        <!-- <Card
          v-for="card in cardsData"
          :key="`${card.id}-${card.title}`"
          :image="card.image"
          :title="card.title"
          :content="card.content"
          :footerContent="card.footerContent"
          @click="selectTestimonial(card)"
        /> -->
        <!-- {{ coaches[0]?.attributes?.image?.data?.attributes?.url }} -->
      </div>
      <div class="cta">
        <button class="rounded-full py-2 px-4 border border-black">
          Read More Testimonials
        </button>
      </div>
    </div>
    <BaseModal :modalActive="modalActive.status === true">
      <div
        v-if="selectedCard"
        class="flex flex-col items-center justify-center w-full md:max-w-[calc(100%-250px)] max-w-full mx-auto h-auto px-8 lg:pb-0 py-10 bg-white relative rounded-md"
      >
        <span
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
                  class="w-full lg:mb-3 blur-lg"
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

    const coaches = computed(() => store.state.app.availableTestimonials);

    const cardsData = ref([
      {
        id: 1,
        image: require("../../assets/webp/testimonial-3.webp"),
        title: "Success Story - Graduate Coaching",
        content:
          "My job search journey was challenging, especially in the fields of auditing and consulting where setbacks and self-doubt clouded my path. Despite initial failures, the support from Teachers Yuki and Sophia, despite time differences, was invaluable. Their patience and guidance helped me navigate emotional hurdles and acquire essential skills. The teaching assistants' patience and professionalism were commendable, aiding in my emotional stability and knowledge acquisition. Their dedication, from resume revisions to interview preparation, was pivotal in my success. The mock AC sessions were particularly enlightening, enhancing my confidence and skills. I encourage others to participate in similar opportunities. The journey taught me the importance of effective communication, group discussions, and time management. Thank you to all who contributed to my success!",
        footerContent: "Brian, MA degree Graduate",
      },
      {
        id: 2,
        image: require("../../assets/webp/testimonial-2.webp"),
        title: "Success Story - Graduate Coaching",
        content:
          "Throughout my job hunting journey, I discovered that academic excellence doesn't always translate to job hunting skills. As a novice job seeker, the tutors and teaching assistants provided invaluable support, guiding me through every step of the UK job application process, starting with resume revisions. Their dedication not only helped me secure desired offers but also enriched my professional and soft skills, leaving a lasting impact on my career development. Simulated Assessment Centers played a crucial role in my preparation, with teachers like Rachael providing insights into company preferences and offering tailored advice. I'm particularly grateful to Rachael for her analysis post-offer, aiding in my decision-making process. The teachers' patience and encouragement, even amidst repeated mistakes and academic pressures, instilled me with inner strength and resilience. I highly recommend participating in as many AC simulations as possible, as they not only enhance practical interview skills but also bolster confidence and communication habits. My heartfelt thanks to all the mentors for their unwavering support, and I wish all job seekers find the right guidance and achieve their desired offers in the UK job market.",
        footerContent: "Chole, MA degree Graduate",
      },
      // {
      //   id: 3,
      //   image: require("../../assets/webp/testimonial-1.webp"),
      //   title: "Chris is an excellent coach!",
      //   content:
      //     "Working with him was a real pleasure because I could sense his passion and enthusiasm for what he does. With his help I refined my interview skills and my first interview, after only one week with him, was a huge success. Due to his extensive work experience and unique insights, he could give me a lot of good advice on how I can stay on top of my industry.",
      //   footerContent: "Simon, International Graduate",
      // },
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
      coaches,
    };
  },
};
</script>

<style></style>
