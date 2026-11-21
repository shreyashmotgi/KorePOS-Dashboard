import { createTheme } from '@mui/material/styles'

export const SIDEBAR_WIDTH = 264

export const toneStyles = {
  positive: { bg: '#EDF4EE', fg: '#2D735C' },
  alert: { bg: '#FFF1EB', fg: '#FF5A36' },
  neutral: { bg: '#F0F0EC', fg: '#73736B' },
}

const displayFont = "'Bricolage Grotesque', 'Manrope', sans-serif"

export const theme = createTheme({
  palette: {
    primary: { main: '#FF5A36' },
    secondary: { main: '#14140F' },
    success: { main: '#2D735C' },
    background: { default: '#F8F4EC', paper: '#FFFFFF' },
    text: { primary: '#14140F', secondary: '#73736B' },
    divider: '#ECEBE5',
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    fontWeightRegular: 500,
    h1: { fontFamily: displayFont, fontWeight: 700, fontSize: '1.75rem', lineHeight: 1.4 },
    h2: { fontFamily: displayFont, fontWeight: 700, fontSize: '1.1875rem', lineHeight: 1.5 },
    h3: { fontFamily: displayFont, fontWeight: 700, fontSize: '2rem', lineHeight: 1.4 },
    h4: { fontFamily: displayFont, fontWeight: 700, fontSize: '0.9375rem' },
    caption: { fontSize: '0.75rem', lineHeight: 1.4 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiCard: { defaultProps: { elevation: 0 } },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
})
