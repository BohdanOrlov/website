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
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
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