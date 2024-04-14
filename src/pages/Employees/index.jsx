import React, { useEffect, useState } from "react";
import TabTitle from "../../components/TabTitle";
import Table from "../../components/Table";
import useTableSearchPagination from "../../hooks/useTableSearchPagination";
import SearchBar from "../../components/SearchBar";
import PaginationControl from "../../components/PaginationControl";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../../redux/Employees/Actions/actions";
import { reconectar } from "../../utils";

function Employees() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { allEmployees } = useSelector((state) => state.employeesReducer);
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
      return await dispatch(getAllEmployees())
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
    if (allEmployees.length > 0) {
      setData([
        ...allEmployees.map(
          ({ id, email, guest_profile, is_active, username }) => ({
            id,
            full_name: guest_profile ? guest_profile.full_name : "Not defined",
            username,
            email,
            phone: guest_profile ? guest_profile.phone : "Not defined",
            is_active,
          })
        ),
      ]);
      setPagination({
        ...pagination,
        items: allEmployees.length,
      });
      console.log(allEmployees);
    }
  }, [allEmployees]);

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
              headers={["Full name", "User name", "Email", "Phone", "Status"]}
              data={searchResults.length > 0 ? searchResults : data}
              idName="id"
              size={pagination.size}
              page={pagination.page}
              omitt="id"
            />
          )}
        </Loading>
      </div>
    </div>
  );
}

export default Employees;
