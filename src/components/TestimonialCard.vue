<template>
  <div class="card">
    <div class="top h-[276px] w-auto mb-8">
      <img :src="image" :alt="`${title}-image`" class="h-full" />
    </div>
    <div class="bottom max-h-[300px] w-auto py-[10px]">
      <div class="content h-[max-content] max-h-[260px] overflow-hidden mb-3">
        <h4 class="mb-3 text-[18px] leading-[28px]">{{ `"${title}"` }}</h4>
        <p class="text-sm text-[rgba(0,0,0,0.8)] text-ellipsis">
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
