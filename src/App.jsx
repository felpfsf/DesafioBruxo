import { SelectHouseAndAncestryProvider } from "./context/SelectHouseAndAncestryContext"

import { Theme } from "./theme/Theme"
import { GlobalStyle } from "./theme/Global"

import { ScrollToTop } from "./components/ScrollToTop"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"

function App() {

  return (
    <Theme>
      <GlobalStyle />
      <ScrollToTop />
      <SelectHouseAndAncestryProvider>
        <Navbar />
        <Home />
      </SelectHouseAndAncestryProvider>
    </Theme>
  )
}

export default App
