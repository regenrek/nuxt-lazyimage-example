<template>
  <div class="mx-auto container">
    <section data-scroll-section>
      <div>
        <div class="pt-40 pb-16">
          <h2 class="text-xl mb-1">Simple Image</h2>
          <p class="pb-4">Use default LazyImage Component</p>
          <LazyImage data-src="cat.jpg" class="aspect-ratio-16/9 w-full"/>
        </div>
      </div>
    </section>
    <section data-scroll-section class="container mx-auto">
      <div class="py-16">
        <h2 class="text-xl mb-1">Image Animations</h2>
        <p class="pb-4">Animations without smooth-scroll</p>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              effect="a-reveal a-reveal-top-to-bot"
            />
            <p>Animation: reveal + from top to bottom</p>
          </div>
          <div class="w-full md:w-1/2 p-2">
            <LazyImage data-src="cat.jpg" class="aspect-ratio-16/9" effect="a-fadein"/>
            <p>Animation: fadein</p>
          </div>
          <div class="w-full md:w-1/2 p-2">
            <LazyImage data-src="cat.jpg" class="aspect-ratio-16/9" effect="a-softfade"/>
            <p>Animation: softfade</p>
          </div>
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              effect="a-reveal a-reveal-left-to-right"
            />
            <p>Animation: reveal + from left to right</p>
          </div>
        </div>
      </div>
    </section>

    <div class="height:800px;"></div>
  </div>
</template>

<script>
import locomotive from "~/mixins/locomotive.js";

export default {
  mixins: [locomotive]
};
</script>

<style scoped>
.container {
  width: 800px;
}
</style>
