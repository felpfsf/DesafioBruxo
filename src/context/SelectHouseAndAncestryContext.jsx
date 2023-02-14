import { createContext, useState } from "react";

export const SelectHouseAndAncestryContext = createContext({
  selectedHouse: 'all',
  selectedAncestry: 'all',
  setSelectedHouse: () => { },
  setSelectedAncestry: () => { },
  search: '',
  setSearch: () => { }
})

export const SelectHouseAndAncestryProvider = ({ children }) => {
  const [selectedHouse, setSelectedHouse] = useState('all')
  const [selectedAncestry, setSelectedAncestry] = useState('all')
  const [search, setSearch] = useState('')

  return (
    <SelectHouseAndAncestryContext.Provider value={{
      selectedHouse,
      selectedAncestry,
      setSelectedHouse,
      setSelectedAncestry,
      search,
      setSearch
    }}>
      {children}
    </SelectHouseAndAncestryContext.Provider>
  )
}