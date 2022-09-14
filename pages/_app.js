import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import GlobalStyles from "../components/styles/Global"

const theme = {
  colors: {
    body: 'pink'
  },
  mobile: {
    small: '550px',
    medium: '768px',
    large: '1000px'
  } 
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
    </ThemeProvider>
  )
}

export default MyApp
