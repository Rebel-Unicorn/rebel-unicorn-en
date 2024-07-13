<template>
  <div
    class="card hover:rounded-md hover:shadow-md hover:scale-[1.01] hover:cursor-pointer hover:bg-[#772A8A] hover:!text-white text-[rgba(0,0,0,0.8)] px-4 pt-6 transition-all"
  >
    <div class="flex items-center justify-center w-full">
      <div
        class="top mb-8 flex items-start justify-center rounded-full overflow-hidden lg:h-[200px] h-auto max-h-[200px] lg:w-[200px] w-auto max-w-[200px]"
      >
        <img
          :src="image"
          :alt="`${name}-coaches-image`"
          class="w-full h-[200px] object-cover object-left"
        />
      </div>
    </div>
    <hr class="my-1 border-gray-300" />
    <div class="bottom max-h-auto w-auto py-[10px]">
      <div class="content h-[max-content] max-h-auto overflow-hidden mb-3">
        <p
          class="mb-2 lg:text-[22px] text-[20px] lg:leading-[38px] leading-[30px] font-medium"
        >
          {{ `${name}` }}
        </p>
        <p class="text-sm">
          {{ specialization }}
        </p>
        <hr class="my-1 border-gray-300" />
        <p class="text-sm h-auto overflow-hidden">
          {{ biography }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "specialization", "biography"],
  setup() {
    return {};
  },
};
</script>

<style></style>
