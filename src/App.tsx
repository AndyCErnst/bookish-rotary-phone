import { RouterProvider } from 'react-router-dom'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { MapContextProvider} from 'contexts/MapContext'
import { router } from './Routes/index'
import { colors, fonts } from 'utils/color'
import './db/dataAccess'

import './App.css'

// Quick fix for buttons and links that aren't keyboard accessible
// document.addEventListener('keypress', (e: KeyboardEvent) =>{
//   // @ts-ignore
//   if([' ', 'Return'].includes(e.key) && ['button', 'menuitem'].includes(e.target?.role)) {
//     // @ts-ignore
//     e.target?.click()
//   }
// })
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: fonts.heading,
          color: colors.blackish,
          fontWeight: 'bold'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          backgroundColor: colors.oldpaper,
          color: colors.rust,
          fontSize: 18
        }
      }
    }
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
    fontFamily: fonts.body,
    subtitle1: {
      fontFamily: fonts.heading,
    },
    h1: {
      fontFamily: fonts.heading,
      fontSize: '42px',
      marginBottom: '20px',
      color: colors.coco,
      textTransform: 'none',
    },
    h2: {
      fontFamily: fonts.heading,
      fontSize: '28px',
      marginBottom: '16px',
      color: colors.coco,
      textTransform: 'none',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: fonts.heading,
      fontSize: '18px',
      color: colors.coco,
    },
    h4: {
      fontFamily: fonts.heading,
      fontSize: '14px',
      lineHeight: 1.5
    },
    button: {
      fontWeight: 'bold',
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MapContextProvider>
        <RouterProvider router={router} />
        </MapContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
