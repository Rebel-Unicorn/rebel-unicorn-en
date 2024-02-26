<template>
  <div class="w-full">
    <div class="w-full mx-auto bg-white rounded-2xl">
      <Disclosure
        v-for="(item, idx) in items"
        :key="item.id"
        v-slot="{ open, close }"
      >
        <DisclosureButton
          class="flex justify-between w-full px-[10px] py-4 text-[16px] leading-[24px] font-normal text-left text-[rgba(0,0,0,0.7)]"
          :class="!open && 'border-b-[1px] border-[rgba(0,0,0,0.7)]'"
        >
          <span>{{ item.title }}</span>
          <span
            :class="open ? 'duration-200' : 'duration-200 rotate-180'"
            class="w-6 h-6 flex items-center justify-center text-purple-500"
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
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </DisclosureButton>
        <DisclosurePanel
          class="panel transition-all opacity-0 duration-200 max-h-0 overflow-hidden"
          :class="
            open &&
            'max-h-[max-content] opacity-100 border-b-[1px] border-[rgba(0,0,0,0.7)] px-[10px]'
          "
          static
        >
          <div class="pt-[10px] pb-4 text-[15px] leading-20 text-gray-500">
            {{ decode(item.content) }}
          </div>
        </DisclosurePanel>

        <button
          :ref="(el) => (elements[idx] = el)"
          :data-id="item.id"
          v-show="false"
          @click="doClose(close)"
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

    const doClose = (close) => {
      close();
    };

    return { items, hideOther, elements, doClose, decode };
  },
};
</script>
