<template>
  <div class="logo relative flex items-center w-[max-content] h-[36px] z-[1]">
    <div class="icon-type block relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="40"
        height="36"
        xml:space="preserve"
        version="1.1"
        viewBox="0 0 40 36"
      >
        <image
          width="40"
          height="36"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAABQFJREFUWEe1mHnIZlMcxz/PjF3Z12QpuywllK0h/rUUkwgpyciSEFL2PUmUnWTNZCmUUvZdtoZCjAiNLbusw+N83vn9ns573WfxunPr6b3vvfec8z3f3/e3nR5wJ3A48BuwHDO7+kAvhnrvb1bLVH8BXwOfAa8BDwOPxXf5/d/1OCddEXgP2AhYDCwzM4xToJx8doz3vg1kc/p3CzGXAHfFC9cXx9SVu94DeC52Xj8fhzWZ+zU26vffAT8CGwfgJsg/gWVj4i+BdeP+UeDQGDsAKUDN+kcBe36Z8Jy4n9TUyfixwPfAfGBfYDXgfkAwLpZE1OAuBg4pzG0W8loB+BjYHVgU4xb3oN+L8bLxArDbhCDThOpqA+CnsvtTysQXAWsC7wNrAL7X7L8DywdbgtinSOCC2ISM5vuPgO2Bn5VI7iwp3ST06ETjNJQLfxgs7AR8EQ4gDhk8KPTkXFpFZnYJEwtEUmpJ6agy+RBwYA3Qj9LURwK3Vztr06ELKgsnex7YMxzC525ONk4Crq6YeQrYP5h5FXBDtclznXx2MPBAMpgvk8m7i4kOazG1rPmrNfpyCRW7qrM+fXr0NKfa3AsQlNd1JbwcH/fHxf9t4Pwkdf1mCUM7NgE6uQBWClNvGAP0RJ+n98meXv9ExLE3Qsu1yby/AVg7TO3ia8W8ajQl0mahfDenCdCPBeHuNNuzDTOomxvDW/W4OlwlOPr0ez0JXXJtCnwa1ri+6HTeBE6Y7F7RBrDW43lFyOeG+PW4m2LnCUJJCGQQWCvQzcyg5tSeOnXdYWs7RTL4dOtHFQOyeVYJIzeHBybDTpAprc1EFbNzZ8F9qVu1ePQY89YAF47ahe8GZgvHkPr62Shw9TvZzByrLg3so9JqhrhFowBmfNJxBCUL/+fKMGaAfrwly9RzJ8BPxgH8r4CarLexqCe/VZxt/RGxNjW4oGuA4zaUcXY74PWIGG2mzmfzOwFYOdU64Z1WKcPYTFPvDTwZO2rGxAwz8zoBGMWAixwACM7sUjtGk9kEaXl1T7zM0i3194s5viuAaTrLNVPUI43Cty1OZkI4s+TvS1uqHhNCZwwmwNuAV5akuLmzI/5JkO9lpi7nE+DWwDtVpPBbS63NTRBdMZiL2d+satUSutwGWAV4Kczod6k3deaV2cr8bkjzp+nv1Ym6ApgMXgacAXwQIWTLWPDWwsppUXWnHh3jc8s7wQlePMrkwqqiHhcZJnqfDJ5cGLyqMSLF/02puk8Np9i59CzKYYuq3HeYm7gyNqUcLPc7uRLgftFKaj69OAsG/88a8vMI0vXCatA60epJE0+By1TWBcI0sQ2Qiwm42TJkqkwAdoJmFL3VCt4rNzrA1AmDjfrv7dKPbDukYknQP5Rqew6woGJnWj+czzsB2Nj9NcCJI/JsprFbgGOir7GHaa2SugSYDGQKG1bS1ycQ6RSZWf4lty4B1pN7nLHViJqv7l1srp5p01+XTpLgUuSnl6OQy8e0rmnqb0uPYzb5KmNfvdOuGcyu0JrPk4XVxxwAGKA174tx5BGhb9BwjWxcZhp+kkWbrLMn6OAS5LXACU0Wu2awZmDlcu64sBQO603QJKW5j4qYOHCapQBwWsD19Mqkn6dcw6xSnyvuEAF8yhJLC6BAUo93AEdMwGIGcZt8q6Bpp1sz1duocVlR+9fS3sxhlZxdYnOsZBmwLc8ejOOS3j+BRGBgu23F0QAAAABJRU5ErkJggg=="
        />
      </svg>
    </div>
    <div
      class="logo-type h-full ml-2 grid grid-cols-1 text-[13px] mix-blend-exclusion"
    >
      <p class="leading-[-3px] tracking-[2px]">
        <span class="font-bold tracking-[2px]">REBEL</span>UNICORN
      </p>
      <p class="text-left font-[500] leading-[3px] tracking-[2px]">CAREER</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.logo::after {
  content: "";
  position: absolute;
  width: 120%;
  height: 110%;
  inset: 0;
  z-index: -1;
  mix-blend-mode: multiply;
  border-radius: 99999px;
  left: -15px;
  top: -2px;
}
</style>
