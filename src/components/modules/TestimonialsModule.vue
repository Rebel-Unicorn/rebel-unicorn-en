<template>
  <div
    class="testimonials-background w-full h-full flex md:flex-row flex-col flex-1"
  >
    <VerticalAnimatedText content="Testimonials" v-if="windowWidth >= 767" />
    <HorizontalAnimatedText v-else content="Testimonials" />
    <div
      class="h-full md:w-full w-auto md:max-w-[calc(100%-200px)] md:mx-auto mx-4 md:pt-[158px] pt-8 md:pb-10 pb-[100px] relative"
    >
      <div class="cards-container grid md:grid-cols-3 grid-cols-1 gap-12">
        <Card
          v-for="card in cardsData"
          :key="`${card.id}-${card.title}`"
          :image="card.image"
          :title="card.title"
          :content="card.content"
          :footerContent="card.footerContent"
        />
      </div>
      <div class="cta absolute bottom-10 md:right-10 left-0">
        <button class="rounded-full py-2 px-4 border border-black">
          Read More Testimonials
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalAnimatedText from "@/components/VerticalAnimatedText.vue";
import HorizontalAnimatedText from "@/components/HorizontalAnimatedText.vue";
import { ref, onMounted, onUnmounted } from "vue";
import Card from "@/components/TestimonialCard.vue";
export default {
  components: {
    VerticalAnimatedText,
    HorizontalAnimatedText,
    Card,
  },
  setup() {
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
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      document.addEventListener("resize", updateWidth());
    });
    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });
    return { cardsData, windowWidth };
  },
};
</script>

<style></style>
