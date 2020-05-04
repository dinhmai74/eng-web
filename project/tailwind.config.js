/* eslint-disable */

const plugin = require("tailwindcss/plugin")
module.exports = {
  theme: {
    textStyles: (theme) => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.tight"),
      },
      h1: {
        extends: "heading", // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
        fontSize: theme("fontSize.5xl"),
        "@screen sm": {
          fontSize: theme("fontSize.6xl"),
        },
      },
      h2: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
        "@screen sm": {
          fontSize: theme("fontSize.5xl"),
        },
      },
      h3: {
        extends: "heading",
        fontSize: theme("fontSize.4xl"),
      },
      h4: {
        extends: "heading",
        fontSize: theme("fontSize.3xl"),
      },
      h5: {
        extends: "heading",
        fontSize: theme("fontSize.2xl"),
      },
      h6: {
        extends: "heading",
        fontSize: theme("fontSize.xl"),
      },
      link: {
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.blue.400"),
        "&:hover": {
          color: theme("colors.blue.600"),
          textDecoration: "underline",
        },
      },
      richText: {
        fontWeight: theme("fontWeight.normal"),
        fontSize: theme("fontSize.base"),
        lineHeight: theme("lineHeight.relaxed"),
        "> * + *": {
          marginTop: "1em",
        },
        h1: {
          extends: "h1",
        },
        h2: {
          extends: "h2",
        },
        h3: {
          extends: "h3",
        },
        h4: {
          extends: "h4",
        },
        h5: {
          extends: "h5",
        },
        h6: {
          extends: "h6",
        },
        ul: {
          listStyleType: "disc",
        },
        ol: {
          listStyleType: "decimal",
        },
        a: {
          extends: "link",
        },
        "b, strong": {
          fontWeight: theme("fontWeight.bold"),
        },
        "i, em": {
          fontStyle: "italic",
        },
      },
    }),
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
    alignItems: ["responsive", "important", "children"],
    alignSelf: ["responsive", "important", "children"],
    appearance: ["responsive", "important"],
    backgroundAttachment: ["responsive", "important"],
    backgroundColor: ["responsive", "hover", "focus", "important"],
    backgroundPosition: ["responsive", "important"],
    backgroundRepeat: ["responsive", "important"],
    backgroundSize: ["responsive", "important"],
    borderCollapse: ["responsive", "important", "children"],
    borderColor: ["responsive", "hover", "focus", "important", "children"],
    borderRadius: ["responsive", "important", "children"],
    borderStyle: ["responsive", "important", "children"],
    borderWidth: ["responsive", "important", "children"],
    boxShadow: ["responsive", "hover", "focus", "important"],
    boxSizing: ["responsive", "important"],
    cursor: ["responsive", "important"],
    display: ["responsive", "important", "children"],
    fill: ["responsive", "important"],
    flex: ["responsive", "important", "children"],
    flexDirection: ["responsive", "important", "children"],
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
    justifyContent: ["responsive", "important", "children"],
    letterSpacing: ["responsive", "important"],
    lineHeight: ["responsive", "important"],
    listStylePosition: ["responsive", "important"],
    listStyleType: ["responsive", "important"],
    margin: ["responsive", "important", "children"],
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
    padding: ["responsive", "important", "children"],
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
    textIndent: ["responsive", "important"],
    textShadow: ["responsive", " important"],
    ellipsis: ["responsive", "important"],
    hyphens: ["responsive", "important"],
    kerning: ["responsive", "important"],
    textUnset: ["responsive", "important"],
    fontVariantCaps: ["responsive", "important"],
    fontVariantNumeric: ["responsive", "important"],
    fontVariantLigatures: ["responsive", "important"],
    textRendering: ["responsive", "important"],
  },
  plugins: [
    require("tailwindcss-children"),
    require("tailwindcss-bg-alpha")(),
    require("@ky-is/tailwindcss-plugin-width-height")({ variants: ["responsive", "important"] }),
    require("tailwindcss-typography")({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "t-", // the prefix to use for text style classes
    }),

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
  alphaColors: ["red.500", "gray.200"],
}
