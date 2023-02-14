import { useContext } from 'react'
import { SelectHouseAndAncestryContext } from '../context/SelectHouseAndAncestryContext'

export const useSelectHouseAndAncestryStore = () => {
  const {
    selectedAncestry,
    selectedHouse,
    setSelectedHouse,
    setSelectedAncestry,
    search,
    setSearch
  } = useContext(SelectHouseAndAncestryContext)

  return {
    selectedAncestry,
    selectedHouse,
    setSelectedHouse,
    setSelectedAncestry,
    search,
    setSearch
  }
}
