import { GlobalStyle } from '../styles/globals'
import { Header } from '../components/Header'
import { Rodape } from '../components/Rodape'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Rodape />
    </>
  )
}
