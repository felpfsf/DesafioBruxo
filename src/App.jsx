import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./theme/Global"
import { Theme } from "./theme/Theme"

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <ScrollToTop />
      <Home />
    </Theme>
  )
}

export default App
