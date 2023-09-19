import { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children, }) => {
  const [searchPost, setSearchPost] = useState('')

 
  return (
    <SearchContext.Provider value={{
        searchPost,
        setSearchPost, 
    }}>
      { children }
    </SearchContext.Provider>
  )
}