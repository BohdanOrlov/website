import Typography from "typography";
import moragaTheme from "typography-theme-moraga";

// moragaTheme.baseFontSize = '18px' // was 18px.
// moragaTheme.headerFontFamily = ['Sacramento']
moragaTheme.headerColor = 'inherit'
moragaTheme.googleFonts = [
  {
    name: 'Sacramento',
    styles: [
      '400',
    ],
  },
  {
    name: 'Londrina Outline',
    styles: [
      '400',
    ],
  },
  {
    name: 'Faster One',
    styles: [
      '400',
    ],
  },
  {
    name: 'Dawning of a New Day',
    styles: [
      '400',
    ],
  },
  {
    name: 'Stalemate',
    styles: [
      '400',
    ],
  },
  {
    name: 'Megrim',
    styles: [
      '400',
    ],
  },
  {
    name: 'Wire One',
    styles: [
      '400',
    ],
  },
],
  moragaTheme.overrideStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      // fontFamily: 'Dancing Script', 
      ...adjustFontSizeTo('100px'),
    }
  })

const typography = new Typography(moragaTheme);

export default typography;