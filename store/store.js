import Vue from "vue";

export const store = Vue.observable({
  isNavSmall: false
});

export const mutations = {
  shrinkNav() {
    console.debug("mutation.shrinkNav");
    store.isNavSmall = true;
  },
  growNav() {
    console.debug("mutation.growNav");
    store.isNavSmall = false;
  }
};
