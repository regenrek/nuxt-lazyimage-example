module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    fontFamily: {
      text: ["Conv_text-font"],
      heading: ["Conv_heading-font"]
    },
    aspectRatio: {
      // defaults to {}
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
      "2/3": [2, 3],
      "3/2": [3, 2],
      "800/981": [800, 981]
    },
    marginOffset: {
      "0": "0",
      "05": "4.1666665%",
      "1": "8.333333%",
      "2": "16.666667%",
      "3": "25%",
      "4": "33.333333%",
      "5": "41.666667%",
      "6": "50%",
      "7": "58.333333%",
      "8": "66.666667%",
      "9": "75%",
      "10": "83.333333%",
      "11": "91.666667%",

      "1vw": "8.333333vw",
      "2vw": "16.666667vw",
      "3vw": "25vw",
      "4vw": "33.333333vw",
      "5vw": "41.666667vw",
      "6vw": "50vw",
      "7vw": "58.333333vw",
      "8vw": "66.666667vw",
      "9vw": "75vw",
      "10vw": "83.333333vw",
      "11vw": "91.666667vw",
      "12vw": "100vw"
    },
    paddingOffset: {
      "0": "0",
      "1": "8.333333%",
      "2": "16.666667%",
      "3": "25%",
      "4": "33.333333%",
      "5": "41.666667%",
      "6": "50%",
      "7": "58.333333%",
      "8": "66.666667%",
      "9": "75%",
      "10": "83.333333%",
      "11": "91.666667%",

      "1vw": "8.333333vw",
      "2vw": "16.666667vw",
      "3vw": "25vw",
      "4vw": "33.333333vw",
      "5vw": "41.666667vw",
      "6vw": "50vw",
      "7vw": "58.333333vw",
      "8vw": "66.666667vw",
      "9vw": "75vw",
      "10vw": "83.333333vw",
      "11vw": "91.666667vw",
      "12vw": "100vw"
    },
    transitionDelay: {
      "100": "100ms",
      "150": "150ms",
      "200": "200ms",
      "250": "250ms",
      "300": "300ms",
      "350": "350ms",
      "400": "400ms",
      "450": "450ms",
      "500": "500ms",
      "5500": "550ms",
      "600": "600ms",
      "650": "650ms",
      "700": "700ms",
      "750": "750ms",
      "800": "800ms",
      "850": "850ms",
      "900": "900ms"
    },
    extend: {
      width: {
        "80": "80px",
        "375": "375px"
      },
      colors: {
        red: { default: "var(--heading-color)", 60: "#CBA495" },
        beige: {
          default: "#CDBB9D",
          60: "#E1D6C4",
          25: "#f7f5f0"
        },
        brown: {
          default: "var(--text-color)"
        },
        logo: {
          1: "#CCA495",
          2: "#A9684E",
          3: "#E1D7C5"
        }
      },
      maxWidth: {
        "measure-title": "10em",
        "measure-wide": "34em",
        measure: "30em",
        "measure-narrow": "20em",
        "measure-hero-title": "11em"
      },
      height: {
        "40%": "40%",
        "60%": "60%"
      },
      zIndex: {
        "-1": "-1"
      },
      inset: {
        "1/5": "20%"
      },
      screens: {
        xxl: "1600px"
      }
    }
  },
  variants: {
    aspectRatio: ["responsive"],
    marginOffset: ["responsive"],
    paddingOffset: ["responsive"]
  },
  plugins: [
    require("./tailwind/aspect-ratio.js")(),
    require("./tailwind/margin-offset.js")(),
    require("./tailwind/padding-offset.js")(),
    require("tailwindcss-transitions")()
  ]
};
