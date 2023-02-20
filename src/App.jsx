import { SelectHouseAndAncestryProvider } from "./context/SelectHouseAndAncestryContext"

import { Theme } from "./theme/Theme"
import { GlobalStyle } from "./theme/Global"

import { ScrollToTop } from "./components/ScrollToTop"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"

function App() {

  return (
    <Theme>
      <GlobalStyle />
      <ScrollToTop />
      <SelectHouseAndAncestryProvider>
        <Navbar />
        <Home />
      </SelectHouseAndAncestryProvider>
      <Footer/>
    </Theme>
  )
}

export default App
