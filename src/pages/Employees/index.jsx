import React, { useEffect, useState } from "react";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import SearchBar from "../../components/SearchBar";
import PaginationControl from "../../components/PaginationControl";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";

function Employees() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { allUsers } = useSelector((state) => state.usersReducer);
  const {
    pagination,
    setPagination,
    searchResults,
    inputValue,
    handleInputChange,
    data,
    setData,
  } = useTableSearchPagination();

  useEffect(() => {
    const obtenerData = async () => {
      return await dispatch(getAllUsers())
        .then(() => {
          setLoading(false);
          return true;
        })
        .catch(() => false);
    };
    const rec = async () => {
      await reconectar(obtenerData);
    };
    rec();
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      setData([...allUsers]);
      setPagination({
        ...pagination,
        items: allUsers.length,
      });
    }
    console.log(allUsers);
  }, [allUsers]);

  return (
    <div className="flex flex-col px-5 pt-10 w-full max-md:max-w-full">
      <TabTitle title="Employees" />
      <SearchBar
        text="Room #, Room Type, Max Capacity"
        value={inputValue}
        action={handleInputChange}
      />
      <div className="flex flex-col px-5 mt-8 w-full font-semibold max-md:px-5 max-md:max-w-full">
        <PaginationControl pagination={pagination} control={setPagination} />
        <Loading state={loading}>
          {inputValue !== "" && searchResults.length === 0 ? (
            <h3>{`No results for "${inputValue}" search...`}</h3>
          ) : (
            <Table
              headers={["Name", "Email", "Phone"]}
              data={data}
              size={pagination.size}
              page={pagination.page}
            />
          )}
        </Loading>
      </div>
    </div>
  );
}

export default Employees;
