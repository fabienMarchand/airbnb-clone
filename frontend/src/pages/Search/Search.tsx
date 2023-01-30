import React, { useState, useEffect } from 'react';
import { useFetch } from '../../utils/useFetch';

import { useSearchInput } from '../../context/SearchContext';

import './Search.css';
import Card from '../../components/Card/Card';

export type SearchPageProps = {
  id: number;
  title: string;
  description: string;
  location: string;
  picture: string;
  stars: number;
  numberOfRooms: number;
  price: number;
  categoryId: number;
};

const SearchPage: React.FC<SearchPageProps> = () => {
  const [locations, setLocations] = useState<SearchPageProps[]>([]);
  const [sortedLocations, setSortedLocations] = useState(locations);
  const { searchInput, isValidateSearch } = useSearchInput();
  const [filteredLocations, setSFilteredLocations] = useState(locations);
  // Create a function to fetch all locations from database
  useEffect(() => {
    try {
      const fetchLocations = async () => {
        const properties = await useFetch<SearchPageProps[]>('http://localhost:8000/locations');
        setLocations(properties);
      };
      fetchLocations();
    } catch (error) {
      console.log(error);
    }
  }, []);

  let existingCat: number[] = [];
  // Create a function to sort locations by categories & by number of rooms
  useEffect(() => {
    const sortEntries = (arr: SearchPageProps[]) => {
      let firstSortArr = arr.sort((a, b) => (a.categoryId >= b.categoryId ? 0 : -1));
      arr.map((elem) => {
        if (!existingCat.includes(elem.categoryId)) {
          existingCat.push(elem.categoryId);
        }
        return elem;
      });

      let secondSortArr = [];
      for (let i = 0; i <= existingCat.length; i++) {
        secondSortArr.push(
          firstSortArr
            .filter((elem) => elem.categoryId === i)
            .sort((a, b) => {
              return a.numberOfRooms >= b.numberOfRooms ? 0 : -1;
            })
        );
      }
      var filteredArr = secondSortArr.reduce(function (prev, next) {
        return prev.concat(next);
      });

      return filteredArr;
    };

    setSortedLocations(sortEntries(locations));
    setSFilteredLocations(sortEntries(locations));
  }, [locations]);

  // Create a search function linked to the search input in the header
  useEffect(() => {
    if (isValidateSearch && searchInput) {
      setSFilteredLocations(
        sortedLocations.filter((location) =>
          location.location.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setSFilteredLocations(sortedLocations);
    }
  }, [isValidateSearch]);

  return (
    <div className="search">
      <h3>Houses</h3>
      <div className="card-container">
        {filteredLocations.map((location) => {
          return <Card key={location.id} location={location} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
