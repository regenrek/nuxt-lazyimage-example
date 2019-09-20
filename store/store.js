import Vue from "vue";

export const store = Vue.observable({
  isNavSmall: false
});

export const mutations = {
  shrinkNav() {
    store.isNavSmall = true;
  },
  growNav() {
    store.isNavSmall = false;
  }
};
