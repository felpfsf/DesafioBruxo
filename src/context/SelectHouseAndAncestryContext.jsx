import { createContext, useState } from "react";

export const SelectHouseAndAncestryContext = createContext({
  selectedHouse: 'all',
  selectedAncestry: 'all',
  setSelectedHouse: () => { },
  setSelectedAncestry: () => { },
})

export const SelectHouseAndAncestryProvider = ({ children }) => {
  const [selectedHouse, setSelectedHouse] = useState('all')
  const [selectedAncestry, setSelectedAncestry] = useState('all')

  return (
    <SelectHouseAndAncestryContext.Provider value={{
      selectedHouse,
      selectedAncestry,
      setSelectedHouse,
      setSelectedAncestry
    }}>
      {children}
    </SelectHouseAndAncestryContext.Provider>
  )
}