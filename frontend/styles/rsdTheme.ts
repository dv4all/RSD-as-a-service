/**
 * Material UI theme customization
 * see https://mui.com/customization/theming/
 *
 *
 * Default theme values can be found on link below
 * https://mui.com/customization/default-theme/ *
 */

import { createTheme } from "@mui/material/styles";

// define color variables to use
// These variable need to match the css variables from global.css until mui supports css variables in the theme declaration
const colorPrimary = '#00A3E3'
const colorSecondary = '#222425'
const colorTextPrimary = 'rgba(34,36,37,1)'
const colorTextSecondary = 'rgba(34,36,37,0.87)'
const colorTextDisabled = 'rgba(34,36,37,0.45)'
const colorDivider = '#DDD'

const rsdTheme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
    divider: colorDivider,
    text: {
      primary: colorTextPrimary,
      secondary: colorTextSecondary,
      disabled: colorTextDisabled,
    },
  },
  shape:{
    borderRadius: 2
  },
  typography:{
    // change default fonts to OpenSans
    // Note! you also need update pages/_document.tsx file
    // to import proper fontFamily
    // fontFamily: 'SFMono-Regular, Menlo, Monaco,Consolas, "Liberation Mono","Courier New", monospace',
    // legacy RSD use these fonts
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sans-serif'",
    // set default fontsize to 1rem (16px)
    button:{
      fontWeight: 600,
      letterSpacing: '0.125rem'
    },
  },
  // overriding defaults
  // in Mui components
  // see https://mui.com/customization/theme-components/
  components: {},
})

export {
  rsdTheme
}

// show all theme values
// console.log("rsdTheme:", JSON.stringify(rsdTheme))
