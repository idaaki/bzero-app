import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

const pages = import.meta.glob('../pages/**/*.tsx')

createInertiaApp({
  resolve: (name) => {
    const page = pages[`../pages/${name}.tsx`]
    if (!page) {
      throw new Error(`Page not found: ${name}`)
    }
    return page()
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App {...props} />
      </ThemeProvider>
    )
  },
})
