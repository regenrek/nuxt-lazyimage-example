import path from "path";

export default {
  mode: "spa",
  head: {
    title: "Nuxt.js with locomotive scroll library",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js with locomotive scroll library"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src:
          "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
      }
    ]
  },
  css: ["~/assets/styles/main.css"],
  plugins: [
    {
      src: "~/plugins/locomotive.js",
      ssr: false
    }
  ],
  modules: [
    "@nuxt/http",
    "nuxt-lazyimage",
    "@bazzite/nuxt-optimized-images",
    "./codesandbox"
  ],
  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "postcss-nested": {}
      },
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    extend(config, ctx) {}
  }
};
