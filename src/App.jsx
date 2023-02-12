import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles'


const App = () => {

  const theme = {

    colors: {
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      darkGray: 'hsl(0, 0%, 55%)',
      veryDarkGray: 'hsl(0, 0%, 41%)',
    },
    media: {
      laptop: '1024px',
      tab: '768px',
      mob: '425px'

    }
  }

  return (
    <>
      < ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App