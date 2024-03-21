<template>
  <div class="card hover:rounded-md hover:cursor-pointer">
    <div class="top lg:h-[276px] h-auto w-auto mb-8">
      <img :src="image" :alt="`${title}-image`" class="h-full blur-lg" />
    </div>
    <div class="bottom max-h-[300px] w-auto py-[10px]">
      <div class="content h-[max-content] max-h-[260px] overflow-hidden mb-3">
        <p class="mb-3 text-[18px] leading-[28px]">{{ `"${title}"` }}</p>
        <p
          class="text-sm text-[rgba(0,0,0,0.8)] h-[100px] text-ellipsis overflow-hidden"
        >
          {{ content }}
        </p>
      </div>
      <div class="footer">
        <p class="text-[18px] leading-[28px] font-[600]">{{ footerContent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "content", "footerContent"],
  setup() {
    return {};
  },
};
</script>

<style></style>
