import React, { PropsWithChildren, useContext, useState } from 'react';

type SearchInputType = {
  searchInput: string;
  isValidateSearch: boolean;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setIsValidateSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContext = React.createContext<SearchInputType>({} as SearchInputType);

const SearchInputProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isValidateSearch, setIsValidateSearch] = useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, isValidateSearch, setIsValidateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchInputProvider;

//utility function
export const useSearchInput = () => useContext(SearchContext);
