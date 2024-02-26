<template>
  <div
    class="success-proof-wrapper h-full w-full md:max-w-[calc(100%-222px)] max-w-full lg:mx-auto md:pt-[130px] pt-14 pb-14 md:mx-5 mx-4"
  >
    <div class="heading w-full md:max-w-[43.3%] max-w-full md:mb-10 mb-[62px]">
      <h2 class="text-[48px] leading-[50px] font-[600] mb-4">Our Successes</h2>
      <p class="leading-[24px] text-[rgba(0,0,0,0.7)]">
        We have helped over 5000 students land roles with organizations like
        these
      </p>
    </div>
    <div
      class="companies-wrapper w-full md:max-h-[calc(100vh-366px)] grid md:grid-cols-4 grid-cols-3 gap-8 md:gap-x-0 pb-8"
    >
      <img
        v-for="(company, id) in companyLogos"
        :key="`${company.name}-$${id}`"
        class="my-2"
        :src="company.url"
        :alt="`${company.name} logo`"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const companyLogos = ref([
      { name: "tesco", url: require("../../assets/svg/tesco-logo.svg") },
      {
        name: "civil service",
        url: require("../../assets/svg/civil-service-logo.svg"),
      },
      {
        name: "Sainsbury",
        url: require("../../assets/svg/sainsbury-logo.svg"),
      },
      {
        name: "Transport For London",
        url: require("../../assets/svg/london-transport-logo.svg"),
      },
      { name: "Barclays", url: require("../../assets/svg/barclays-logo.svg") },
      { name: "Google", url: require("../../assets/svg/google-logo.svg") },
      { name: "NHS", url: require("../../assets/svg/nhs-logo.svg") },
      {
        name: "LLoyds Bank",
        url: require("../../assets/svg/lloyds-bank-logo.svg"),
      },
      { name: "facebook", url: require("../../assets/svg/facebook-logo.svg") },
      { name: "Amazon", url: require("../../assets/svg/amazon-logo.svg") },
      {
        name: "Bloomberg",
        url: require("../../assets/svg/bloomberg-logo.svg"),
      },
      { name: "Aviva", url: require("../../assets/svg/aviva-logo.svg") },
      { name: "Savills", url: require("../../assets/svg/savills-logo.svg") },
      {
        name: "NetworkRail",
        url: require("../../assets/svg/networkrail-logo.svg"),
      },
      { name: "Delloite.", url: require("../../assets/svg/deloitte-logo.svg") },
      {
        name: "Goldman Sachs",
        url: require("../../assets/svg/goldmansachs-logo.svg"),
      },
      { name: "pwc", url: require("../../assets/svg/pwc-logo.svg") },
      { name: "Coca Cola", url: require("../../assets/svg/cocacola-logo.svg") },
      { name: "JP Morgan", url: require("../../assets/svg/jpmorgan-logo.svg") },
      {
        name: "Walt Disney",
        url: require("../../assets/svg/waltdisney-logo.svg"),
      },
    ]);
    return { companyLogos };
  },
};
</script>

<style>
/*  .companies-wrapper {
  background: url(../../assets/svg/success-logo-wrapper.svg);
} */
</style>
