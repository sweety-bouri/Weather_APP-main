import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../api/OpenWeatherService';

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue, prevOptions, { page }) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
      hasMore: false, // You can set this to true if you want to implement pagination
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={300} // Reduced debounce timeout for faster response
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
      isClearable 
      additional={{
        page: 1, // Initial page for pagination (if implemented)
      }}
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderColor: state.isFocused ? '#04C4E0' : '#ccc', // Changed border color when focused
          borderRadius: '10px', // Added border radius
          boxShadow: state.isFocused ? '0 0 0 2px #04C4E0' : 'none', // Added box shadow when focused
          transition: 'all 0.3s', // Added transition for smoother effects
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#04C4E0' : state.isFocused ? '#f0f0f0' : 'transparent', // Modified option background color
          color: state.isSelected || state.isFocused ? '#fff' : '#333', // Modified option text color
          cursor: 'pointer', // Set cursor to pointer for better UX
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#333', // Changed single value text color
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: '10px', // Added border radius for menu
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added box shadow for menu
        }),
      }}
    />
  );
};

export default Search;
