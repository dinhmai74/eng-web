// eslint-disable-next-line
const plugin = require("tailwindcss/plugin")
module.exports = {
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
      spacing: {
        "64": "16rem",
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
      },
    },
  },
  variants: {
    accessibility: ["responsive", "focus", "important"],
    alignContent: ["responsive", "important"],
    alignItems: ["responsive", "important"],
    alignSelf: ["responsive", "important"],
    appearance: ["responsive", "important"],
    backgroundAttachment: ["responsive", "important"],
    backgroundColor: ["responsive", "hover", "focus", "important"],
    backgroundPosition: ["responsive", "important"],
    backgroundRepeat: ["responsive", "important"],
    backgroundSize: ["responsive", "important"],
    borderCollapse: ["responsive", "important"],
    borderColor: ["responsive", "hover", "focus", "important"],
    borderRadius: ["responsive", "important"],
    borderStyle: ["responsive", "important"],
    borderWidth: ["responsive", "important"],
    boxShadow: ["responsive", "hover", "focus", "important"],
    boxSizing: ["responsive", "important"],
    cursor: ["responsive", "important"],
    display: ["responsive", "important"],
    fill: ["responsive", "important"],
    flex: ["responsive", "important"],
    flexDirection: ["responsive", "important"],
    flexGrow: ["responsive", "important"],
    flexShrink: ["responsive", "important"],
    flexWrap: ["responsive", "important"],
    float: ["responsive", "important"],
    clear: ["responsive", "important"],
    fontFamily: ["responsive", "important"],
    fontSize: ["responsive", "important"],
    fontSmoothing: ["responsive", "important"],
    fontStyle: ["responsive", "important"],
    fontWeight: ["responsive", "hover", "focus", "important"],
    height: ["responsive", "important", "important"],
    inset: ["responsive", "important", "important"],
    justifyContent: ["responsive", "important"],
    letterSpacing: ["responsive", "important"],
    lineHeight: ["responsive", "important"],
    listStylePosition: ["responsive", "important"],
    listStyleType: ["responsive", "important"],
    margin: ["responsive", "important"],
    maxHeight: ["responsive", "important"],
    maxWidth: ["responsive", "important"],
    minHeight: ["responsive", "important"],
    minWidth: ["responsive", "important"],
    objectFit: ["responsive", "important"],
    objectPosition: ["responsive", "important"],
    opacity: ["responsive", "hover", "focus", "important"],
    order: ["responsive", "important"],
    outline: ["responsive", "focus", "important"],
    overflow: ["responsive", "important"],
    padding: ["responsive", "important"],
    placeholderColor: ["responsive", "focus", "important"],
    pointerEvents: ["responsive", "important"],
    position: ["responsive", "important"],
    resize: ["responsive", "important"],
    stroke: ["responsive", "important"],
    strokeWidth: ["responsive", "important"],
    tableLayout: ["responsive", "important"],
    textAlign: ["responsive", "important"],
    textColor: ["responsive", "hover", "focus", "important"],
    textDecoration: ["responsive", "hover", "focus", "important"],
    textTransform: ["responsive", "important"],
    userSelect: ["responsive", "important"],
    verticalAlign: ["responsive", "important"],
    visibility: ["responsive", "important"],
    whitespace: ["responsive", "important"],
    width: ["responsive", "important"],
    wordBreak: ["responsive", "important"],
    zIndex: ["responsive", "important"],
    gap: ["responsive", "important"],
    gridAutoFlow: ["responsive", "important"],
    gridTemplateColumns: ["responsive", "important"],
    gridColumn: ["responsive", "important"],
    gridColumnStart: ["responsive", "important"],
    gridColumnEnd: ["responsive", "important"],
    gridTemplateRows: ["responsive", "important"],
    gridRow: ["responsive", "important"],
    gridRowStart: ["responsive", "important"],
    gridRowEnd: ["responsive", "important"],
    transform: ["responsive", "important"],
    transformOrigin: ["responsive", "important"],
    scale: ["responsive", "hover", "focus", "important"],
    rotate: ["responsive", "hover", "focus", "important"],
    translate: ["responsive", "hover", "focus", "important"],
    skew: ["responsive", "hover", "focus", "important"],
    transitionProperty: ["responsive", "important"],
    transitionTimingFunction: ["responsive", "important"],
    transitionDuration: ["responsive", "important"],
    transitionDelay: ["responsive", "important"],
  },
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

    plugin(function ({ addUtilities }) {
      const hidden = {
        ".tw-hidden": {
          display: "none",
        },
        ".block": { display: "block" },
        ".flow-root": { display: "flow-root" },
        ".inline-block": {
          display: "inline-block",
        },
        ".inline": {
          display: "inline",
        },
        ".flex": {
          display: "flex",
        },
        ".inline-flex": {
          display: "inline-flex",
        },
        ".grid": {
          display: "grid",
        },
        ".inline-grid": {
          display: "inline-grid",
        },
        ".table": {
          display: "table",
        },
        ".table-caption": {
          display: "table-caption",
        },
        ".table-cell": {
          display: " table-cell",
        },
        ".table-column": {
          display: "table-column",
        },
        ".table-column-group": {
          display: "table-column-group",
        },
        ".table-footer-group": {
          display: "table-footer-group",
        },
        ".table-header-group": {
          display: "table-header-group",
        },
        ".table-row-group": {
          display: " table-row-group",
        },
        ".table-row": {
          display: "table-row",
        },
      }

      addUtilities(hidden, {
        variants: ["responsive", "hover"],
      })
    }),
  ],
  corePlugins: {
    display: false,
  },
}
