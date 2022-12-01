import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { router } from './Routes/index'

import './App.css'

const h1Font = 'Rye, cursive'
const headingFont = 'Vollkorn SC, cursive'
const bodyFont = 'Vesper Libre, Helvetica Neue, serif'

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
    // MuiTooltip: {
    //   styleOverrides: {
    //     popper: {
    //       fontSize: '106px'
    //     }
    //   }
    // }
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
      fontFamily: h1Font,
      fontSize: '48px'
    },
    h2: {
      fontFamily: headingFont,
      fontSize: '28px'
    },
    h3: {
      fontFamily: headingFont,
      fontSize: '18px'
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
