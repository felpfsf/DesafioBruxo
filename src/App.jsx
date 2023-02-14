import { createContext, useState } from "react"
import { Navbar } from "./components/Navbar"
import { ScrollToTop } from "./components/ScrollToTop"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./theme/Global"
import { Theme } from "./theme/Theme"

export const SelectHouseAndAncestryContext = createContext({
  selectedHouse: 'all',
  selectedAncestry: 'all'
})

const SelectHouseAndAncestryProvider = ({ selectedHouse, selectedAncestry, children }) => {
  return (
    <SelectHouseAndAncestryContext.Provider value={{ selectedHouse, selectedAncestry }}>
      {children}
    </SelectHouseAndAncestryContext.Provider>
  )
}

function App() {
  const [selectedHouse, setSelectedHouse] = useState('all')
  const [selectedAncestry, setSelectedAncestry] = useState('all')

  return (
    <Theme>
      <GlobalStyle />
      <ScrollToTop />
      <SelectHouseAndAncestryProvider selectedHouse={selectedHouse} selectedAncestry={selectedAncestry}>
        <Navbar setSelectedHouse={setSelectedHouse} setSelectedAncestry={setSelectedAncestry} selectedHouse={selectedHouse} selectedAncestry={selectedAncestry} />
        <Home />
      </SelectHouseAndAncestryProvider>
    </Theme>
  )
}

export default App
