<template>
  <div class="card hover:rounded-md hover:cursor-pointer">
    <div
      class="top lg:h-[300px] h-auto lg:w-[300px] w-auto mb-8 flex items-start justify-center"
    >
      <img
        :src="image"
        :alt="`${title}-testimonial-image`"
        class="h-full w-full object-cover object-center rounded-full"
      />
    </div>
    <div class="bottom max-h-[300px] w-auto py-[10px]">
      <div class="content h-[max-content] max-h-[260px] overflow-hidden mb-3">
        <p class="mb-2 text-[18px] leading-[28px] font-medium">
          {{ `"${title}"` }}
        </p>
        <p class="text-sm text-[rgba(0,0,0,0.8)] h-[40px]">
          {{ graduated }}
        </p>
        <hr class="my-1" />
        <p
          class="text-sm text-[rgba(0,0,0,0.8)] h-[100px] text-ellipsis overflow-hidden"
        >
          {{ content }}
        </p>
      </div>
      <!-- <div class="footer">
        <p class="text-[18px] leading-[28px] font-[600]">{{ footerContent }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "graduated", "content"],
  setup() {
    return {};
  },
};
</script>

<style></style>
