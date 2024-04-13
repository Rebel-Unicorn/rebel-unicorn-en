<template>
  <div class="w-full">
    <div class="w-full mx-auto bg-white rounded-2xl">
      <Disclosure
        v-for="(item, idx) in items"
        :key="item.id"
        v-slot="{ open, close }"
      >
        <DisclosureButton
          class="flex justify-between w-full px-[10px] lg:py-2 py-2 my-1 lg:text-[14px] text-[13px] leading-[24px] font-normal text-left transition-all outline-transparent ring-transparent ring-offset-transparent focus:outline-none focus-visible:ring"
          :class="
            !open
              ? 'border-b-[1px] border-[rgba(175,175,175,0.86)] text-[rgba(0,0,0,0.7)]'
              : 'bg-[#772a8b] text-white rounded-md'
          "
        >
          <span>{{ item.title }}</span>
          <span
            :class="open ? 'duration-200' : 'duration-200 rotate-180'"
            class="w-6 h-6 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </DisclosureButton>
        <DisclosurePanel
          class="panel transition-all opacity-0 duration-200 max-h-0 overflow-hidden outline-transparent ring-transparent ring-offset-transparent focus:outline-none focus-visible:ring"
          :class="
            open &&
            'max-h-[max-content] opacity-100 border-b-[1px] border-[rgba(175,175,175,0.86)] px-[10px]'
          "
          unmount
        >
          <div class="pt-[10px] pb-4 text-[13px] leading-20 text-gray-500">
            {{ decode(item.content) }}
            <ul class="mt-3 list-disc ml-2">
              <li v-for="detail in item.details" :key="detail">
                <span v-html="formatDetail(detail)"> </span>
              </li>
            </ul>
          </div>
        </DisclosurePanel>

        <button
          :ref="(el) => (elements[idx] = el)"
          :data-id="item.id"
          v-show="false"
          @click="doClose(close)"
          class="outline-transparent ring-transparent ring-offset-transparent focus:outline-none focus-visible:ring"
        ></button>
        <DisclosureStateEmitter :show="open" @show="hideOther(item.id)" />
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import DisclosureStateEmitter from "./DisclosureStateEmitter.vue";
import { decode } from "html-entities";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    DisclosureStateEmitter,
  },
  props: ["accordionData"],
  setup(props) {
    // console.log(props.accordionData);
    const items = ref(props.accordionData);

    const elements = ref([]);

    const hideOther = (id) => {
      const items = elements.value.filter((elm) => {
        return elm.getAttribute("data-id") !== id.toString();
      });
      items.forEach((elm) => elm.click());
    };

    const formatDetail = (detail) => {
      // Split the detail string at the first occurrence of the hyphen
      const parts = detail.split(" — ");

      // Check if there is a hyphen in the string
      if (parts.length >= 2) {
        // Wrap the part before the hyphen in <strong> tags and concatenate with the part after
        return `<strong>${parts[0]}</strong> — ${parts[1]}`;
      } else {
        // If no hyphen is found, return the detail as it is
        return detail;
      }
    };

    const doClose = (close) => {
      close();
    };

    return { items, hideOther, elements, doClose, decode, formatDetail };
  },
};
</script>
