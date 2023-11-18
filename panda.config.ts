import { defineConfig } from "@pandacss/dev";
import { preset as pandaPreset } from '@pandacss/preset-panda'
import { textStyles } from "./config/pandacss";


export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fontSizes: {
          ...pandaPreset.theme.tokens.sizes
        },
        lineHeights: {
          ...pandaPreset.theme.tokens.sizes
        }
      },
      textStyles
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",

  //build component
  jsxFramework: 'react'
});
