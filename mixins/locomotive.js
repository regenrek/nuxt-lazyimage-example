import _ from "lodash";
import { store, mutations } from "~/store/store.js";
const OFFSET = 350;

export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  watch: {
    $route() {
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(
      function() {
        this.lmS = new this.locomotiveScroll({
          el: document.querySelector("#js-scroll"),
          smooth: true /* if false disable overflow: hidden on html, body */
        });

        this.lmS.on("scroll", _.throttle(this.onLmsScroll, 150));
        window.addEventListener(
          "resize",
          _.debounce(this.onLmsResize.bind(this), 100)
        );
      }.bind(this)
    );
  },
  destroyed() {
    this.lmS.destroy();
    window.removeEventListener("resize", this.onLmsResize);
  },
  computed: {
    isNavSmall() {
      return store.isNavSmall;
    }
  },
  methods: {
    onLmsScroll(obj) {
      this.scrollPosition = obj["scroll"]["y"];
      if (this.scrollPosition < OFFSET) {
        if (this.isNavSmall) {
          mutations.growNav();
        }
      } else {
        if (!this.isNavSmall) {
          mutations.shrinkNav();
        }
      }
    },
    onLmsResize() {
      this.lmS.update();
    }
  }
};
