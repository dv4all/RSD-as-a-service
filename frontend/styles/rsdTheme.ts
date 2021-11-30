/**
 * Material UI theme customization
 * see https://mui.com/customization/theming/
 *
 *
 * Default theme values can be found on link below
 * https://mui.com/customization/default-theme/ *
 */

import { createTheme } from "@mui/material/styles";
import { blue, orange, red } from '@mui/material/colors'

// define color variables to use
// further in the config
const colPrimary = blue[500]
const colSecond = orange[500]
const colError = red[600]

const rsdTheme = createTheme({
  palette: {
    primary: {
      main: colPrimary,
    },
    secondary: {
      main: colSecond,
    },
    error:{
      main: colError
    },
    background:{
      // we use this background in stricky header
      paper: 'rgba(255,255,255,0.98)'
    }
  },
  shape:{
    borderRadius: 2
  },
  typography:{
    // change default fonts to OpenSans
    // Note! you also need update pages/_document.tsx file
    // to import proper fontFamily
    fontFamily: '"Open Sans", sans-serif',
    // set default fontsize to 1rem (16px)
    fontSize:16,
    button:{
      fontWeight: 600,
      letterSpacing: '0.125rem'
    },
    // change headers fontSize and weight
    h1: {
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.125,
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