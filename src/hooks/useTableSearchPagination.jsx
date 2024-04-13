import { useState, useEffect } from "react";

export default function useTableSearchPagination() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, size: 10, items: 0 });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!inputValue) {
      setSearchResults([]);
      setPagination({ ...pagination, items: data.length, page: 1 });
      return;
    }
    const filteredData = data.filter((item) => {
      return Object.values(item)
        .map((value) =>
          value?.toString().toUpperCase().includes(inputValue.toUpperCase())
        )
        .includes(true);
    });
    setSearchResults(filteredData);
    setPagination({ ...pagination, items: filteredData.length, page: 1 });
  }, [inputValue]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return {
    inputValue,
    setInputValue,
    data,
    setData,
    pagination,
    setPagination,
    searchResults,
    handleInputChange,
  };
}
