import { ThemeProvider } from 'styled-components'

const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

const devices = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`,
};

const globalBreakpoints = {
  breakpoints,
  devices
}

// const houseColors = {
//   Gryffindor: '#740001',
//   Slytherin: '#1A472A',
//   Ravenclaw: '#045FB4',
//   Hufflepuff: '#ECB939',
//   default: '#7f7f7f',
//   text: '#fff',
//   background: '#242633'
// };

// const defaultColors = {
//   text: '#fff',
//   background: '#242633'
// }

// const colors = {
//   defaultColors,
//   houseColors,
// }

const colors = {
  Gryffindor: '#740001',
  Slytherin: '#1A472A',
  Ravenclaw: '#045FB4',
  Hufflepuff: '#ECB939',
  default: '#7f7f7f',
  text: '#fff',
  background: '#242633'
}

const fontSizes = {
  small: '0.75rem',
  normal: '1rem',
  large: '2rem'
}

const theme = {
  ...globalBreakpoints,
  ...colors,
  ...fontSizes,

  text: colors.text,
  background: colors.background,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
