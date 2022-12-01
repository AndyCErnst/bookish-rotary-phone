import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { router } from './Routes/index'

import './App.css'

const headingFont = 'Rye, cursive'
const bodyFont = ['Cormorant Garamond', 'Helvetica Neue', 'serif'].join(',')

// https://mui.com/material-ui/customization/theming/
export const theme: ThemeOptions = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: 'center',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#ac4807',
    },
    secondary: {
      main: '#ac4807',
    },
  },
  typography: {
    fontFamily: bodyFont,
    subtitle1: {
      fontFamily: headingFont,
    },
    h1: {
      fontFamily: headingFont,
    },
    h2: {
      fontFamily: headingFont,
    },
    h3: {
      fontFamily: headingFont,
    },
    button: {
      fontWeight: 'bold'
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
