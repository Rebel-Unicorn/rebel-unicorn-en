<template>
  <div
    class="card hover:rounded-md hover:shadow-md hover:scale-[1.01] hover:cursor-pointer px-4 transition-all"
  >
    <div class="flex items-center justify-center w-full">
      <div
        class="top mb-8 flex items-start justify-center rounded-full overflow-hidden lg:h-[200px] h-auto max-h-[200px] lg:w-[200px] w-auto max-w-[200px]"
      >
        <img
          :src="image"
          :alt="`${title}-testimonial-image`"
          class="w-full h-[200px] object-cover object-left"
        />
      </div>
    </div>
    <hr class="my-1" />
    <div class="bottom max-h-[300px] w-auto py-[10px]">
      <div class="content h-[max-content] max-h-[260px] overflow-hidden mb-3">
        <p class="mb-2 text-[18px] leading-[28px] font-medium">
          {{ `"${title}"` }}
        </p>
        <p class="text-sm text-[rgba(0,0,0,0.8)] h-[60px]">
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
