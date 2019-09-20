<template>
  <div>
    <div class="nav" :style="navStyle">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="bigpage">Big Page</nuxt-link>
      <nuxt-link to="smallpage">Small Page</nuxt-link>
    </div>
  </div>
</template>

<script>
import { store } from "~/store/store.js";

export default {
  computed: {
    navStyle() {
      console.debug("STORE ISNAMVAL", store.isNavSmall);
      return {
        padding: store.isNavSmall ? "4px 0" : "10px 0"
      };
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  background: #2E495E;
  padding: 20px 0;
  width: 100%;
  z-index: 999;
}

.nav a {
  color: #fff;
}
</style>