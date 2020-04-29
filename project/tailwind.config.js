// eslint-disable-next-line
const plugin = require("tailwindcss/plugin")
module.exports = {
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FEECEB",
          200: "#FBCFCD",
          300: "#F9B2AF",
          400: "#F57973",
          500: "#F03F37",
          600: "#D83932",
          700: "#902621",
          800: "#6C1C19",
          900: "#481311",
        },
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls((decl) => {
            decl.important = true
          })
        })
      })
    }),
  ],
}
