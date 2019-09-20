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
    <section data-scroll-section class="container mx-auto">
      <div class="py-16">
        <h2 class="text-xl mb-1">Smooth Scroll images</h2>
        <p class="pb-4">Nice parallax effects for scrolling</p>
        <div class="flex flex-wrap -mx-2 mb-10">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage data-src="cat.jpg" class="aspect-ratio-16/9" smooth-scroll-type="outside"/>
            <p>Simple smooth scroll</p>
          </div>
          <div class="w-full md:w-1/2 mt-4 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              smooth-scroll-type="outside"
              scroll-speed="4"
            />
            <p>Smooth scroll but with more speeed</p>
          </div>
        </div>

        <p class="pb-4">You can go also negative</p>
        <div class="flex flex-wrap -mx-2 mb-10">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              smooth-scroll-type="outside"
              scroll-speed="-1"
            />
            <p>Simple smooth scroll</p>
          </div>
          <div class="w-full md:w-1/2 mt-4 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              smooth-scroll-type="outside"
              scroll-speed="-2"
            />
            <p>Smooth scroll but with more speeed</p>
          </div>
        </div>

        <p class="pb-4">This is inside scrolling with no container overflow</p>
        <div class="flex flex-wrap -mx-2 mb-10">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              smooth-scroll-type="inside"
              scroll-speed="1"
            />
            <p>Simple smooth inner scroll</p>
          </div>
          <div class="w-full md:w-1/2 mt-4 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              smooth-scroll-type="inside"
              scroll-speed="-1"
            />
            <p>Smooth inner scroll but with more speeed</p>
          </div>
        </div>
      </div>
    </section>

    <section data-scroll-section class="container mx-auto">
      <div class="py-16">
        <h2 class="text-xl mb-1">All combined</h2>
        <p class="pb-4">Animations with smooth-scroll + animations</p>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              effect="a-fadein"
              smooth-scroll-type="outside"
              scroll-speed="2"
            />
            <p>Animation: fadein + smoothscroll</p>
          </div>
        </div>
      </div>
    </section>

    <section data-scroll-section class="container mx-auto">
      <div class="py-16">
        <h2 class="text-xl mb-1">Container Size</h2>
        <p class="pb-4">Use Object-Fit for different Container Sizes</p>
        <div class="flex flex-wrap -mx-2">
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              effect="a-fadein"
              objectFit="contain"
            />
            <p>Contain Image</p>
          </div>
          <div class="w-full md:w-1/2 p-2">
            <LazyImage
              data-src="cat.jpg"
              class="aspect-ratio-16/9"
              effect="a-fadein"
              objectFit="cover"
            />
            <p>Cover Image (default)</p>
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
